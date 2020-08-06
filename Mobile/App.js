"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';
import clientsArr from './clients.json';


let companyName='Velcom';
  

ReactDOM.render(
  <MobileCompany  name={companyName} clients={clientsArr}/>,
  document.getElementById('container') 
);
