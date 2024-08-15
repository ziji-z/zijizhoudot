import React, { useState } from 'react';
import './MainPage.css';
import ContentLoader from './ContentLoader';

const MainPage = () => {
  const [title, setTitle] = useState('writings/for me, for school, and things to read');
  const [isArticleSelected, setIsArticleSelected] = useState(false);

  const changeTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const handleSectionTitleClick = () => {
    if (isArticleSelected) {
      setIsArticleSelected(false); // Show the list of articles
      changeTitle('writings/for me, for school, and things to read'); //change title back
    }
  };

  const contentSection = (currentTitle) => { // handles the content section based on the nav menu selection
    if (currentTitle == "writings/for me, for school, and things to read" || currentTitle == "back to writings") {
      return (
        <ContentLoader 
            isArticleSelected={isArticleSelected} 
            onArticleSelect={() => setIsArticleSelected(true) & changeTitle('back to writings')}
          />
      )
    }
    return (
      <p>nothing selected</p>
    )
  } 

  return (
    <div className="main-page">
      <div className="navigation">
        <h1 className="title">ziji zhou | 周子霁</h1>
        <h2 className="subtitle">amherst college | github: ziji-z | zijizhouziji@gmail.com</h2>
        <div className='menu-note-container'>
          <h3 id='menu-note'>none of the below are mutually exclusive nor collectively exhaustive</h3>
        </div>
        <nav>
          <ul className="menu">
            <button className="menu-item" onClick={() => changeTitle('ziji/自己/things abt me')}>ziji/自己/things abt me</button>
            <button className="menu-item" onClick={() => changeTitle('art/paintings and sketches and things i made')}>art/paintings and sketches and things i made</button>
            <button className="menu-item" onClick={() => changeTitle('photos/and things to see')}>photos/and things to see</button>
            <button className="menu-item" onClick={() => changeTitle('film/and things to watch')}>film/and videos and things to see</button>
            <button className="menu-item" onClick={() => changeTitle('math/research and other things that involve logic of some sort')}>math/research and other things that involve logic of some sort</button>
            <button className="menu-item" onClick={() => changeTitle('sounds/and other stupid little things to listen to')}>sounds/and other stupid little things to listen to</button>
            <button className="menu-item" onClick={() => changeTitle('writings/for me, for school, and things to read')}>writings/for me, for school, and things to read</button>
            <button className="menu-item" onClick={() => changeTitle('cv')}>cv</button>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <h1 
          className="section-title" 
          onClick={handleSectionTitleClick}
          style={{ cursor: isArticleSelected ? 'pointer' : 'default' }}
        >
          {title}
        </h1>
        <div className='main-text'> {contentSection(title)} </div>
      </div>
    </div>
  );
};

export default MainPage;