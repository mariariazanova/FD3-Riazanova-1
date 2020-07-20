var FilterBlock = React.createClass({

    displayName: 'FilterBlock',
  
    propTypes: {
      strings:React.PropTypes.arrayOf(
        React.PropTypes.shape({
          code: React.PropTypes.number.isRequired,
          text: React.PropTypes.string.isRequired,
        })
      ),
    },

    getInitialState: function() {
      return { 
        strings:this.props.strings,
        sort: false,
        filterString:null,
      };
    },
    
    
    changeState: function(EO) {
      this.setState( {sort:true},this.changeList);
      

    },



    changeList: function() {
      
      let lines=this.props.strings.slice(); // делаем плоскую копию всех слов, т.к. возможно будем сортировать массив
      if ( this.state.filterString )
        lines=lines.filter( line => line.indexOf(this.state.filterString)!=-1 );
      if ( this.state.sort )
        lines.sort();
      this.setState( { strings:lines } );
    },


    render: function() {
  
      var stringsCode=this.state.strings.map( v =>
        React.DOM.option( {name:'', key:v.code, },
          v.text, 
          
        )
      );
  
      return React.DOM.div ({className:''},
      React.DOM.input({type:'checkbox',name:'checkbox',
          onClick:this.changeState,
      }),
      React.DOM.input( {type: 'text', name:'',} ),
      React.DOM.input( {type:'button',value:'сброс'} ),
      React.DOM.select( {name:'Answers', size:'5'}, stringsCode ),
      
             
      );
  
    },
  
  });