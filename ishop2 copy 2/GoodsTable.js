var GoodsTable = React.createClass({

    displayName: 'GoodsTable',
  
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
    getDefaultProps: function() {
      return { store: "Магазин N" }
    },

    getInitialState: function() {
      return { 
        highLight: false,
        
      };
    },


    highLight: function(EO) {
      
      this.setState( {highLight:true}, function(EO) {
        EO=EO||window.event;
        EO.target.parentNode.className="TrayColor";
        console.log (EO.target);
        console.log (EO.target + EO.target.tegName + EO.target.className);
      });
      
    },

    changeColor: function(EO) {
      EO.target.className=="TrayColor";
      console.log (EO.target + EO.target.className);
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

       
        
      var goodsCode=this.props.goods.map( v =>
        
        React.DOM.tr({key:v.code,className:'Tray'},
            React.DOM.td({className:'Cell'},v.title),
            React.DOM.td({className:'Cell'},v.price),
            React.DOM.td({className:'Cell'},React.DOM.a ({href:v.url}, v.url)),
            React.DOM.td({className:'Cell'},v.quantity),
            React.DOM.td({className:'Cell'},
                React.DOM.input({type:'button',value:'удалить',})
          )
      )
      );
        
      var tbodyCode=
        React.DOM.tbody({className:''}, goodsCode);
      
      return React.DOM.div ( {className:'GoodsTable'}, 
        React.createElement(Store,{store:this.props.store}),
        React.DOM.table( {className:'Goods', onClick:this.highLight}, headCode, tbodyCode ),
      );
    },
  
  });