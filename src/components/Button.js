import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateInput, clearInput} from "../actions";

let equation;
let number = [0];
let previousTotal;
class Button extends Component {

    handleClick = (event) => {
        let id = this.props.id[0];
        let input = this.props.input;

        switch(id) {
            case '-':
            case '+':
            case '/':
            case '*':
                if (input.length == 0) {
                    return;
                } else if (
                    input[input.length - 1] == '-' ||
                    input[input.length - 1] == '+' ||
                    input[input.length - 1] == '/' ||
                    input[input.length - 1] == '*') {
                    this.props.updateInput(id);
                    equation = equation.split('');
                    equation[equation.length - 1] = id;
                    equation = equation.join('')
                    number = [];
                } else {
                    this.props.updateInput(id);
                    equation = equation ? equation + (number.join('') + id) : (number.join('') + id);
                    number = [];
                }
                break;
            case '0' :
                if (number.length == 1 && number[0] == 0) {
                    return;
                } else {
                    number.push(id);
                    this.props.updateInput(id);
                }
                break;
            case '=':
                previousTotal = '';
                this.props.updateInput(id)
                equation = equation ? equation + (number.join('')) : (number.join(''));
                this.props.clearInput();
                let result = eval(equation);
                this.props.updateInput(result)
                equation = eval(equation);
                number = [];
                break;
            case 'clear':
                equation = '';
                number = [0];
                this.props.clearInput();
                break;
            case '.':
                if (number.includes('.')) {
                    return;
                } else {
                    number.push(id);
                    this.props.updateInput(id);
                }
                break;
            default:
                if (number.length == 1 && number[0] == 0) {
                    number = [];
                    number.push(id);
                    this.props.updateInput(id);
                } else {
                    number.push(id)
                    this.props.updateInput(id);
                }

        }
    };

    render() {
        return (
            <div className='button'>
                <button onClick={this.handleClick} id={this.props.value}>{this.props.id}</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        input: state.input,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateInput, clearInput}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);
