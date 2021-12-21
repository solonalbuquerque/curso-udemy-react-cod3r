
import * as React from 'react';
import { IndiretaFilho } from './IndiretaFilho';

export function IndiretaPai(props) {

  const [nome, setNome] = React.useState("");
  const [idade, setIdade] = React.useState(0);
  const [nerd, setNerd] = React.useState(false);

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)
    console.log("fornecer informações", nome, idade, nerd)
  }

  return (
    <div>
      <div>{nome}, {idade} {nerd}</div>
      <IndiretaFilho acaoAoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};