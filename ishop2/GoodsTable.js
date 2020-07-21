var GoodsTable = React.createClass({

    displayName: 'GoodsTable',
  
    propTypes: {
    
      code: React.PropTypes.number.isRequired,
      quantity: React.PropTypes.number.isRequired,
      price: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      selectedGoodCode:React.PropTypes.number,
    },

    getDefaultProps: function() {
      return { store: "Магазин N" }
    },

    getInitialState: function() {
      return { 
     };
    },

    rowClicked: function(EO) {
      this.props.cbSelectGood(this.props.code);
    },
  
    deleteGood: function(EO) {
      var question=confirm("Вы уверены, что хотите удалить товар?");  
      if (question) {
        this.props.cbSelectButton(this.props.code);
      }
    },

    render: function() {
       
        return React.DOM.tr({className:
          (this.props.selectedGoodCode==this.props.code)
          ?'TrayColor'
          :'NewTray'
          
          , onClick:this.rowClicked},
         
            React.DOM.td({className:'Cell'},this.props.title ),
            React.DOM.td({className:'Cell'},this.props.price),
            React.DOM.td({className:'Cell'},React.DOM.a ({href:this.props.url}, this.props.url)),
            React.DOM.td({className:'Cell'},this.props.quantity),
            React.DOM.td({className:'Cell'},
              React.DOM.input({type:'button',value:'удалить', onClick:this.deleteGood})
           ) 
          )
       
     
    },
  }); 