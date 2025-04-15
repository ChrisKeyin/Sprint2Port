import React from 'react';
import Navigation from './Navigation';

function Home() {
  const playSound = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.volume = 0.1;
    audio.play();
  };

  return (
    <body className="index-page">
      <main>
        <div className="indexBody">
          <div className="indexBox1">
            <header>
              <h1 className="index">
                Christopher King<span style={{ height: '150px' }}><br /></span>Freelance Web Developer
              </h1>
            </header>
            <div className="indexPicBox2">
              <img src="Pics/PortProf.jpg" alt="Html Image" onClick={() => playSound('Pics/quickType.mp3')} />
            </div>
          </div>
          <div className="indexBox2">
            <div className="indexPicBox">
              <img src="Pics/Base.jpg" alt="Art portfolio, Title: Base" onClick={() => playSound('Pics/waves.mp3')} />
            </div>
          </div>
        </div>
        <Navigation page="index" />
      </main>
    </body>
  );
}

export default Home;