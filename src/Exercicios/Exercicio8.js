import React from 'react'

class Exercicio8 extends React.Component {

    constructor(props) {
        super(props)
        this.add = this.add.bind(this);
        this.dec = this.dec.bind(this);
        this.state = {
            var1: 0
        }
    }

    componentDidMount() {
        alert('Exercicio 8: Acabei de ser construído! :)')
    }

    componentDidUpdate(prevProps, prevState) {
        alert('O novo valor é: ' + this.state.var1 + "! E o seu valor antigo é: " + prevState.var1)
    }

    // componentWillUnmount() {
    //     alert('Exercicio 8: Vou ser destruído... :(')
    // }

    add() {
        let novoValor = this.state.var1 + 1
        this.setState({ var1: novoValor })
    }

    dec() {
        let novoValor = this.state.var1 - 1
        this.setState({ var1: novoValor })
    }

    render() {
        return (<>
            <span>{this.state.var1}</span>
            <div>
                <button onClick={this.add}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        </>)
    }
}
export default Exercicio8