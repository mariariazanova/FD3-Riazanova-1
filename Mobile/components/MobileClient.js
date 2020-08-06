import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import { mobileEvents } from './events';


class MobileClient extends React.PureComponent {

  static propTypes = {
    
    clientInfo:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired
    }),
    
  };

  //state = {
  //  clientInfo: this.props.clientInfo,
  //};

  //componentWillReceiveProps = (newProps) => { 
  //  console.log("MobileClient id="+this.props.clientInfo.id+" componentWillReceiveProps");  
  //  this.setState({clientInfo:newProps.clientInfo});
  //};

  //передача информации о том, что нажата кнопка "редактировать" у какого-то клиента
  editGood = () => {
      mobileEvents.emit('EEditClient', this.props.clientInfo.id)
  }

  //передача информации о том, что нажата кнопка "удалить" у какого-то клиента  
  deleteGood= () => {
      var question=confirm("Вы уверены, что хотите удалить этот товар?");  
      if (question) {
        mobileEvents.emit('EDeleteClient',this.props.clientInfo.id);
      }
      
  }

    render() {

      console.log("MobileClient id="+this.props.clientInfo.id+" render"); 
       
        return (
            <tr className={'NewTray'}>
              <td className='cell'>{this.props.clientInfo.fam}</td> 
              <td className='cell'>{this.props.clientInfo.im}</td>
              <td className='cell'>{this.props.clientInfo.otch}</td>
              <td className='cell'>{this.props.clientInfo.balance}</td>
               
              {
              (this.props.clientInfo.balance > 0)
              ?<td className='cell MobileClientBalanceActive'>active</td>
              :<td className='cell MobileClientBalanceBlocked'>blocked</td>
              }     
              
              <td className='cell btn'>
                <input type='button' value='Редактировать' 
                       onClick={this.editGood} 
                        />
              </td>
              <td className='cell btn'>         
                <input type='button' value='Удалить' 
                       onClick={this.deleteGood} 
                        />
              </td> 
            </tr>
       
        )
    }
  } 
export default MobileClient;