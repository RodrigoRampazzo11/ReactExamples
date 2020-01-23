import React from 'react'

class Exercicio3 extends React.Component {
    minhaFuncao() {
        alert(`Eu fui clicado!`)
    }
    
    render () {
        return (
            <button type="button" onClick={this.minhaFuncao}>Clique Aqui</button> 
        )
    }
}

export default Exercicio3