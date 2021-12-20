import * as React from 'react';

export function ParOuImpar(props) {
  const isParOrImpar = props.numero %2 === 0;
  return (
    <div>
      {
        isParOrImpar ? <span>Par</span> : <span>Ímpar</span>
      }
    </div>
  );
};