import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

  static propTypes = {
      colors:PropTypes.array.isRequired,
  };

  render() {

    this.props.colors.forEach( color => { 
        <div style={{border:"solid 5px "+this.props.color,padding:"10px"}}>
        {this.props.children}
      </div>
    });

    return (
        <div className="Rainbow">{rainbow}</div>
    );
   
    }

}

export default RainbowFrame;    

