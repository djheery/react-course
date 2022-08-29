import React, { useState, useEffect,useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("https://swapi.dev/api/films");
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
    const transfomedMovies = resData.results.map(m => {
      return {
        id: m.episode_id,
        title: m.title,
        openingText: m.opening_crawl,
        releaseDate: m.release_date        
      }
    })

    return transfomedMovies;
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

  


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {getContent()}
      </section>
    </React.Fragment>
  );
}

export default App;
