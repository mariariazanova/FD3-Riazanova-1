var Store = React.createClass({

    displayName: 'Store',

    propTypes: {
        store: React.PropTypes.string.isRequired,
        goods:React.PropTypes.arrayOf(
          React.PropTypes.shape({
            code: React.PropTypes.number.isRequired,
            quantity: React.PropTypes.number.isRequired,
            price: React.PropTypes.number.isRequired,
            title: React.PropTypes.string.isRequired,
            url: React.PropTypes.string.isRequired,
          })
        ),
  
      },
    getInitialState: function() {
        return { 
          goods:this.props.goods,
          selectedGoodCode: null,
          selectedButtonCode: null,

        };
    },

    goodSelected: function(code) {
        console.log('выбрана строка с кодом '+code);
        this.setState( {selectedGoodCode:code} );
    },

    buttonSelected: function(code) {
      console.log('выбрана кнопка с кодом '+code);
      this.setState( {selectedButtonCode:code}, function() {
        let goods2=this.state.goods.slice();
        goods2=goods2.filter( good => good.code!==this.state.selectedButtonCode);
       
        this.setState({ goods: goods2});
        console.log (goods2);
      });
  },
      
    render: function() {
   
          var headCode=
           React.DOM.thead({className:''},
              React.DOM.tr({className:'Head'},        
              React.DOM.th({className:'Cell'},'Наименование товара'),
              React.DOM.th({className:'Cell'},'Цена, руб.'),
              React.DOM.th({className:'Cell'}, 'Изображение товара'),
              React.DOM.th({className:'Cell'},'Остаток на складе, шт.'),
              React.DOM.th({className:'Cell'},'Управление товаром'),
              )
           ); 
                          
           var goodsCode=this.state.goods.map( v =>
            React.createElement(GoodsTable, {key:v.code,
                 title:v.title, price:v.price, url:v.url,
                 quantity:v.quantity, code:v.code,
                 selectedGoodCode:this.state.selectedGoodCode,
                 selectedButtonCode:this.state.selectedButtonCode,
                 cbSelectGood: this.goodSelected,
                 cbSelectButton: this.buttonSelected,
                })
           );
          


          
                
        return React.DOM.div ( {className:'GoodsTable'}, 
          React.DOM.div( {className:'Store'}, this.props.store ),
          React.DOM.table( {className:'Goods'}, headCode,
          React.DOM.tbody({className:''}, goodsCode),
            
            )
          )
        
      },
    });