import React, {Component} from 'react';



export default class TimeWidget extends Component {

render(){
    return (
         <div className="wrapper">
            <img className="article-img" src="static/icons/article-image.png" alt="article-image"/>
            <div className="text-area">
                <h2 className="headline">Experienced UX Architect</h2>
                <p className="secondary-headline">You've been called for a first interview.</p>
                <p className="any-text">Dear applicant, we received your resume through 
                    the Codex system and we are glad to inform you that we wish to 
                    interview you. In the next few days...</p>
                <a href="#">more</a>
            </div>
            <div className="date-wrapper">
                <p className="any-text">Read about the application process to prepare</p>
                <div className="arrow"></div>
                <input className="date-thingy" type="date"/>
            </div>

        </div>
    )
}

} 