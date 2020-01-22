import React from 'react'

import Exercicio1 from './Exercicio1'

class Exercicios extends React.Component {
    render () {
        return (<>
            <h1>Exercícios</h1>

            <br />
            <h2>Exercício 1:</h2>
            <h3>Chamando componente</h3>
            <Exercicio1 />
        </>)
    }
}

export default Exercicios