import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const RowMovies = ({type, busqueda}) => {

  const [row, setRow] = useState([])

  useEffect(() => {
    const requestAPI = async () => {

        const API_KEY = "6693614f"
        const URL = `https://www.omdbapi.com/?s=${busqueda}&type=${type ? type : 'movie'}&apikey=${API_KEY}`

        const request = await fetch(URL)
        const response = await request.json()
        setRow(response.Search)
    }
    requestAPI()
  }, [busqueda])

  return (
    <React.Fragment>
      <h2 className="row-title">{`${type} of ${busqueda}`}</h2>
      <div className="row-container">
        {row.map(r => (
          <img key={r.imdbID} className="row-image" src={r.Poster} title={r.Title} alt={r.Title} />
        ))}
      </div>
    </React.Fragment>
  )
}


RowMovies.propTypes = {
  busqueda: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default RowMovies
