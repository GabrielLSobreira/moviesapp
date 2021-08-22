import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FavoritesContainer, FavoritesSection, NoFavorites } from './styles';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Favorites: React.FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList: any = localStorage.getItem('@FavoriteMovies');
    setMovies(JSON.parse(myList) || []);
  }, []);

  const handleDelete = (movie: any) => {
    let movieFilter = movies.filter((mov: any) => {
      return mov.id !== movie.id;
    });

    setMovies(movieFilter);
    localStorage.setItem('@FavoriteMovies', JSON.stringify(movieFilter));
    toast.success('Filme excluído com sucesso');
  };

  return (
    <FavoritesSection>
      <h1>Favoritos:</h1>
      {movies.length === 0 && (
        <NoFavorites>
          <p>
            Você não tem nenhum filme selecionado como favorito no momento. Caso
            queira adicionar é só ir para nossa página <Link to="/">Home</Link>{' '}
            e escolher o filme de sua preferência.
          </p>
        </NoFavorites>
      )}
      <FavoritesContainer>
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
      </FavoritesContainer>
    </FavoritesSection>
  );
};

export default Favorites;
