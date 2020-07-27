import React from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton extends React.Component {

  static propTypes = {
      caption1:PropTypes.string.isRequired,
      caption2:PropTypes.string.isRequired,
      cbPressed:PropTypes.func.isRequired,
  };

  clickButton  = (EO) => {
    this.props.cbPressed(EO.target.value);
  }

  render() {
  
    let rainbow = this.props.children;
    
    return (
        <div className="DoubleButton">
            <input type='button' value={this.props.caption1}
                   onClick={this.clickButton}   /> 
            {rainbow}
            <input type='button' value={this.props.caption2}
                   onClick={this.clickButton}   /> 
        </div>           
            
    )  
  }

}

export default DoubleButton;