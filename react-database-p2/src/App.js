import React, { useState, useEffect, useCallback } from 'react';
import isHTTP from '../src/'
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("https://react-http-bf88b-default-rtdb.firebaseio.com/movies.json");
      if(!res.ok) throw new Error('Something went wrong');
      const resData = await res.json()
      const transformedMovies = transfomMovies(resData)
      
      setMovies(transformedMovies);
    } catch (err) { 
      setError(err.message);
    }
    setIsLoading(false);
  }, [])

  const transfomMovies = (resData) => {
    const loadedMovies = [];
    for(const key in resData) {
      loadedMovies.push({
        id: key,
        title: resData[key].title,
        openingText: resData[key].openingText,
        releaseDate: resData[key].releaseDate
      })
    }

    return loadedMovies;
  }

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);


  const getContent = () => {
    let content = <p>Found no Movies</p>
    if(error && !isLoading)
      content = <p>{error}</p>;
    if(!isLoading && movies.length > 0)
      content = <MoviesList movies={movies} />
    if(isLoading)
      content = <p>Loading</p>

    return content;
  }

  const addMovieHandler = async (movie) => {
    const res = await fetch("https://react-http-bf88b-default-rtdb.firebaseio.com/movies.json",
      {
        method: 'POST', 
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const resData = await res.json();
    console.log(resData)
  }



  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{getContent()}</section>
    </React.Fragment>
  );
}

export default App;
