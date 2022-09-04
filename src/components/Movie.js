import React, { Component } from 'react'
import MovieList from './MovieList'
import Navbar from './Navbar'

//array of the Movies 
const data = [
    {
              Title: 'Star Wars: Episode IV - A New Hope',
              Year: '1977',
              imdbID: 'tt0076759',
              Type: 'movie',
              Poster:
                  <img src= {'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/911uAMIhbqL._SY500_.jpg'}></img>,
          },
          {
              Title: 'Star Wars: Episode V - The Empire Strikes Back',
              Year: '1980',
              imdbID: 'tt0080684',
              Type: 'movie',
              Poster:
                 <img src= { 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'}></img>,
          },
          {
              Title: 'Star Wars: Episode VI - Return of the Jedi',
              Year: '1983',
              imdbID: 'tt0086190',
              Type: 'movie',
              Poster:
                  <img src= {'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'}></img>,
          },
      ]
  
      export default class Movie extends Component {
      render() {
        return (
           <>
                <Navbar />
                {/* <img src={moviePosters} alt="movie posters" style={styles}/> */}
                <p className='site-text'>Star Wars series List and Reviews</p>
                {data.map((movie) => <MovieList key={movie.Title} title={movie.Title} text={movie.Year} pic={movie.Poster}/>)}
             {/* // tile , text and pic are props value in the MovieList component */}
           </>
        )
      }
    }