import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

  static propTypes = {
      colors:PropTypes.array,
  };

  render() {

    
    
    return (
      (this.props.colors.length)
      ? <div style={{border: "solid 8px " + this.props.colors[0], padding: "8px"}}>
              <RainbowFrame colors={this.props.colors.splice(1)}> { /* <передаем массив цветов, кроме первого/> */ }
                  {this.props.children}
              </RainbowFrame>
         </div>
      : <span>{this.props.children}</span>
     
    );
  }




}

export default RainbowFrame;    

