import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NoWatchLater, WatchLaterContainer, WatchLaterSection } from './styles';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Favorites: React.FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList: any = localStorage.getItem('@WatchLater');
    setMovies(JSON.parse(myList) || []);
  }, []);

  const handleDelete = (movie: any) => {
    let movieFilter = movies.filter((mov: any) => {
      return mov.id !== movie.id;
    });

    setMovies(movieFilter);
    localStorage.setItem('@WatchLater', JSON.stringify(movieFilter));
    toast.success('Filme excluído com sucesso');
  };

  return (
    <WatchLaterSection>
      <h1>Assistir depois:</h1>
      {movies.length === 0 && (
        <NoWatchLater>
          <p>
            Você não tem nenhum filme selecionado para assistir depois. Caso
            queira adicionar é só ir para nossa página <Link to="/">Home</Link>{' '}
            e escolher o filme de sua preferência.
          </p>
        </NoWatchLater>
      )}
      <WatchLaterContainer>
        {movies.map((movie: any) => (
          <div>
            <Link to={`filme/${movie.id}`}>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              )}
            </Link>
            <button onClick={() => handleDelete(movie)}>
              <FiTrash2 />
            </button>
          </div>
        ))}
      </WatchLaterContainer>
    </WatchLaterSection>
  );
};

export default Favorites;
