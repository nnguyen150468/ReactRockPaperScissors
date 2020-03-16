import React from 'react'

function ChoiceCard(props){
    return (
        <div className={`choice-card ${props.winner? 'winner': 'loser'}`}>
            <h1>{props.name}</h1>
            <img class="card-img" src={props.imgURL}></img>
            <h2>{props.winner? 'won':'lost'}</h2>
        </div>
    )
}

export default ChoiceCard;

