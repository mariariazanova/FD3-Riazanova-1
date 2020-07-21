var GoodsTable = React.createClass({

    displayName: 'GoodsTable',
  
    getDefaultProps: function() {
      return { store: "Магазин N" }
    },
  
    render: function() {
  
      var goodsCode=[];
      

      var headCode=
        React.DOM.thead({className:''},
            React.DOM.tr({className:'Head'},        
            React.DOM.th({className:'Cell'},'Наименование товара'),
            React.DOM.th({className:'Cell'},'Цена, руб.'),
            React.DOM.th({className:'Cell'}, 'Изображение товара'),
            React.DOM.th({className:'Cell'},'Остаток на складе, шт.'),
         ) 
        );

      var tbodyCode=
        React.DOM.tbody({className:''}, goodsCode); 
         
      for ( var a=0; a<this.props.goods.length; a++ ) {
        var good=this.props.goods[a];
        var goodCode=        
          React.DOM.tr({key:good.code,className:'Tray'},
            React.DOM.td({className:'Cell'},good.title),
            React.DOM.td({className:'Cell'},good.price),
            React.DOM.td({className:'Cell'},React.DOM.a ({href:good.url}, good.url)),
            React.DOM.td({className:'Cell'},good.quantity),
          );
        goodsCode.push(goodCode);
      }
      
      return React.DOM.div ( {className:'GoodsTable'}, 
        React.DOM.div( {className:'Store'}, this.props.store ),
        React.DOM.table( {className:'Goods'}, headCode, tbodyCode ),
      );
    },
  
  });