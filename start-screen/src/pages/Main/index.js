import './Main.scss'

import React, { Component } from 'react'
import Header from '../../components/Top';
import Menu from '../../components/Menu';

const title="Como posso te ajudar?";
const submenus = ["Menu 1","menu 2"];
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }
    componentDidMount() {

    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState !== this.state) return true;
        if (nextProps !== this.props) return true;
        return false;
    }
    render() {
        return (
            <React.Fragment>
                <div className="start-screen">
                    <header>
                        <Header title="ATENDIMENTO DA SUA EMPRESA" />
                    </header>
                    <body>
                        <div className="start-screen-content">

                        <div className="offer-question">{title}</div>
                            <Menu title="Consultar" type="OfferQuestion" />
                            <Menu title="Teste 1"  type="" submenus={submenus} />
                        </div>
                    </body>
                </div>
            </React.Fragment>
        )
    }
}

export default Main