import React, {Component} from 'react';


export default class TimeWidget extends Component {


        constructor(props){
            super(props);
                this.state = {
                    time_info: []
                };
             //   console.log('hello' ,time_info)
        };

        componentDidMount(){

            setInterval(() => this.setState( 
                
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
            , 10000))
        };

                    
        render(){
            //console.log(time_info)
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