// // src/App.js
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      clicksButtonOne: 0,
      clicksButtonTwo: 0,
      clicksButtonThree: 0,
    }

    this.handleButtonOne = this.handleButtonOne.bind(this)
    this.handleButtonTwo = this.handleButtonTwo.bind(this)
    this.handleButtonThree = this.handleButtonThree.bind(this)
  }
  handleButtonOne() {
    console.log(this.state.clicksButtonOne);
    console.log('Clicou no botão 1!');
    this.setState((beforeState) => ({
      clicksButtonOne: beforeState.clicksButtonOne + 1
    }))
  }

  handleButtonTwo() {
    console.log(this.state.clicksButtonTwo);
    console.log('Clicou no botão 2!');
    this.setState((beforeState) => ({
      clicksButtonTwo: beforeState.clicksButtonTwo + 1
    }))
  }

  handleButtonThree() {
    console.log(this.state.clicksButtonThree);
    console.log('Clicou no botão 3!');
    this.setState((beforeState) => ({
      clicksButtonThree: beforeState.clicksButtonThree + 1
    }))
  }

  getButtonColor(num) {
    // Essa função contém um ternário que realiza a lógica para mudarmos
    // a cor do botão para verde quando for um número par
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clicksButtonOne, clicksButtonTwo, clicksButtonThree } = this.state;
    return (
      <div>
        <button onClick={this.handleButtonOne} style={{backgroundColor: this
          .getButtonColor(clicksButtonOne)}}>{`foi clicado ${this.state.clicksButtonOne} vezes`}</button>
        
        <button onClick={this.handleButtonTwo} style={{backgroundColor: this
          .getButtonColor(clicksButtonTwo)}}>{`foi clicado ${this.state.clicksButtonTwo} vezes`}</button>
        
        <button onClick={this.handleButtonThree} style={{backgroundColor: this
          .getButtonColor(clicksButtonThree)}}>{`foi clicado ${this.state.clicksButtonThree} vezes`}</button>
      </div>
    );
  }
}

export default App;

// EXEMPLO 2 

// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super()
//     // A função abaixo vincula "manualmente" o `this` à nossa função
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
//     Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
//     e tudo o mais daqui de dentro */
//     console.log(this)
//     console.log('Clicou!')
//   }

//   render() {
//     return <button onClick={this.handleClick}>Meu botão</button>
//   }
// }

// export default App;

// EXEMPLO 3

// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       numeroDeCliques: 0
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick = () => {
//     /* Passando uma callback à função setState, que recebe de parâmetros
//     o estado anterior e as props do componente, você garante que as atualizações
//     do estado acontecerão uma depois da outra! */
//     this.setState((estadoAnterior, _props) => ({
//       numeroDeCliques: estadoAnterior.numeroDeCliques + 1
//     }))
//   }

//   render() {
//     return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
//   }
// }

// export default App;