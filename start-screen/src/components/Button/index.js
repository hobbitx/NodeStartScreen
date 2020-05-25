import './CheckBox.scss';

import React, { Component } from 'react';

class Button extends Component {
   
    render() {
        let { label, onClick, title } = this.props;
        return (
            <div class="subject-item">
                <span payload={label}>{label.toUpperCase()}</span>
            </div>
        )
    }
}

export default Button