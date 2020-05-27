import './OfferQuestion.scss';

import React, { Component } from 'react';
import question from './question.png';
class OfferQuestion extends Component {

    render() {
        let { title, phrase, placeholder } = this.props;
        return (
            <div>
                <div className="ask-question-section">
                    <input id="question-input"
                        className="ask-question-input"
                        placeholder={placeholder}
                        type="text"
                        name="question"
                        defaultValue="" />
                    <div id="click-question-recall" className="question-image-box">
                        <div payload="recall:question-input"
                            className="question-image search-image">
                            <img close-start-screen="true"
                                src={question}
                                alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OfferQuestion