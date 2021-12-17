import * as React from 'react';
import './card.scss';

export const Card = (props) => {
  const {titulo} = props;
  return (
    <div className='Card'>
      <div className='titulo'>{titulo}</div>
      <div className='content'>{props.children}</div>
    </div>
  );
};