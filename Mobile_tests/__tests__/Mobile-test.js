import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';
import clientsArr from '../clients.json';

test('тестирование фильтрации клиентов в MobileCompany', () => {
      // создаём тестовую версию компонента
  const component = renderer.create(
    <MobileCompany clients={clientsArr}/>
  );

     // получаем снэпшот (HTML-снимок) компонента для сверки
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  //имитируем отображение всех клиентов
  component.getInstance().setAllClients();
  // получаем снэпшот со всеми клиентами
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  //имитируем отображение только активных клиентов
  component.getInstance().setActive();
  // получаем снэпшот с активными клиентами
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  //имитируем отображение только заблокированных клиентов
  component.getInstance().setBlocked();
  // получаем снэпшот с блокированными клиентами
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
    
});

test('тестирование возможности добавить клиента в MobileCompany', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
      <MobileCompany clients={clientsArr} />
  );

  // получаем снэпшот компонента для сверки
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  //имитируем добавление нового клиента
  let newCliendData = {id:125, fam:"Павлов", im:"Павел", otch:"Павлович", balance:100};
  component.getInstance().createNewGood(newCliendData);
  //получаем снэпшот с новым клиентом
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
});

test('тестирование возможности удалить клиента в MobileCompany', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
      <MobileCompany clients={clientsArr} />
  );

  // получаем снэпшот компонента для сверки
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  //имитируем удаление клиента
  component.getInstance().buttonSelected(108);
   //получаем новый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
});

test('тестирование возможности редактировать клиента в MobileCompany', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
      <MobileCompany clients={clientsArr}  />
  );

  // получаем снэпшот компонента для сверки
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  //имитируем редактирование клиента
  let redCliendData = {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:-180};
  component.getInstance().saveEditing(redCliendData);
  //получаем снимок с отредактированным клиентом
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
});