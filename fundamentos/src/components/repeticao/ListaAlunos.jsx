
import * as React from 'react';
import alunos from '../../data/alunos'

export const ListaAlunos = (props) => {
  return (
    <div>
      <ul>
        {
          alunos.map((aluno, i) => {
            return(
              <li key={i}>
                {aluno.nome} - nota {aluno.nota}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};