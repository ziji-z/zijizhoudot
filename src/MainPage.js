import React, { useState } from 'react';
import './MainPage.css';
import DynamicText from './DynamicText';


const MainPage = () => {
    const [title, setTitle] = useState('');

      // Function to update the title
    const changeTitle = (newTitle) => {
    setTitle(newTitle);
    };
    
    return (
        <div className="main-page">
          <div className="navigation">
            <h1 className="title">ziji zhou | 周子霁</h1>
            <h2 className="subtitle">amherst college | github: ziji-z | zijizhouziji@gmail.com</h2>
            <div className='menu-note-container'>
              <h3 id='menu-note'>none of the below are mutually exclusive nor mutually exhaustive</h3>
            </div>
            <nav>
              <ul className="menu">
                <button className="menu-item" onClick={() => changeTitle('ziji/自己/子霁/things abt me')}>ziji/自己/子霁/things abt me</button>
                <button className="menu-item" onClick={() => changeTitle('art/photos and paintings and sketches and videos and things to see')}>art/photos and paintings and sketches and videos and things to see</button>
                <button className="menu-item" onClick={() => changeTitle('math/research and other things that involve logic of some sort')}>math/research and other things that involve logic of some sort</button>
                <button className="menu-item" onClick={() => changeTitle('sounds/and other stupid little things to listen to')}>sounds/and other stupid little things to listen to</button>
                <button className="menu-item" onClick={() => changeTitle('writings/for me, for school, and things to read')}>writings/for me, for school, and things to read</button>
              </ul>
            </nav>
          </div>
          <div className="main-content">
            <h1 className="section-title">{title}</h1>
          </div>
        </div>
      );
    };

export default MainPage;