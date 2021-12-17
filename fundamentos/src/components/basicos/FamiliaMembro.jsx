
import * as React from 'react';

export const FamiliaMembro = (props) => {

  const {nome, sobrenome} = props;

  return (
    <div>
      {nome} <strong>{sobrenome}</strong>
    </div>
  );
};