import React from 'react'
import './Movie.css'

const Movie = ({movies}) => {

  const { Poster, Title, Actors, Director, Metascore, Plot } = movies

  return (
    <div style={{
      backgroundImage: `url(${Poster})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} className="hero-image">

      <div className="content">
        <h4 className="title">{Title}</h4>
        <div className="extras">
          <span className="actors"><strong>Actores:</strong> {Actors}</span>
          <span className="director"><strong>Director:</strong> {Director}</span>
          <span className="metascore"><strong>Puntos:</strong> {Metascore}</span>
        </div>
        <p className="description">{Plot}</p>
      </div>

    </div>
  )
}

export default Movie
