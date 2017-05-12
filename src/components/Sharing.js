import React, {Component} from 'react';



export default class LangWidget extends Component {
    render(){
        return(
            <div className="share-wrapper">
            <div className="share-headline">
                <p className="bold-text">Share job listing</p>
                <img className="icons" src="static/icons/megaphone.png" alt="megaphone"/>
            </div>
            <div className="share-profile">
                <p className="bold-text">Entry Level Intelectual Property Attorney</p>
                <p className="any-text">Vivamus efficitur, risus vehicula placerat rutrum, 
                    enim enim posuere risus, sodales luctus nunc mauris non nibh.
                     Maecenas rhoncus sapien eget nisl mollis, ut aliquam magna auctor. </p>
            </div>
            <div className="bottom-icons">
                <img className="icons" src="static/icons/star.png" alt="star"/>
                <p className="bold-text">4</p>
                <img class="icons last" src="static/icons/share.png" alt="share"/>
            </div>
        </div>
        )
    }
}