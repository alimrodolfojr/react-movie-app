import './App.css';
import { useState, useEffect } from 'react'


const API_URL = `http://www.omdbapi.com/?apikey=fd2c6a54`

const movieTitle = 'Batman'


function App() {
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${movieTitle}`)
    const data = await response.json()
    console.log(data)
  }

   
  useEffect(() => {
    searchMovie(movieTitle)
  },[])



  return (
    <div className="App">
      <h1>This is the Main App</h1>
    </div>
  );
}

export default App;
