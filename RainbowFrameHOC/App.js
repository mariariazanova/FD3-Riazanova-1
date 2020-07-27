"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

let colors = ['#ff0000','#ffa500', '#ffff00','#66ff00', '#00BFFF', '#0000ff', '#800080']; 
  

ReactDOM.render(
  <RainbowFrame  colors={colors}/>,
  document.getElementById('container') 
);
