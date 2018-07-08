import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './styles.less';

class CardSub extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
	render() {
        return (
        <div className="cardSub">
            <div className="title">
                {this.props.title}
            </div>
            <div className="content">
                {this.props.children}
            </div>
            <div className="footer">
                {typeof this.props.companyId !== "undefined" ?
                <Link to={{pathname:`/details/${this.props.companyId}`}}>Company Overview</Link>
                :
                ""
                }
            </div>
        </div>
        );
        }
}

export default CardSub;