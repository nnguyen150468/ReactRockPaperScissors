import React, {useState} from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard';

const choices = {
  rock: 'https://media.tinthethao.com.vn/files/news/2018/01/23/theo-chan-dwayne-johnson-the-rock-mot-ngay-tap-nguc-122013.jpg',
  paper: 'https://pbs.twimg.com/media/DWsJ9z7X0AAxl2z.jpg',
  scissors: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still10-preview-1522353855.jpg'
}

function App() {
  
  return (
    <div className="App">
      <ChoiceCard 
      name="You"
      imgURL={choices.rock}
      winner={false}/>
      <ChoiceCard 
      name="Computer"
      imgURL={choices.paper}
      winner={true}/>
    </div>
  );
}

export default App;
