import React from 'react';
import './App.css';
import Footer from './components/Footer'
import Contacts from './components/Contacts'
import Projects from './components/Projects'
import 'antd/dist/antd.css';
import icon from './images/1619253159312.jpg'

function App() {


  return (
    <div className="App ">
      <div className="main ">
        <img src={icon} alt="profile" className="icon" />
        <div className="title">Mafaro Mushonga</div>
        <p>Hello!, and welcome my name is Mafaro I am a front-end web developer, please hire me!</p>
        <p>details no-one cares about here</p>
      </div>


      <Contacts />

      <Projects />

      <Footer />
    </div>
  );
}

export default App;
