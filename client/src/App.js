import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchApi } from './services/api';

function App() {

  useEffect(() => {
    fetchApi('get', '/api/projects').then(data => {
      console.log(data);
    })
  }, [])

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
