import * as React from 'react';

export function DiretaFilho(props) {
  return (
    <div>
      <span>{props.nome}</span>
      <span> ({props.idade}) </span>
      <span>{props.nerd ? 'nerd' : ''}</span>
    </div>
  );
};