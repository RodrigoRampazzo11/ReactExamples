import React from 'react'

class Exercicio7 extends React.Component {

    constructor(props) {
        super(props)
        this.minhaFuncao = this.minhaFuncao.bind(this);
        this.state = {
            var1: "Valor inicial da Var1"
        }
    }

    minhaFuncao() {
        alert("Ao ENTRAR na função: " + this.state.var1)
        this.setState({var1: "Novo valor da Var1"})
        alert("Ao SAIR da função: " + this.state.var1)
    }

    render() {
        return (<button onClick={this.minhaFuncao}>{this.state.var1}</button>)
    }
}
export default Exercicio7