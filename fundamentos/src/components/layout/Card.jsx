import * as React from 'react';
import './card.scss';

export const Card = (props) => {

  const {titulo, cor} = props;

  const cardStyle = {
    backgroundColor: cor || "#CD5C5C"
  }

  return (
    <div className='Card' style={cardStyle}>
      <div className='titulo'>{titulo}</div>
      <div className='content'>{props.children}</div>
    </div>
  );
};