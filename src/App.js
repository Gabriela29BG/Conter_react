
import './index.css';
import Button from './conpont/Button.js';
import Counter from './conpont/Counter.js'
import logo from './img/logo.png';
import { useState } from 'react';

function App() {
  const[numClicks, setNumClicks] = useState(0);
  
  const addClick = () => {
    setNumClicks(numClicks + 1);
  }

  const restartCount = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='container-logo'>
        <img
          className='logo'
          src= {logo}
          alt='logo' />
      </div>
  
        <div className='container-logo'>
          <Counter numClicks={ numClicks } />
          <Button 
            text='Click'
            isButtonClick={ true }
            driveClick={ addClick } />
          <Button 
            text='Restart'
            isButtonClick={ false }
            driveClick={restartCount} />
        </div>
      </div>
  );
}

export default App;
