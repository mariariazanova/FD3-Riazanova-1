import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

  static propTypes = {
      colors:PropTypes.array.isRequired,
  };

  render() {
  
    let rainbow = this.props.children;
    this.props.colors.forEach( (color) =>  
        rainbow= <div style={{border:"solid 8px "+color,padding:"8px"}}>
                   {rainbow}
                 </div>
    );  

    return (
        <div className="Rainbow">
            {rainbow}
        </div>           
            
    )  
  }

}

export default RainbowFrame;    

