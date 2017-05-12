import React, {Component} from 'react';



export default class IpWidget extends Component {

render(){
    return (
        <div className="top-widget">
            <div className="data-text">
                <h1>123.123.52.85</h1>
                <p className="grey-text">Your IP</p>
                <p className="any-text">Lorem ipsum dalore es kuer</p>
            </div>
            <div className="top-image"><img src="static/icons/top-image.png" alt="top-image"/></div>
        </div>
    )
}

} 