import React from 'react'

class Exercicio6 extends React.Component {

    constructor(props) {
        super(props);
        this.minhaFuncao = this.minhaFuncao.bind(this);
        this.var1 = "Valor inicial da var1";
    }

    minhaFuncao() {
        alert("Ao ENTRAR na função: " + this.var1)
        this.var1 = "Novo valor para var1"
        alert("Ao SAIR da função: " + this.var1)
    }

    render() {
       return (<button onClick={this.minhaFuncao}>{this.var1}</button>)
    }
}
export default Exercicio6