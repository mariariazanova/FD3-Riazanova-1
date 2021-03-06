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
        filterString:'',
        isChecked:false,
      };
    },
    
    
    changeState: function(EO) {
      if (EO.target.checked) 
      this.setState( {sort:true, isChecked:true},this.changeList);
      else
      this.setState( {sort:false, isChecked:false }, this.changeList);
     

    },

    changeState2: function(EO) {
     
      this.setState ( {filterString:EO.target.value},this.changeList)

    },

    changeList: function() {
      
      let lines=this.props.strings.slice(); // делаем плоскую копию всех слов, т.к. возможно будем сортировать массив
      if ( this.state.filterString )
        lines=lines.filter( line => line.text.indexOf(this.state.filterString)!==-1 );
      if ( this.state.sort )
        lines.sort(function(a,b){
          if ( a.text<b.text )  return -1;
          if ( a.text>b.text )  return 1;
          return 0;
        },

        );
        console.log(lines);
        
      this.setState( { strings:lines } );
    },

    deleteAll: function (EO) {
      this.setState( {sort:false, filterString:'', isChecked:false, strings:this.props.strings });
      
    },


    render: function() {
  
      var stringsCode=this.state.strings.map( v =>
        React.DOM.option( {name:'', key:v.code, },
          v.text, 
          
        )
      );
  
      return React.DOM.div ({className:''},
      React.DOM.input({type:'checkbox',name:'checkbox', checked:this.state.isChecked,
          onClick:this.changeState,
      }),
      React.DOM.input( {type: 'text', name:'', value:this.state.filterString, onChange:this.changeState2} ),
      React.DOM.input( {type:'button',value:'сброс', onClick:this.deleteAll} ),
      React.DOM.select( {name:'Answers', size:'5'}, stringsCode ),
      
             
      );
  
    },
  
  });