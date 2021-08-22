import styled from 'styled-components';

export const FavoritesSection = styled.section`
  background-color: #222222;
  min-height: 75.2vh;

  h1 {
    font-size: 2.3rem;
    text-align: center;
    font-family: cursive, sans-serif;
    color: #fff;
    margin-top: 1rem;
    @media (max-width: 720px) {
      font-size: 1.8rem;
      margin: 0 2rem;
      margin-top: 1rem;
    }
  }
`;

export const NoFavorites = styled.div`
  justify-content: center;
  display: flex;

  p {
    font-size: 1.8rem;
    color: red;
    margin-top: 2rem;
    width: 1000px;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    @media (max-width: 720px) {
      font-size: 1.1rem;
      margin: 0 1rem;
      margin-top: 1.5rem;
    }
    a {
      color: red;
    }
  }
`;

export const FavoritesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div {
    margin: 2rem 2rem;
    position: relative;
    @media (max-width: 1080px) {
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
    }
    button {
      position: absolute;
      font-size: 2.3rem;
      right: 0rem;
      border: none;
      border-radius: 0.5rem;
      transition: color 0.2s;
      &:hover {
        color: red;
      }
    }
  }
`;
