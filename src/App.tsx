import React from 'react';
import './App.css';
import Footer from './components/Footer'
import Contacts from './components/Contacts'
import Projects from './components/Projects'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App ">
      <div className="main wrapper">
        <div className="title">Mafaro Mushonga</div>
        <p>front-end web developer, please hire me!</p>


        <Contacts />

        <Projects />

      </div>
      <Footer />
    </div>
  );
}

export default App;
