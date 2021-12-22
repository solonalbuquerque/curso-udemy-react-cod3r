import React, { Component } from 'react';
import { Botoes } from './Botoes';
import { Display } from './Display';
import { PassoForm } from './PassoForm';

class Contador extends Component {

  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 1
  }

  incrementar = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  }

  decrementar = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  }

  setPasso = (novoPasso) => {
    this.setState({
      passo: +novoPasso
    })
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Botoes incrementar={this.incrementar} decrementar={this.decrementar}  />
      </div>
    );
  }
}

export default Contador;