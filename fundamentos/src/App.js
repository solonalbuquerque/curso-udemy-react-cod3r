import './App.scss'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import { Aleatorio } from './components/basicos/Aleatorio';
import { Card } from './components/layout/Card';
import { Familia } from './components/basicos/Familia';
import { FamiliaMembro } from './components/basicos/FamiliaMembro';
import { ListaAlunos } from './components/repeticao/ListaAlunos';
import { TabelaProdutos } from './components/repeticao/TabelaProdutos';
import { ParOuImpar } from './components/condicional/ParOuImpar';
import { UsuarioInfo } from './components/condicional/UsuarioInfo';
import { DiretaPai } from './components/comunicacao/DiretaPai';
import { IndiretaPai } from './components/comunicacao/IndiretaPai';
import { Input } from './components/formularios/Input';
import Contador from './components/contador/Contador';
import { MegaSena } from './components/megasena/MegaSena';

export default () => {
  return (
    <div className="App">
      <div className="Cards">
      
        <Card titulo="#13 - Mega Sena" cor="#a15a15">
          <MegaSena />
        </Card>

        <Card titulo="#12 - Contador" cor="#424242">
          <Contador numeroInicial={10} />
          <Contador />
        </Card>

        <Card titulo="#11 - Input" cor="#d1d188">
          <Input />
        </Card>
      
        <Card titulo="#10 - Comunicação indireta" cor="#d1d100">
          <IndiretaPai />
        </Card>
      
        <Card titulo="#09 - Comunicação Direta" cor="#000080">
          <DiretaPai />
        </Card>

        <Card titulo="#08 - Par ou ímpar" cor="#008080">
          <ParOuImpar numero={2} />
          <UsuarioInfo usuario={{nome: "José"}}></UsuarioInfo>
          <UsuarioInfo usuario={{email: "nome@servidor.com"}}></UsuarioInfo>
        </Card>
      
        <Card titulo="#07 - Desafio de Repetição" cor="#862323">
          <TabelaProdutos />
        </Card>
      
        <Card titulo="#06 - Repetição" cor="#575700">
          <ListaAlunos />
        </Card>
      
        <Card titulo="#05 - Família" cor="#DE3163">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="José" />
            <FamiliaMembro nome="Maria" />
          </Familia>
        </Card>
      
        <Card titulo="#04 - Desafio Aleatório" cor="#FFBF00">
          <Aleatorio min={1} max={999} />
        </Card>
        
        <Card titulo="#03 - Com Parâmetro" cor='#FF7F50'>
          <ComParametro
            titulo="Segundo componente"
            subtitulo="Muito legal"
          />
        </Card>
        
        <Card titulo="#01 - Primeiro Componente" cor="#6495ED">
          <Primeiro />
        </Card>
      
      </div>
    </div>
  );
}
