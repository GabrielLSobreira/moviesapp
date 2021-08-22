import styled from 'styled-components';

export const MainContainer = styled.main`
  background-color: #222222;
  min-height: 75.2vh;
`;

export const FormSearch = styled.form`
  display: flex;
  justify-content: flex-end;
  margin-right: 4.5rem;

  @media (max-width: 1080px) {
    justify-content: center;
    margin-right: 0;
  }

  input,
  button {
    margin-top: 1rem;
  }
  input {
    height: 1.5rem;
    width: 16.3rem;
    padding: 1.2rem;
    border: none;
    border-radius: 5px 0 0 5px;
    font-size: 1rem;

    background-color: #4a4a4a;
    color: #ffffff;
    font-weight: bold;
    &::placeholder {
      color: #ffffff;
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.9rem;
    }
  }
  button {
    width: 2.5rem;
  }
`;

export const Erro = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-right: 8.3rem;
  color: red;
  font-weight: bold;
  margin-top: 0.2rem;

  @media (max-width: 1080px) {
    justify-content: center;
    margin-right: 0;
    margin-top: 0.5rem;
  }
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  div {
    margin: 2rem 2rem;
    @media (max-width: 720px) {
      margin: 2rem 1rem;
    }
    img {
      box-shadow: 15px 15px 15px;
      border-radius: 0.5rem;
      transition: transform 0.2s ease-in-out;
      @media (max-width: 720px) {
        width: 10rem;
      }
      @media (max-width: 320px) {
        width: 8rem;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const NotFound = styled.p`
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 2rem;
  margin-top: 4rem;
  font-family: cursive, sans-serif;
  @media (max-width: 1025px) {
    text-align: center;
    font-size: 1.8rem;
  }
`;
