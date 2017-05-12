import React, {Component} from 'react';



export default class TimeWidget extends Component {

render(){
    return (
         <div className="top-widget">
            <div className="data-text">
                <h1>16:43:25</h1>
                <p className="grey-text">Time</p>
                <p className="any-text">Lorem ipsum dalore es kuer</p>
            </div>
            <div className="top-image"><img src="static/icons/top-image.png" alt="top-image"/></div>
        </div>
    )
}

} 