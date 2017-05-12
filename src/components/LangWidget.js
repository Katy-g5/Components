import React, {Component} from 'react';



export default class LangWidget extends Component {
    render(){
        return(
            <div className="top-widget">
            <div className="data-text">
                <h1>He-IL</h1>
                <p className="grey-text">Language</p>
                <p className="any-text">Lorem ipsum dalore es kuer</p>
            </div>
            <div className="top-image"><img src="static/icons/top-image.png" alt="top-image"/></div>
        </div>
        )
    }
}