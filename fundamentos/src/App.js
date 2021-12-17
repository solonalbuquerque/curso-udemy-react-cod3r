import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import { Aleatorio } from './components/basicos/Aleatorio';
import { Card } from './components/layout/Card';

export default () => {
  return (
    <div className="App">
      
      <Card titulo="Desafio Aleatório">
        <Aleatorio min={1} max={999} />
      </Card>
      
      <Card titulo="Com Parâmetro">
        <ComParametro
          titulo="Segundo componente"
          subtitulo="Muito legal"
        />
      </Card>
      
      <Card titulo="Primeiro Componente">
        <Primeiro />
      </Card>
      
    </div>
  );
}
