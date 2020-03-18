// import React, {useState} from 'react';
// import './App.css';
// import ChoiceCard from './components/ChoiceCard';

// const CHOICES = {
//   rock: {
//     name: "rock",
//     img: "https://i.redd.it/tsgq7a9jgmsy.jpg"
//   },
//   paper: {
//     name: "paper",
//     img: 'https://pbs.twimg.com/media/DWsJ9z7X0AAxl2z.jpg'
//   },
//   scissors: {
//     name: "scissors",
//     img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still10-preview-1522353855.jpg'
//   }
// }

// const getRandomChoice = () => {
//   let choiceNames = Object.keys(CHOICES);
//   let choiceIndex = Math.floor(Math.random()*3);
//   let choiceName = choiceNames[choiceIndex];
//   return CHOICES[choiceName];
// }

// const getRoundOutcome = userChoice => {
//   const computerChoice = getRandomChoice().name;
//   let result;

//   if(userChoice === "rock"){
//     result = computerChoice === "scissors" ? "won!" : "lost!";
//   }
//   if(userChoice === "paper"){
//     result = computerChoice === "rock" ? "won!" : "lost!";
//   }
//   if(userChoice === "scissors"){
//     result = computerChoice === "paper"? "won!" : "lost!";
//   }
//   if(userChoice === computerChoice) result = "Tie game!";
//   return [result, computerChoice];
// }


// function App() {
  
//   const [prompt, setGamePrompt] = useState("1, 2, 3, SHOOT!")

//   const [gameHistory, setGameHistory] = useState([]);
  
//   const [previousWinner, setPreviousWinner] = useState({});

//   const [playerChoice, setPlayerChoice] = useState({});
//   const [compChoice, setCompChoice] = useState({});

//   const onPlayerChoose = (playerChoice) =>{
//     console.log(playerChoice);

//     setCompChoice(getRandomChoice());
//     setPlayerChoice(CHOICES[playerChoice]);

//     const [result, compChoice] = getRoundOutcome(playerChoice);

//     if(result === "won!"){
//       setPreviousWinner("You");
//     } else if (result === "lost!"){
//       setPreviousWinner("Computer");
//     } else {
//       setPreviousWinner("Tie");
//     }

//     gameHistory.push(result);
//     console.log('result:', result, 'compChoice:', compChoice)
//     setGamePrompt(result);
//     setGameHistory(gameHistory);
//     console.log('compChoice.img:', compChoice.img)
//   }

//   return (
//     <div className="App">
//       <div class="container">
//         <div class="row mb-3">
//           <div class="col-md-8 themed-grid-col">
//               <ChoiceCard 
//           title="You"
//           name={playerChoice && playerChoice.name}
//           imgURL={playerChoice && playerChoice.img}
//           previousWinner={previousWinner}
//            />
//           <button onClick={()=>onPlayerChoose('rock')}>Rock</button> {/*assign a function*/}
//           <button onClick={()=>onPlayerChoose('scissors')}>Scissors</button> {/*execute immediately*/}
//           <button onClick={()=>onPlayerChoose('paper')}>Paper</button> {/*execute when clicked*/}
            
//           <h1>{prompt}</h1>
//           <ChoiceCard 
//           title="Computer"
//           name={compChoice && compChoice.name}
//           imgURL={compChoice && compChoice.img}
//           previousWinner={previousWinner}
//            />

//           <div className="col-md-4 themed-grid-col">
//             <h3>History</h3>
//             <ul>
//               {gameHistory.map(result => {
//                 return <li>{result}</li>;
//               })}
//             </ul>
//           </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, {useState} from 'react'
import './App.css'
import ChoiceCard from './components/ChoiceCard'

const CHOICES = {
  rock: {
    name: 'rock',
    img: 'https://i.redd.it/tsgq7a9jgmsy.jpg'
  },
  paper: {
    name: 'paper',
    img: 'https://pbs.twimg.com/media/DWsJ9z7X0AAxl2z.jpg'
  },
  scissors: {
    name: 'scissors',
    img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still10-preview-1522353855.jpg'
  }
}


function App(){
  let [result, setResult] =  useState('');
  let [playerChoice,setPlayerChoice] = useState({});
  let [compChoice, setCompChoice] = useState({});

  let onPlay = (playerChoice) => {
    setPlayerChoice(CHOICES[playerChoice]);
    console.log('playerChoice:',CHOICES[playerChoice]);

    let compChoice = getRandomChoice();
    setCompChoice(compChoice);    
    console.log('compChoice:',compChoice);

    let finalResult = getJudgement(CHOICES[playerChoice].name, compChoice.name);
    setResult(finalResult);
    console.log('finalResult:', finalResult);

  }

  const getRandomChoice = () => {
    let choiceNames = Object.keys(CHOICES);
    let choiceIndex = Math.floor(Math.random()*3);
    let choiceName = choiceNames[choiceIndex];
    return CHOICES[choiceName]
  }
  
  const getJudgement = (playerChoice, compChoice) => {
    if(playerChoice === compChoice){
      return "tie";
    } else if (playerChoice === 'rock'){
      return compChoice === 'scissors'? 'won' : 'lost';
    } else if (playerChoice === 'paper'){
      return compChoice === 'rock'? 'won' : 'lost';
    } else if (playerChoice === 'scissors'){
      return compChoice === 'paper'? 'won' : 'lost';
    }
  }

  return (
    <div className="App">
      <div class="container">
        <div class="mb-3 row">
          <div class="col-md-8 themed-grid-col">
            <ChoiceCard 
              title="You"
              win={result}
              name={playerChoice && playerChoice.name}
              imgURL={playerChoice && playerChoice.img}
            />
            <button onClick={()=>onPlay('rock')}>Rock</button>
            <button onClick={()=>onPlay('paper')}>Paper</button>
            <button onClick={()=>onPlay('scissors')}>Scissors</button>
             <ChoiceCard 
              title = "Computer"
              win={result}
              name={compChoice && compChoice.name}
              imgURL={compChoice && compChoice.img}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;