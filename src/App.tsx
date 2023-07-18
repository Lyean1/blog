import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar title="blog" />
    </div>
  );
};

export default App;
