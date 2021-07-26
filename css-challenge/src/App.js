import { useState } from 'react';
import './App.css';

function App() {

const [homeTab, setHomeTab] = useState(true);

  return (
    <section className='main-page'>
      <div className="home-container">
        <h1 className='user-name'>Hi, Jared!</h1>
        <h2 className='date'>23 Jan, 2021</h2>
        <div className='notification-icon'></div>
        <div className='search-container'>
          <div className='magnifying-glass'></div>
          <input className='search-bar' placeholder='Search'></input>
        </div>
        <div className='mood-title'>How do you feel?</div>
        <div className='mood-icon-container'>
          <div className='mood-badly'></div>
          <div className='mood-fine'></div>
          <div className='mood-well'></div>
          <div className='mood-excellent'></div>
        </div>
        <div className='menu-container'>
        <button onClick={()=>setHomeTab(!homeTab)} className='home-icon'></button>
          <button className='menu-icon'></button>
          <button className='message-icon'></button>
          <button className='profile-icon'></button>
        </div>
        {homeTab &&
        <div className='home-tab'>
            <div className='tab-top-bar'></div>
            <h1 className='tab-title'>Exercises</h1>
            <div className='exercises-container'>
                <div className='speaking-skills-container'>
                  <div className='speaking-skills-image'></div>
                  <div className='speaking-skills-details'>
                    <h1 className='skill-title'>Speaking skills</h1>
                    <h2 className='skill-exercices'>16 exercises</h2>
                  </div>
                </div>
                <div className='reading-speed-container'>
                <div className='reading-speed-image'></div>
                  <div className='speaking-skills-details'>
                    <h1 className='skill-title'>Reading speed</h1>
                    <h2 className='skill-exercices'>8 exercises</h2>
                  </div>
                </div>
                <div className='another-exercice-container'></div>
            </div>
        </div>
        }
      </div>
    </section>
  );
}

export default App;
