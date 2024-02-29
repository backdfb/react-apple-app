import { useCallback, useEffect, useState } from 'react';
import axios from '../api/axios';
import './Row.css';
import MovieModal from './MovieModal';

const Row = ({title, id, fetchUrl}) => {

  const [movies, setmovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false); 
  
  const [movieSelected, setMovieSelected] = useState({});

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  }

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setmovies(response.data.results);
  }, [fetchUrl])

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData])

  return (
    <div>
      <h2>{title}</h2> 
      <div className='slider'>
        <div className="slider__arrow-left">
          <span className='arrow'
            onClick={
                () => {
                    document.getElementById(id).scrollLeft -= window.innerWidth -80;
                }
            }
          >
            {"<"}
          </span>  
        </div>
        <div id={id} className='row__posters'>
        {movies.map((movie) => (
            <img
            key={movie.id}
            className='row__poster'
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
            />
        ))}
        </div>
        <div className="slider__arrow-right">
          <span className='arrow'
          onClick={
            () => {
                document.getElementById(id).scrollLeft -= window.innerWidth -80;
          }}
          >
            {">"}
          </span>  
        </div>    

      </div> 

          {modalOpen && (
          <MovieModal
            {...movieSelected}
            setModalOpen={setModalOpen} />
          )}

    </div>
  )
}

export default Row