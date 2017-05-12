import React, {Component} from 'react';



export default class LangWidget extends Component {

            constructor(props){
            super(props);
                this.state = {
                    lang_info: []
                };
        };

        componentDidMount(){
                
                fetch('http://headers.jsontest.com/')
                    .then( (response) => {
                        return response.json()
                    })
                    .then( data => {
                        console.log(data)
                        this.setState({
                            lang_info: data['Accept-Language'].split(",",1)
                        })
                    })
                    .catch(error => console.log(error))
        };


    render(){
        return(
            <div className="top-widget">
            <div className="data-text">
                <h1>{this.state.lang_info}</h1>
                <p className="grey-text">Language</p>
                <p className="any-text">Lorem ipsum dalore es kuer</p>
            </div>
            <div className="top-image"><img src="static/icons/top-image.png" alt="top-image"/></div>
        </div>
        )
    }
}