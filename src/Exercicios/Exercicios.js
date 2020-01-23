import React from 'react'

import Exercicio1 from './Exercicio1'
import Exercicio2 from './Exercicio2'
import Exercicio3 from './Exercicio3'
import Exercicio4 from './Exercicio4'
import Exercicio5 from './Exercicio5'
import Exercicio6 from './Exercicio6'

class Exercicios extends React.Component {

    funcaoDesejada () {
        alert('A função do Exercício 5 foi chamada!')
    }

    render () {
        return (<>
            <center><h1>Exercícios</h1></center>
            <hr />

            <h2>Exercício 1:</h2>
            <h3>Chamando componente</h3>
            <Exercicio1 />
            <hr />

            <h2>Exercício 2:</h2>
            <h3>Passando parâmetros</h3>
            <Exercicio2 nome="Fulano" idade={18} />
            <hr />

            <h2>Exercício 3:</h2>
            <h3>Chamando funções</h3>
            <Exercicio3 />
            <hr />

            <h2>Exercício 4:</h2>
            <h3>Chamando funções passando parâmetros</h3>
            <Exercicio4 />
            <hr />

            <h2>Exercício 5:</h2>
            <h3>Passando funções por parâmetro</h3>
            <Exercicio5 minhaFuncao={this.funcaoDesejada} />
            <hr />

            <h2>Exercício 6:</h2>
            <h3>Trocar valor de uma variável comum</h3>
            <Exercicio6 minhaFuncao={this.funcaoDesejada} />
            <hr />
        </>)
    }
}

export default Exercicios