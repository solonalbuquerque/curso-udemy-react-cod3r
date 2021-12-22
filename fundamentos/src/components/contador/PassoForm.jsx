import * as React from 'react';

export function PassoForm(props) {
  return (
    <div>
      <label htmlFor="passo">Passo:</label>
      <input type="text" id="passo" value={props.passo} onChange={(e) => {
        props.setPasso(+e.target.value)
      }} />
    </div>
  );
};