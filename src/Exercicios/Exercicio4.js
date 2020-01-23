import React from 'react'

class Exercicio3 extends React.Component {
    minhaFuncao(valor) {
        alert(`Eu, ${valor}, fui clicado!`)
    }
    
    render () {
        return (<>
            <button type="button" onClick={this.minhaFuncao.bind(this, 'Butãozin')}>Clique Aqui</button>

            {/* <button type="button" onClick={() => this.minhaFuncao('Butãozin')}>Clique Aqui</button> */}
        </>)
    }
}

export default Exercicio3