import React from 'react'

const DEFAULT_IMG = 'https://www.esquireme.com/sites/default/files/styles/full_img/public/images/2017/05/29/rock_paper_scissors__2x.png?itok=MW68w59E'

function ChoiceCard(props){
    // let result;
    // let prompt ='';
    // if(props.title === "Computer"){
    //     if(props.win === "Tie"){
    //         result = "Tie";
    //         prompt = "tie!";
    //     } else if (props.win === "loser"){
    //         result = "loser";
    //         prompt = "lost!";
    //     } else if (props.win === "winner"){
    //         result = "winner";
    //         prompt = "won!";
    //     }
    // } else {
    //     result = props.win
    // }

    let result;
    if(props.title === "Computer"){
        if(props.win === "tie"){
            result = "tie";
        } else if (props.win === "won"){
            result = "lost";
        } else if (props.win === "lost"){
            result = "won";
        } 
    } else {
        result = props.win;
    }

    return (
        <div className={`choice-card ${result}`}>
            <h1>{props.title}</h1>
            <img class="card-img" src={props.imgURL || DEFAULT_IMG} alt={props.title}></img>
            <h3>{props.name}</h3>
            <h2>{result+'!'}</h2>
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