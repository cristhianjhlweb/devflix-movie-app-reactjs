import React from 'react'
import Movie from './Movie'

const MoviesList = ({movies}) => {

  return (
    <div className="movie-container">
      <Movie
        movies={movies}
      />
    </div>
  )
}

export default MoviesList
