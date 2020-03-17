import React from 'react'

const DEFAULT_IMG = 'https://www.esquireme.com/sites/default/files/styles/full_img/public/images/2017/05/29/rock_paper_scissors__2x.png?itok=MW68w59E'

function ChoiceCard(props){
    const won = props.title === props.previousWinner;
    let className;
    const hasPreviousGame = 
        props.previousWinner === "Computer" || props.previousWinner === "You";
    if (hasPreviousGame){
        className = won? "winner" : "loser";
    }

    let prompt;
    if (won){
        prompt = "won!";
        className = won? "winner" : "loser";
    } else if (props.previousWinner === "Tie"){
        prompt = "Tie";
    } else if (props.previousWinner === null){
        prompt = "Start";
    } else {
        prompt = "lost!";
    }

    return (
        <div className={`choice-card ${className}`}>
            <h1>{props.title}</h1>
            <img class="card-img" src={props.imgURL || DEFAULT_IMG} alt={props.title}></img>
            <h3>{props.name}</h3>
            <h2>{prompt}</h2>
        </div>
    )
}

export default ChoiceCard;

// import React, { Component } from 'react'

// const DEFAULT_IMG = 'https://www.esquireme.com/sites/default/files/styles/full_img/public/images/2017/05/29/rock_paper_scissors__2x.png?itok=MW68w59E'
// class ChoiceCard extends Component {
//     render(){
//         return (
//             <div className={`choice-card ${this.props.winner? 'winner' : 'loser'}`}>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.name}</h2>
//                 <img className="card-img" src={this.props.imgURL}></img>
//                 <h2>{this.props.winner? 'won' : 'lost'}</h2>
//             </div>
//         )
//     }
// }

// export default ChoiceCard;