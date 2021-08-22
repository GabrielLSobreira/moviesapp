import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api, API_KEY } from '../../services/api';
import {
  ErrorImg,
  MovieInfoContainer,
  Overview,
  MovieStyle,
  InfoStyle,
} from './styles';
import { MovieSection } from './styles';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';

interface MovieInter {
  title: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
  id: number;
  release_date: string;
  tagline: string;
}

export const MovieInfo: React.FC = () => {
  const [movie, setMovie] = useState<MovieInter | null>(null);
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies(): Promise<void> {
      setLoading(true);
      const response = await api.get(
        `/movie/${id}?api_key=${API_KEY}&language=pt-BR`,
      );
      const data = response.data;
      setMovie(data);
      setLoading(false);
    }
    fetchMovies();
  }, [id]);

  const handleAddFavorite = () => {
    const myList: any = localStorage.getItem('@FavoriteMovies');
    let savedMovies = JSON.parse(myList) || [];
    const hasMovie = savedMovies.some(
      (saveMovie: any) => saveMovie.id === movie?.id,
    );
    if (hasMovie) {
      toast.error('Você já salvou nos favoritos.');
      return;
    }
    savedMovies.push(movie);
    localStorage.setItem('@FavoriteMovies', JSON.stringify(savedMovies));
    toast.success('Filme adicionado com sucesso!');
  };

  const handleAddWatchLater = () => {
    const myList: any = localStorage.getItem('@WatchLater');
    let savedMovies = JSON.parse(myList) || [];
    const hasMovie = savedMovies.some(
      (saveMovie: any) => saveMovie.id === movie?.id,
    );
    if (hasMovie) {
      toast.error('Você já salvou em assistir mais tarde.');
      return;
    }
    savedMovies.push(movie);
    localStorage.setItem('@WatchLater', JSON.stringify(savedMovies));
    toast.success('Filme adicionado com sucesso!');
  };

  if (loading) return <Loading />;
  return (
    <MovieSection>
      <MovieInfoContainer>
        <h1>{movie?.title}</h1>
        <MovieStyle>
          {movie?.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt="Imagem do filme"
            />
          ) : (
            <ErrorImg>
              <p>Imagem indisponível</p>
            </ErrorImg>
          )}
          <InfoStyle>
            <Overview>
              <h2>Sinopse:</h2>
              {movie?.overview ? (
                <p>{movie?.overview}</p>
              ) : (
                <p>Sinopse Indisponível 😞</p>
              )}
              {movie?.tagline && (
                <div>
                  <h3>Tagline: </h3>
                  <p>{movie?.tagline}</p>
                </div>
              )}
            </Overview>
            <p>
              Nota TMDB : <span>{movie?.vote_average}</span>
            </p>
            <div>
              <button onClick={handleAddFavorite}>Favoritar filme</button>
              <button onClick={handleAddWatchLater}>Assistir depois</button>
            </div>
          </InfoStyle>
        </MovieStyle>
      </MovieInfoContainer>
    </MovieSection>
  );
};
