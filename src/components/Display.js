import React, {Component} from 'react';

export default class Display extends Component {
    render() {
        return(
            <div id="display" className='display'>
                {this.props.input.length == 0 ? '0' : this.props.input}
            </div>
        )
    }

}