import React from 'react'

export default class CalculatorRealtime extends React.Component {
    
    state = {
        number1:'0',
        number2:'0',
        operation:'add', // add, subtract, multiply, divide
        buttonPressed:false
    }
    
    handleChange = (event) =>
    {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    calculate = () => {
        let x = parseFloat(this.state.number1);
        let y = parseFloat(this.state.number2);
        let results = 0
        
        if (this.state.operation==='add') {
            results = x + y;
        } else if (this.state.operation == 'subtract') {
            results = x -y;
        } else if (this.state.operation == 'multiply') {
            results = x * y;
        } else if (this.state.operation == 'divide') {
            results = x / y;
        }
        
        return <h1>{results}</h1>
  
    }

    render(){
        return (
            <div>
                <input type='text' name='number1' value={this.state.number1} onChange={this.handleChange}/> <br/>
                <input type='text' name='number2' value={this.state.number2} onChange={this.handleChange}/>
                <div>
                    <input type='radio' name='operation' value='add' checked={this.state.operation==='add'} onChange={this.handleChange}/>Add
                    <input type='radio' name='operation' value='subtract' checked={this.state.operation==='subtract'} onChange={this.handleChange}/>Subtract
                    <input type='radio' name='operation' value='multiply' checked={this.state.operation==='multiply'} onChange={this.handleChange}/>Multiply
                    <input type='radio' name='operation' value='divide' checked={this.state.operation==='divide'} onChange={this.handleChange}/>Divide
                </div>
                {this.calculate()}
            </div>
        )
    }
}

