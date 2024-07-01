import React from 'react'
import Header from './components/Header/Header';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import { boards } from './components/data';

const App: React.FC = () => {
  return (
  
    <div className='App'>
      <Header />
      {boards.map((board, index) => (
        <div key={index} className='container'>
          <Gallery boards={[board]} />
        </div>
         ))}
    </div>
    
  )
}

export default App
