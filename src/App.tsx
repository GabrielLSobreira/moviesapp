import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Index';
import Navbar from './components/Navbar';
import { Routes } from './routes';
import { GlobalStyle } from './styles';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes />
        <Footer />
        <ToastContainer autoClose={2500} />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
};

export default App;
