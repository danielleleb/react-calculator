import React, {Component} from 'react';
import Button from './Button';

const buttons = [
    {
        1: 'one'
    },
    {
        2: 'two'
    },
    {
        3: 'three'
    },
    {
        4: 'four'
    },
    {
        5: 'five'
    },
    {
        6: 'six'
    },
    {
        7: 'seven'
    },
    {
        8: 'eight'
    },
    {
        9: 'nine'
    },
    {
        0: 'zero'
    },
    {
        '+': 'add'
    },
    {
        '-': 'subtract'
    },
    {
        '*': 'multiply'
    },
    {
        '/': 'divide'
    },
    {
        '.': 'decimal'
    },
    {
        '=': 'equals'
    },
    {
        'clear': 'clear'
    }
]

export default class ButtonContainer extends Component {
    render() {
        const buttonElements = [];

        for (let i = 0; i < buttons.length; i++) {
            let button = buttons[i];
            buttonElements.push(<Button
                key={Object.values(button)}
                id={Object.keys(button)}
                value={Object.values(button)}
            />)
        }
        return(
            <div className='button__container'>
                {buttonElements}
            </div>
        )
    }
}