// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';
import {App} from '@carto/toolkit';
import DropboxIcon from '../../components/icons/carto-icon';
import SharingUrl from '../../components/sharing/sharing-url';
import {formatCsv} from 'processors/data-processor';
import {getMapPermalink} from '../url';
import get from 'lodash.get';
import {loadRemoteResourceSuccess,setLoadingMapStatus} from '../../actions';

const NAME = 'carto';
const carto = new App({
  server: localStorage.getItem('carto.server') || 'https://{user}.carto-staging.com/',
  namespace: 'keplergl'
});

/**
 * Set the auth toke to be used with carto client
 * @param authToken
 */
function setAuthToken(authToken) {
  if (!carto || !authToken) {
    return;
  }

  const username = localStorage.getItem('carto.username');
  const apiKey = localStorage.getItem('carto.masterKey');

  if (!username || !apiKey) {
    console.error('Please set carto.username and carto.masterKey on localstorage');
    return;
  }

  carto.setCredentials(apiKey, username);
}

/**
 * The CARTO cloud provider polls the created window internally to parse the URL
 * @param {*} location 
 */
function getAccessTokenFromLocation(location) {
  return;
}

async function uploadFile({blob, name: fileName, isPublic = true}) {
  const payload = JSON.parse(await new Response(blob).text());

  const { config, datasets } = payload;

  const cartoDatasets = datasets.map(convertDataset);

  const cs = await carto.CustomStorage;

  const result = await cs.createVisualization({
    name: fileName,
    config: JSON.stringify(config),
    isPrivate: !isPublic
  }, cartoDatasets, true);

  // eslint-disable-next-line no-console
  console.log(result);

  return ({
    url: `demo/map/carto/${result.id}?owner=${carto.username}`
  });
}

function convertDataset({ data: dataset }) {
  const {allData, fields, id} = dataset;
  const columns = fields.map((field) => ({
    name: field.name,
    type: field.type
  }));

  const file = formatCsv(allData, fields);

  return {
    name: id,
    columns,
    file
  }
}

/**
 * The CARTO toolkit library takes care of the login process.
 */
function handleLogin(onCloudLoginSuccess) {
  carto.login().then(() => {
    onCloudLoginSuccess(NAME);
  });
}

/**
 * Returns the access token. If it has expired returns null. The toolkit library loads it
 * from localStorage automatically
 */
function getAccessToken() {
  return localStorage.getItem('carto.masterKey');
}

function loadMap(mapId, queryParams) {
  const { owner: username } = queryParams;
  return dispatch => {
    dispatch(setLoadingMapStatus(true));
    carto.PublicStorageReader.getVisualization(username, mapId).then((result) => {
      // These are the options required for the action. For now, all datasets that come from CARTO are CSV
      const options = result.datasets.map((dataset) => ({
        // TODO: customStorage should return dataset name without prefix
        id: dataset.name.split('keplergl_public_v0_')[1],
        dataUrl: '.csv'
      }));

      const datasets = result.datasets.map((dataset) => dataset.file);

      dispatch(loadRemoteResourceSuccess(datasets, result.vis.config, options))
    });
  }
}

function renderMeta(meta) {
  const metaUrl = get(meta, 'url');
  const sharingLink = metaUrl ? getMapPermalink(metaUrl) : null;

  // TODO: link to CARTO dashboard below
  return (<SharingUrl url={sharingLink} message={'Share your map with other users'} />);
}

export default {
  name: NAME,
  getAccessToken,
  getAccessTokenFromLocation,
  handleLogin,
  icon: DropboxIcon,
  setAuthToken,
  loadMap,
  renderMeta,
  uploadFile
};
