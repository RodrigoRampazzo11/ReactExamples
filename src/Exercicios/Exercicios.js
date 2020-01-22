import React from 'react'

import Exercicio1 from './Exercicio1'
import Exercicio2 from './Exercicio2'

class Exercicios extends React.Component {
    render () {
        return (<>
            <h1>Exercícios</h1>

            <br />
            <h2>Exercício 1:</h2>
            <h3>Chamando componente</h3>
            <Exercicio1 />

            <br />
            <h2>Exercício 2:</h2>
            <h3>Passando parâmetros</h3>
            <Exercicio2 nome="Fulano" idade={18} />
        </>)
    }
}

export default Exercicios