import React, { Component } from 'react';
import './styles.less';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
	render() {
        return (
        <div className="card">
            <div className="title">
                {this.props.title}
            </div>
            <div className="content">
                {this.props.children}
            </div>
        </div>
        );
        }
}

export default Card;