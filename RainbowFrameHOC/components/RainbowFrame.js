import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

import DoubleButton from './DoubleButton';
import { withRainbowFrame } from './withRainbowFrame';


let colors = ['#ff0000','#ffa500', '#ffff00','#66ff00', '#00BFFF', '#0000ff', '#800080']; 
let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);

class RainbowFrame extends React.Component {

  static propTypes = {
      colors:PropTypes.array.isRequired,
  };



  render() {
  
    
    return (
      <DoubleButton caption1='однажды' caption2='пору' cbPressed={ num => alert(num) } >в студёную зимнюю</DoubleButton>,
      <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) }>вышел, был сильный</FramedDoubleButton>
           
            
    );  
  }

}

export default RainbowFrame;
