import React from 'react';
import './App.css';
import './App.scss';
import PhotoBlock from './PhotoBlock';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <div className="header">
        <div> {"<--"} Back to Website</div>
      </div>
      <div className='wrapper'>
        <PhotoBlock imageName='Drink_And_Dream' />
        <PhotoBlock imageName='Sunset_Pipe_Dream' />
        <PhotoBlock imageName='Bathing_Culture' />
        <PhotoBlock imageName='Big_City_Pipe_Dream' />
        <PhotoBlock imageName='Late_Night_Pipe_Dream' />
        <PhotoBlock imageName='Deep_Dreamliner' />
        <PhotoBlock imageName='Suburban_Shore' />
        <PhotoBlock imageName='Dive-in_Theatre' />
        <PhotoBlock imageName='Sleep_Street_Station' />
        <PhotoBlock imageName='Summer_Games' />
        <PhotoBlock imageName='Sign_of_The_Times' />
      </div>
    </div>
  );
}

export default App;
