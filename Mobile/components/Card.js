import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';
import { mobileEvents } from './events';

class Card extends React.PureComponent {

  static propTypes = {
    client: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }).isRequired,
    mode: PropTypes.number.isRequired,
  };

  state = {
      cardName: ((this.props.mode===2) ? 'Добавление нового клиента:' : ((this.props.mode===1) ? 'Редактирование информации о клиенте:' : '')),
      client: this.props.client,
      
  }


  newFamRef = null;
  newImRef = null;
  newOtchRef = null;
  newBalanceRef = null;

  setNewFamRef = (ref) =>{
    this.newFamRef=ref;
  }
  
  setNewImRef = (ref) =>{
    this.newImRef=ref;
  }

  setNewOtchRef = (ref) =>{
      this.newOtchRef=ref;
  }

  setNewBalanceRef = (ref) =>{
      this.newBalanceRef=ref;
  }

  
  saveEditing = () => {
    let editClient = {id:this.props.client.id, im: this.newImRef.value, fam: this.newFamRef.value, otch: this.newOtchRef.value, balance: Number(this.newBalanceRef.value)};
    mobileEvents.emit('ESaveEditClient', editClient);
  }

  addGood = () => {
    let newClient = {id:this.props.client.id, im: this.newImRef.value, fam: this.newFamRef.value, otch: this.newOtchRef.value, balance: Number(this.newBalanceRef.value)};
    mobileEvents.emit('ESaveNewClient', newClient);
    

}

  cancelEditing = () => {
    mobileEvents.emit('ECansel');
  };

  cancelCreating = () => {
    mobileEvents.emit('ECansel');
    
};


    render() {
      console.log("Card id="+this.props.client.id+" render"); 
      return (
        
        <div>
     
        {
        
        (this.props.mode==1 || this.props.mode==2)
        ? <div className='ClientCard'>
          <p className='Title'>{this.state.cardName}</p>
       
          <p className=''>ID клиента: {this.props.client.id}</p>
          <div>
            <label>
              <span>Фамилия:</span>
              <input type='text' name='' defaultValue={this.state.client.fam} 
                     ref={this.setNewFamRef}
                      />
            </label>
          </div> 
          <div>
            <label>
              <span>Имя:</span>
              <input type='text' name='' defaultValue={this.state.client.im} 
                     ref={this.setNewImRef}
                     />
            </label>
          </div> 
          <div>
            <label>
              <span>Отчество:</span>
              <input type='text' name='' defaultValue={this.state.client.otch} 
                     ref={this.setNewOtchRef}
                      />
            </label>
          </div> 
          <div>
            <label>
              <span>Баланс:</span>
              <input type='text' name='' defaultValue={this.state.client.balance} 
                     ref={this.setNewBalanceRef}
                       />

            </label>
          </div> 
          <input type='button' name='' value='Сохранить' 
                 onClick = {
                 (this.props.mode==1)
                 ?  this.saveEditing
                 :  this.addGood  
                 
                 }
               
                 />

          <input type='button' name='' value='Отмена' 
                 onClick = {
                  (this.props.mode==1)
                  ? this.cancelEditing
                  : this.cancelCreating
                  }  
                  />
        
        
        </div>                                 
        :null

        }    
      </div> 
      )
        
    }

} 
export default Card;

