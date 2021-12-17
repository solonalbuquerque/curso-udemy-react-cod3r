import './App.scss'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import { Aleatorio } from './components/basicos/Aleatorio';
import { Card } from './components/layout/Card';
import { Familia } from './components/basicos/Familia';

export default () => {
  return (
    <div className="App">
      <div className="Cards">
      
        <Card titulo="#05 - Família" cor="#DE3163">
          <Familia sobrenome="Silva" />
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
