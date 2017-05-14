import React, {Component} from 'react';

let timerInterval = 1000;

export default class TimeWidget extends Component {


        constructor(props){
            super(props);
                this.state = {
                    time_info: []
                };
        };

        componentDidMount(){

            this.interval = setInterval(() => 
                
                fetch('http://time.jsontest.com/')
                    .then( (response) => {
                        return response.json()
                    })
                    .then( data => {
                        console.log(data)
                        this.setState({
                            time_info: data['time']
                        })
                    })
                    .catch(error => console.log(error))
            , timerInterval)
        };

        componentWillUnmount() {
            clearInterval(this.interval);
        }
                    
        render(){
            return (
                <div className="top-widget">
                    <div className="data-text">
                        <h1>{this.state.time_info}</h1>
                        <p className="grey-text">Time</p>
                        <p className="any-text">Lorem ipsum dalore es kuer</p>
                    </div>
                    <div className="top-image"><img src="static/icons/top-image.png" alt="top-image"/></div>
                </div>
            )
        }
} 