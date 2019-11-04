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

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Base from './base';

export default class Database extends Component {
  static propTypes = {
    /** Set the height of the icon, ex. '16px' */
    height: PropTypes.string
  };

  static defaultProps = {
    height: '16px',
    predefinedClassName: 'data-ex-icons-database'
  };

  render() {
    return (
      <Base {...this.props}>
        <g id="Storage-engine-v3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Storage-v3-/-logged-saved" transform="translate(-249.000000, -37.000000)" fill="#6A7484" fillRule="nonzero">
                <g id="Group">
                    <path d="M256.617242,37 C260.640494,37 263.611532,38.08859 264.133209,39.803591 C264.199755,39.9439961 264.234485,40.0911005 264.234485,40.247593 L264.234485,50.352407 C264.234485,50.4496899 264.221235,50.5461293 264.19002,50.6557401 L264.107352,50.8959418 C263.469606,52.5612135 260.433353,53.6 256.617242,53.6 C252.788422,53.6 249.747271,52.5553315 249.118094,50.8713057 L249.037491,50.6291418 C249.01267,50.5391614 249,50.4462243 249,50.352407 L249,40.247593 C249,40.0911271 249.034718,39.9440455 249.089222,39.8329232 L249.138885,39.691902 C249.798527,38.0241617 252.716092,37 256.617242,37 Z M262.408948,48.90573 L262.185979,49.0207134 C260.88502,49.6565387 258.951628,50.022763 256.617242,50.022763 C254.28091,50.022763 252.346002,49.655973 251.047947,49.021533 L250.825537,48.9068148 L250.825537,50.217405 L250.842331,50.2780179 L250.872995,50.3351594 C251.026506,50.5719694 251.548118,50.9034474 252.359904,51.1762355 C253.482969,51.553624 254.980182,51.7744633 256.617242,51.7744633 C258.254303,51.7744633 259.751515,51.553624 260.87458,51.1762355 C261.754015,50.880715 262.292898,50.5163155 262.392798,50.2742041 L262.40745,50.2242645 L262.408948,48.90573 Z M262.408948,45.6284931 L262.185979,45.7434765 L261.94988,45.8528626 C260.656175,46.4211197 258.814311,46.7455261 256.617242,46.7455261 C254.28091,46.7455261 252.346002,46.3787361 251.047947,45.7442961 L250.825537,45.6295779 L250.825537,46.6709865 L250.835838,46.7549404 L250.836715,46.8395413 L250.827799,46.9240088 L250.831226,46.946997 L250.848283,46.9976564 L250.89032,47.0678849 L250.958996,47.1497593 L251.014023,47.204051 L251.156863,47.3218983 L251.299517,47.4187828 L251.384531,47.4710433 L251.54559,47.5599645 L251.650998,47.6134308 L251.842289,47.7008804 L251.995957,47.7652884 L252.232098,47.8543093 L252.530616,47.9538714 C252.941831,48.0820917 253.404622,48.1917775 253.904758,48.2779081 L254.222076,48.3286272 L254.507377,48.367721 L254.774435,48.3994623 L255.042082,48.4255476 L255.357252,48.4523684 L255.853308,48.480408 L256.296486,48.4942722 L256.82627,48.495992 L257.264038,48.4863284 L257.805433,48.457581 L258.191966,48.4263839 L258.731196,48.3680716 L258.998207,48.3313582 L259.326134,48.2791984 L259.695524,48.2100271 C260.177852,48.1121355 260.618392,47.9919671 261.004875,47.8540374 L261.239278,47.7655595 L261.392482,47.701414 L261.547863,47.6305911 L261.684419,47.5628938 L261.854675,47.4688915 L262.021426,47.3616566 L262.132664,47.2798529 L262.222179,47.2030115 L262.275173,47.1505645 L262.309912,47.1110868 L262.361339,47.042888 L262.390973,46.9877108 L262.408583,46.9285418 L262.397928,46.8405209 L262.398693,46.7552532 L262.408948,46.671058 L262.408948,45.6284931 Z M262.408948,42.3497808 L262.107271,42.5028046 L261.874641,42.6080223 L261.595402,42.7191702 L261.441961,42.7751022 L261.134257,42.8769305 L260.944093,42.9344734 L260.542182,43.0438674 L260.284075,43.1052569 L259.971723,43.1697241 L259.718214,43.2170854 L259.301478,43.2842005 L259.050021,43.3189204 L258.600264,43.371928 L258.267068,43.4023523 L257.836361,43.431398 L257.561746,43.4456627 L257.095256,43.4620681 L256.617242,43.4682891 L256.138802,43.4620531 L255.875617,43.4543066 L255.398265,43.4314079 L254.961122,43.401868 L254.522109,43.3601763 L254.313134,43.3363387 L253.932122,43.2840856 L253.689857,43.2465476 L253.262917,43.1697569 L253.025009,43.1205239 L252.687773,43.0428134 L252.421198,42.9722375 L252.099911,42.8768314 L251.919496,42.8181658 L251.56586,42.6912299 L251.350223,42.6038092 L251.129528,42.5039465 L250.956489,42.4190116 L250.825537,42.3497055 L250.825537,43.3937495 L250.835811,43.4778729 L250.836502,43.5636598 L250.827081,43.6513465 L250.841257,43.7047947 L250.873255,43.7650938 L250.903606,43.8080366 L250.958996,43.8725223 L250.994028,43.9083567 L251.156863,44.0446614 L251.384531,44.1938063 L251.545988,44.2829109 L251.654181,44.3376605 L251.842289,44.4236434 L251.995957,44.4880514 L252.232098,44.5770723 L252.530616,44.6766344 C252.941831,44.8048548 253.404622,44.9145406 253.904758,45.0006711 L254.222076,45.0513902 L254.507377,45.0904841 L254.774435,45.1222253 L255.357252,45.1751315 L256.296486,45.2170353 L256.617242,45.2199893 L257.041187,45.215099 L257.264038,45.2090914 L257.844425,45.178142 L258.365731,45.1317365 L258.731196,45.0908346 L258.998207,45.0541212 L259.326134,45.0019614 L259.695524,44.9327902 C260.177852,44.8348986 260.618392,44.7147301 261.004875,44.5768004 L261.239278,44.4883226 L261.392482,44.424177 L261.547863,44.3533541 L261.685652,44.2849473 L261.804271,44.2201177 L261.935339,44.1419794 L262.021426,44.0844196 L262.132664,44.002616 L262.222179,43.9257745 L262.275173,43.8733275 L262.331092,43.8082101 L262.361339,43.7656511 L262.385743,43.7218057 L262.408583,43.6513049 L262.397928,43.5632839 L262.398693,43.4780163 L262.408948,43.3938211 L262.408948,42.3497808 Z M256.617242,38.8255367 C253.41595,38.8255367 250.825537,39.7398659 250.825537,40.3841446 C250.825537,41.0284232 253.41595,41.9427524 256.617242,41.9427524 C259.818535,41.9427524 262.408948,41.0284232 262.408948,40.3841446 C262.408948,39.7398659 259.818535,38.8255367 256.617242,38.8255367 Z" id="Combined-Shape"></path>
                </g>
            </g>
        </g>
      </Base>
    );
  }
};
