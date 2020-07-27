"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';
import DoubleButton from './components/DoubleButton';

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

  

ReactDOM.render(
  <DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) } >в студёную зимнюю</DoubleButton>,

  //<RainbowFrame colors={colors}>
  //  Hello!
  //</RainbowFrame>, 
  document.getElementById('container') 
);
