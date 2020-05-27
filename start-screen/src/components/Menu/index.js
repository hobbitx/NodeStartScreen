
import './Menu.scss';

import React, { Component } from 'react';
import OfferQuestion from '../OfferQuestion';
import ClickedButton from '../Button';
class Menu extends Component {
    render() {
        let content;
        if (this.props.type === "OfferQuestion") {
            content = <OfferQuestion placeholder="Digite o número do seu Contrato" />
        } else {
            let arr = this.props.submenus;
            content = arr.map(element => {
                return ( <ClickedButton title={element} />
                )
            });
        }
        return (

            <div className="question-box">
                <div className="subject-phrase">{this.props.title.toUpperCase()}</div>
                {content}
            </div>
        )
    }
}

export default Menu