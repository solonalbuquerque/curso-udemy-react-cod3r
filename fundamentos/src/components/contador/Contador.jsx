import React, { Component } from 'react';

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

  setPasso = (e) => {
    this.setState({
      passo: +e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <h3>{this.state.numero}</h3>
        <div>
          <label htmlFor="passo">Passo:</label>
          <input type="text" id="passo" value={this.state.passo} onChange={this.setPasso} />
        </div>
        <button onClick={this.incrementar}>+</button>
        <button onClick={this.decrementar}>-</button>
      </div>
    );
  }
}

export default Contador;