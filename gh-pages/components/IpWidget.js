import React, {Component} from 'react';



export default class IpWidget extends Component {

    
        constructor(props){
            super(props);
                this.state = {
                    ip_info: []
                };
             //   console.log('hello' ,time_info)
        };

        componentDidMount(){
                
                fetch('http://ip.jsontest.com/')
                    .then( (response) => {
                        return response.json()
                    })
                    .then( data => {
                        console.log(data)
                        this.setState({
                            ip_info: data['ip']
                        })
                    })
                    .catch(error => console.log(error))
        };

render(){
    return (
        <div className="top-widget">
            <div className="data-text">
                <h1>{this.state.ip_info}</h1>
                <p className="grey-text">Your IP</p>
                <p className="any-text">Lorem ipsum dalore es kuer</p>
            </div>
            <div className="top-image"><img src="static/icons/top-image.png" alt="top-image"/></div>
        </div>
    )
}

} 