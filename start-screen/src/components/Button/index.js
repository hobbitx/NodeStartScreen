import './Button.scss';

import React, { Component } from 'react';

class Button extends Component {
   
    render() {
        let { title, onClick } = this.props;
        return (
            <div class="subject-item">
                <span payload={title}>{title.toUpperCase()}</span>
            </div>
        )
    }
}

export default Button