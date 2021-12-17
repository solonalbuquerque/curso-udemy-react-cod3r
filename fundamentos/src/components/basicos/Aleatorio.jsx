import * as React from 'react';

export const Aleatorio = (props) => {
  const {min, max} = props;
  const rand = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div> 
      <h2>Valor Aleatório</h2>
      <p>entre {min} e {max}: <strong>{rand}</strong></p>
    </div>
  );
};