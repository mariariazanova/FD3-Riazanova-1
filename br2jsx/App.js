"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Br2jsx from './components/Br2jsx';

let text='первый<br>второй<br/>третий<br />последний';


ReactDOM.render(
 
      <Br2jsx text={text}>
      
      </Br2jsx>
  
    , 
  document.getElementById('container') 
);
