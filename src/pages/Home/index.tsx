import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../../components/Loading';
import { api, API_KEY } from '../../services/api';
import {
  Erro,
  FormSearch,
  MainContainer,
  MoviesContainer,
  NotFound,
} from './styles';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [errorSearch, setErrorSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies(): Promise<void> {
      setLoading(true);
      const response = await api.get(
        `movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`,
      );
      const data = response.data.results;
      setMovies(data);
      setLoading(false);
    }
    fetchMovies();
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearch(event.target.value);
  };

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (search === '') {
      setErrorSearch('Preencha o campo com um filme.');
    } else {
      setLoading(true);
      setErrorSearch('');
      const response = await api.get(
        `search/movie?api_key=${API_KEY}&language=pt-BR&query=${search}`,
      );
      const data = response.data.results;
      setMovies(data);
      setLoading(false);
    }
  }

  if (loading) return <Loading />;
  return (
    <MainContainer>
      <FormSearch onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          placeholder="Pesquisar filme..."
          onChange={handleInputChange}
        ></input>
        <button>{<BsSearch />}</button>
      </FormSearch>
      {errorSearch && <Erro>{errorSearch}</Erro>}
      {movies.length === 0 && <NotFound>Nenhum filme encontrado 😞</NotFound>}
      <MoviesContainer>
        {movies.map((movie: any) => (
          <div key={movie.title}>
            <Link to={`filme/${movie.id}`}>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              )}
            </Link>
          </div>
        ))}
      </MoviesContainer>
    </MainContainer>
  );
};

export default Home;
