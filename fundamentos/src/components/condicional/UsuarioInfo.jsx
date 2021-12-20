import * as React from 'react';
import { IfGo, Else } from './ifGo';

export function UsuarioInfo(props) {
  const usuario = props.usuario || {};
  return (
    <div>
      <IfGo test={usuario.nome}>
        Seja bem vindo, <strong>{usuario.nome}</strong>
        <Else>
          Seja bem vindo amigão!
        </Else>
      </IfGo>
    </div>
  );
}; 