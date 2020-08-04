import React, { useState } from 'react'
import Error from './Error'
import './Nav.css'
import PropTypes from 'prop-types'

const Nav = ({titulo, setBusqueda}) => {

  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)

  const searchMovie = e => {
    e.preventDefault()

    // validar el termino de busqueda
    if(search.trim() === '') {
      setError(true)
      return
    }

    // enviar la busqueda al componente principal app.js
    setError(false)

    // guardamos el resultado de la busqueda en el state principal app.js
    setBusqueda(search)
    setSearch('')
  }


  return (
    <nav className="site-nav">
      <h1 className="title">{titulo}</h1>
      <form
        onSubmit={searchMovie}
      >
        <div className="form-group">
          <input
            type="text"
            name="search"
            className="searchInput"
            placeholder="Búsca una pelicula"
            onChange={ e => { setSearch(e.target.value) } }
            value={search}
          />
          <input
            type="submit"
            className="btn"
            value="Búscar"
          />
        </div>
        {error ? <Error mensaje='Prueba buscando Joker, Avengers o tu película favorita...' /> : null}
      </form>
    </nav>
  )
}

Nav.propTypes = {
  titulo: PropTypes.string.isRequired,
  setBusqueda: PropTypes.func.isRequired
}

export default Nav
