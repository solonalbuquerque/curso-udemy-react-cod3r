import * as React from 'react';


export function IndiretaFilho(props) {
  return (
    <div>
      <div>Filho</div>
      <button onClick={
        function (e) {
          props.acaoAoClicar("João", 49, true)
        }
      }>Fornecer informações</button>
    </div>
  );
};