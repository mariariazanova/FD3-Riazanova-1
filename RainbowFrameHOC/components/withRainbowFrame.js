import React from 'react';

function withRainbowFrame(color) {
    return function(Component) {
      return props => {
        let comp = <Component {...props} />;
        color.forEach( (color) =>  
          comp= <div style={{border:"solid 8px "+color,padding:"8px"}}>
              {comp}
          </div>
        );
        return comp;  
      };
    };
}



export { withRainbowFrame };
