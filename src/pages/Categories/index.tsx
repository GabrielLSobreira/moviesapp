import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import { api, API_KEY } from '../../services/api';
import {
  ButtonContainer,
  CategoriesContainer,
  CategoriesSection,
  MoviesContainer,
} from './styles';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';

const Categories: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState('16');
  const genres = {
    animacao: 16,
    acao: 28,
    aventura: 12,
    comedia: 35,
    drama: 18,
    documentario: 99,
    faroeste: 37,
    terror: 27,
  };
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchCategories(): Promise<void> {
      setLoading(true);
      const response = await api.get(
        `/discover/movie?api_key=${API_KEY}&with_genres=${genre}&language=pt-BR&page=${page}`,
      );
      const data = response.data.results;
      setMovies(data);
      setLoading(false);
    }
    fetchCategories();
  }, [genre, page]);

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setGenre(event.target.value);
    setPage(1);
  };

  if (loading) return <Loading />;
  return (
    <CategoriesSection>
      <CategoriesContainer>
        <h1>Selecione uma categoria:</h1>
        <form>
          <select value={genre} onChange={handleSelectChange}>
            <option value={genres.animacao}>Animação</option>
            <option value={genres.acao}>Ação</option>
            <option value={genres.aventura}>Aventura</option>
            <option value={genres.comedia}>Comédia</option>
            <option value={genres.drama}>Drama</option>
            <option value={genres.documentario}>Documentário</option>
            <option value={genres.faroeste}>Faroeste</option>
            <option value={genres.terror}>Terror</option>
          </select>
        </form>
      </CategoriesContainer>
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
      <ButtonContainer>
        {page > 1 && (
          <button onClick={() => setPage(page - 1)}>
            <FiArrowLeftCircle />
            Página Anterior
          </button>
        )}
        {page < 20 && (
          <button onClick={() => setPage(page + 1)}>
            Próxima Página <FiArrowRightCircle />
          </button>
        )}
      </ButtonContainer>
    </CategoriesSection>
  );
};

export default Categories;
