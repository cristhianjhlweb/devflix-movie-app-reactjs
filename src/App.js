import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import MoviesList from './components/MoviesList'
import RowMovies from './components/RowMovies'
import Footer from './components/Footer'

function App() {

  const [busqueda, setBusqueda] = useState('batman')
  const [movies, setMovies] = useState([])

  useEffect(() => {

    const requestAPI = async () => {
      if(busqueda === '') return

      const API_KEY = "Ingresar la API KEY que te proporcina omdb"
      const URL = `https://www.omdbapi.com/?t=${busqueda}&apikey=${API_KEY}`
      const response = await fetch(URL)
      const movies = await response.json()

      setMovies(movies)
    }
    requestAPI()

  }, [busqueda])

  return (
    <div className="app">
      <Nav
        titulo="DEVFLIX"
        setBusqueda={setBusqueda}
      />

      <MoviesList
        movies={movies}
      />

      <RowMovies busqueda={busqueda} type="movie"/>
      <RowMovies busqueda={busqueda} type="series"/>

      <Footer />


    </div>
  )
}

export default App
