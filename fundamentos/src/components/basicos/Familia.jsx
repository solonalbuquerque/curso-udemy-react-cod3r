import * as React from 'react';

export const Familia = (props) => {

  return (
    <div>
      {
        // um elemento só (não é legal)
        // React.cloneElement(props.children, {...props})

        // várias elementos (o correto)
        React.Children.map(props.children, child => {
          return React.cloneElement(child, props);
        })
        
      }
    </div>
  );
};