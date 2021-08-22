import styled from 'styled-components';

export const CategoriesSection = styled.section`
  background-color: #222222;
  min-height: 75.2vh;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 2rem;
  h1 {
    font-size: 2rem;
    color: #fff;
    font-family: cursive, sans-serif;
    @media (max-width: 920px) {
      font-size: 1.5rem;
      text-align: center;
    }
    @media (max-width: 320px) {
      font-size: 1.1rem;
    }
  }

  form {
    margin-left: 0.8rem;
    margin-top: 0.3rem;
    select {
      padding: 0.5rem;
      border: 2px solid black;
      border-radius: 1rem;
      margin-right: 1rem;
      font-size: 1rem;
      text-align: center;

      option {
        border: none;
      }
    }
  }
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  div {
    margin: 2rem 2rem;
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
    @media (max-width: 720px) {
      margin: 2rem 1rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  button {
    margin: 0 0.7rem;
    border: none;
    border-radius: 1rem;
    padding: 0.5rem 0.5rem;
    font-family: cursive, sans-serif;
    font-size: 1rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.2rem;
      margin: 0 0.2rem;
    }
    &:hover {
      background-color: #26c6ff;
    }
  }
`;
