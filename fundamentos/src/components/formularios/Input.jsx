// @flow
import * as React from 'react';
import './Input.scss';

export function Input(props) {

  const [valor, setValor] = React.useState('Inicial')
  function quandoMudar(e) {
    setValor(e.target.value)
  }
  
  return (
    <div>
      <div className='input'>
        <input value={valor} onChange={quandoMudar} />
      </div>
    </div>
  );
};