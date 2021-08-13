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
        {/* <img src={icon} alt="profile" className="icon" /> */}
        <div className="title">Mafaro Mushonga</div>
        <p>Hello!, and welcome my name is Mafaro I am a front-end web developer</p>
        <p>I'm 22 years old and currently unemployed.  </p>
        <p>I am looking forward to join a team so that i can improve my problem solving skills and also hope to learn new languages and frameworks</p>
      </div>


      <Contacts />

      <Projects />

      <Footer />
    </div>
  );
}

export default App;
