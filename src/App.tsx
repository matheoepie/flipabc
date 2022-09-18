import React from 'react';
import './App.css';
import Header from './component/header';
import Footer from "./component/footer";
import Content from './component/content';

function App() {
  return (
      <div>
        <Header/>
          <Content/>
        <Footer/>
      </div>


  );
}

export default App;
