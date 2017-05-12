 import React, { Component } from 'react';
 import Fetch from 'isomorphic-fetch';
 
 import TimeWidget from './TimeWidget';
 import IpWidget from './IpWidget';
 import LangWidget from './LangWidget';
 import Article from './Article';
 import Sharing from './Sharing';




export default class App extends Component {

     render() {

       return (
             <div className="main-wrapper-of-all">

                 <header className="top-bar">
                    <TimeWidget />
                    <IpWidget />
                    <LangWidget />
                 </header>

                <div className="main-container">
                    <Article />
                    <Sharing />
                </div>

            </div>

        )
    }
} 

