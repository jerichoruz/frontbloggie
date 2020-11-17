import React from 'react';
import Header from '../../components/Header';
import './index.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="banner">
          <div className="tittle"  style={{color: '#fff'}}>
            Compartir conocimiento, es compartir amor. <br/> –Potosho
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
