import { Link } from 'react-router-dom';
import { Error404 } from './styles';

const NotFound: React.FC = () => {
  return (
    <Error404>
      <h1>Erro 404</h1>
      <p>
        Página não encontrada. <br />
        Retorne para a nossa página
        <Link to="/"> Home</Link>.
      </p>
    </Error404>
  );
};

export default NotFound;
