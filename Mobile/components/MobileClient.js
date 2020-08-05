import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import { mobileEvents } from './events';


class MobileClient extends React.PureComponent {

  static propTypes = {
    
    FIO:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired
    }),
    
  };

  state = {
    FIO: this.props.FIO,
   

  };

  componentWillReceiveProps = (newProps) => { 
    console.log("MobileClient id="+this.props.FIO.id+" componentWillReceiveProps");  
    this.setState({FIO:newProps.FIO});
  };

  //передача информации о том, что нажата кнопка "редактировать" у какого-то клиента
  editGood = () => {
      mobileEvents.emit('EEditClient', this.props.FIO.id)
  }

  //передача информации о том, что нажата кнопка "удалить" у какого-то клиента  
  deleteGood= () => {
      var question=confirm("Вы уверены, что хотите удалить этот товар?");  
      if (question) {
        mobileEvents.emit('EDeleteClient',this.props.FIO.id);
      }
      
  }

    render() {

      console.log("MobileClient id="+this.state.FIO.id+" render"); 
       
        return (
            <tr className={'NewTray'}>
              <td className='cell'>{this.state.FIO.fam}</td> 
              <td className='cell'>{this.state.FIO.im}</td>
              <td className='cell'>{this.state.FIO.otch}</td>
              <td className='cell'>{this.state.FIO.balance}</td>
               
              {
              (this.props.FIO.balance > 0)
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