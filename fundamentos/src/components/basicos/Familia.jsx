import * as React from 'react';
import { FamiliaMembro } from './FamiliaMembro';

export const Familia = (props) => {

  const {sobrenome} = props;

  return (
    <div>
      <FamiliaMembro nome="Pedro" sobrenome={sobrenome} />
      <FamiliaMembro nome="José" {...props} />
      <FamiliaMembro nome="Maria" sobrenome="Ferreira" />
    </div>
  );
};