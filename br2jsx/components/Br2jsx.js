import React from 'react';
import PropTypes from 'prop-types';

import './Br2jsx.css';

class Br2jsx extends React.Component {

  static propTypes = {
      text:PropTypes.string.isRequired,
  };

  render() {
     let reg = /<br\s*\/?>/gi;  //регулярное выражение для поиска в строке <br>, <br />, <br/>
     let textSplit = this.props.text.split(reg); //в строке отыскиваются все подстроки, соответствующие регулярному выражению, и они являются местами разбиения строки
     console.log (textSplit);
      let textSplitShow = textSplit.map ( (v, i, a) => {
        return (
        (i === a.length-1)
        ? v
        : v = [v, <br key={i}/>]  
        )             
        });
        console.log (textSplitShow);
    return (

        <div className="br2jsx">
            {textSplitShow}
        
        </div>  

    );
  }  
}
export default Br2jsx;

