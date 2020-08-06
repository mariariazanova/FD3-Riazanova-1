import React from 'react';
import PropTypes from 'prop-types';
import {mobileEvents} from './events';


import './MobileCompany.css';

import MobileClient from './MobileClient';
import Card from './Card';

class MobileCompany extends React.PureComponent {

  static propTypes = {
      name: PropTypes.string.isRequired,
      clients:PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          fam: PropTypes.string.isRequired,
          im: PropTypes.string.isRequired,
          otch: PropTypes.string.isRequired,
          balance: PropTypes.number.isRequired,
        })
      ),
    
  };

  state = {
      name: this.props.name,
      clients:this.props.clients, //массив отображаемых клиентов
      clients3: this.props.clients, //хеш с элементами просматриваемых клиентов
      //productToEdit: null, //хеш с элементами редактируемого клиента
      mode:0, //режим работы с карточкой ()
            // 0 - карточка не отображается, 
            // 1 - редактирование карточки,
            // 2 - добавление клиента)

      //isAnyProductChanged: false, //идентификатор наличия несохраненных изменений в информации о клиенте
      client: {},
      //selectedButtonCode: null,
  };



  //обработчики событий
  componentDidMount = () => {
    mobileEvents.addListener('EDeleteClient', this.buttonSelected);
    mobileEvents.addListener('EEditClient', this.goodEdited);
    mobileEvents.addListener('ECansel',this.cancelEditing);
    mobileEvents.addListener('ESaveEditClient', this.saveEditing);
    mobileEvents.addListener('ESaveNewClient', this.addGood);
    mobileEvents.addListener('ECreateNewClient', this.createNewGood);
  };
  componentWillUnmount = () => {
    mobileEvents.removeListener('EDeleteClient', this.buttonSelectedt);
    mobileEvents.removeListener('EEditClient', this.goodEdited);
    mobileEvents.removeListener('ECansel',this.cancelEditing);
    mobileEvents.removeListener('ESaveEditClient', this.saveEditing);
    mobileEvents.removeListener('ESaveNewClient', this.addGood);
    mobileEvents.removeListener('ECreateNewClient', this.createNewGood);
  };
 
      
  //редактирование карточки клиента
  goodEdited =  (id) => {
      this.setState( {editedGoodCode:id});
      let goodsCard2=this.state.clients3.filter( client => {return client.id=== id});
      this.setState( {client: goodsCard2[0],
                    //selectedGoodCode:id,
                    mode: 1
                  });
  }

  //сохранение отредактированных данных
  saveEditing = (editClient) => {
    console.log ("editClient=" + editClient);
    console.log (editClient);
      //let tmpPoductsState = this.state.clients3.slice();
      let changed=false;
      let tmpPoductsState = [...this.state.clients3]; // копия хэша      
      //let editIndex = tmpPoductsState.findIndex(x => x.id === editClient.id);
      tmpPoductsState.forEach ( (c, i) => {
        if (( c.id==editClient.id && c.fam != editClient.fam ) ||
        (c.id==editClient.id && c.im != editClient.im) || 
        (c.id==editClient.id && c.otch != editClient.otch) || 
        (c.id==editClient.id && c.balance != editClient.balance))  {
          let newSaveClient={...c}; //копия хэша изменившегося клиента
          newSaveClient.fam = editClient.fam;
          newSaveClient.im = editClient.im;
          newSaveClient.otch = editClient.otch;
          newSaveClient.balance = editClient.balance;          
          tmpPoductsState[i]=newSaveClient;
          changed=true;
        }
      });
      
      if ( changed ){
        this.setState({clients:tmpPoductsState, clients3: tmpPoductsState});
    }
 
     this.setState({mode:0});



      //меняем данные редактируемого клиента, перезаписав хэш по индексу в массиве товаров
      //tmpPoductsState[editIndex] = editClient;
      //console.log(tmpPoductsState[editIndex]);

      //let tmpPoductsState2 = this.state.clients.slice();
      //let editIndex2 = tmpPoductsState2.findIndex(x => x.id === editClient.id);
      //меняем данные редактируемого клиента, перезаписав хэш по индексу в массиве товаров
      //tmpPoductsState2[editIndex2] = editClient;
      

      //this.setState({clients: tmpPoductsState2, //goods: tmpPoductsState,
      //            clients3: tmpPoductsState,
      //            mode: 0,
      //          });
  }

  //сохранение информации о добавленном товаре
  addGood = (newClient) => {
     console.log (newClient);
     
      //let newAddProductData = {code, title, price, url, quantity};//хэш с новым товаром
      let tmpPoductsState = this.state.clients.slice();
      tmpPoductsState.push(newClient);
       //tmpPoductsState.push(newAddProductData);
       this.setState({clients:tmpPoductsState, // addNewClient, //tmpPoductsState,
                      clients3: tmpPoductsState,
                    //selectedGoodCode: null,
                    mode: 0,
                    //isAnyProductChanged: false,//указываем, что несохраненных данных о товаре нет
                    });
  }
  
  //открытие карточки добавления нового клиента по нажатию кнопки "добавить" 
  createNewGood = (EO) => {
      this.setState( {mode: 2,
                      //selectedGoodCode: null,
                      client: {"id":this.state.clients[this.state.clients.length - 1].id + 5, "fam" : "", "im" : "", "otch" : "", "balance": 0} ,//null,
                      //isAnyProductChanged: true,
                    });
  }

    
  //отмена редактирования или создания карточки клиента+
  cancelEditing = () => {
      this.setState({//productToEdit: null,
                    //selectedGoodCode: null, 
                    mode: 0,
                    //isAnyProductChanged: false,//указываем, что несохраненных данных о товаре нет
                  });
  }


  //удаление строки с клиентом
  buttonSelected = (id) => {
      let clients2=this.state.clients.filter( client => {return client.id!== id}); //оставляем в хэше только неудаляемые строки
      console.log(clients2);
      let clients4=this.state.clients3.filter( client => {return client.id!== id});
      this.setState( {//selectedButtonCode:id, 
                   clients:clients2, clients3:clients4});
      
     
     
  };
    
  
  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };

  setAllClients = () => {
    this.setState({ clients3: this.state.clients });
  };
  
  setActive = () => {
    let filteredClients=this.state.clients.filter( client => {return client.balance >0});
    this.setState( {clients3: filteredClients,
                 // productToEdit: null,
                  
                });
    
  };

  setBlocked = () => {
    let filteredClients2=this.state.clients.filter( client => {return client.balance <= 0});
    this.setState( {clients3: filteredClients2,
                 // productToEdit: null,
                  
                });
  };
      
    render() {
      
      console.log("MobileCompany render"); 

          var headCode=
          <thead className=''>
             <tr className='Head'>        
              <th className='cell'>Фамилия</th>
              <th className='cell'>Имя</th>
              <th className='cell'>Отчество</th>
              <th className='cell'>Баланс</th>
              <th className='cell'>Статус</th>
              <th className='cell'>Редактировать</th>
              <th className='cell'>Удалить</th>
            </tr>
          </thead>
         ; 
                          
           var clientsCode=this.state.clients3.map( client => {
            let FIO={id: client.id, fam:client.fam,im:client.im,otch:client.otch, balance:client.balance};
            return <MobileClient key={client.id} FIO={FIO} />;
            }
            );
                
                    
           return (
            <div className='MobileCompany'>
                <input type="button" value="МТС" onClick={this.setName1} />
                <input type="button" value="Velcom" onClick={this.setName2} />
                <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
                
                <input type="button" value="Все" onClick = {this.setAllClients}/>
                <input type="button" value="Активные" onClick = {this.setActive}/>
                <input type="button" value="Заблокированные" onClick = {this.setBlocked}/>
                
                <table className = 'Table'>
                    {headCode}
                    <tbody className = 'TableBody'>
                     {clientsCode}
                    </tbody>
                </table>
                <input className='New' type='button' value='Добавить клиента' 
                   onClick = {this.createNewGood} />
            { (this.state.mode>0) &&
            <Card 
              key={this.state.clients3.id}
              client={this.state.client} 
              
              //selectedGoodCode={this.state.selectedGoodCode}
              //selectedButtonCode={this.state.selectedButtonCode}
              //editedGoodCode={this.state.editedGoodCode}
              mode={this.state.mode}
              
            />
            }       
            
            


            </div>
          )
          ;
      
        }
      
  }


       
export default MobileCompany;    



