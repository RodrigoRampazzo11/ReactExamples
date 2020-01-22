import React from 'react'

class Exercicio2 extends React.Component {
    render () {
        return (
            <p>Olá, meu nome é {this.props.nome} e tenho {this.props.idade} anos.</p>
        )
    }
}

export default Exercicio2