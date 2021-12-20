import * as React from 'react';
import { DiretaFilho } from './DiretaFilho';

export function DiretaPai(props) {
  return (
    <div>
      <DiretaFilho nome="Filho 1" idade={8} nerd={true} />
      <DiretaFilho nome="Marcos" idade={16} nerd={false} />
    </div>
  );
};