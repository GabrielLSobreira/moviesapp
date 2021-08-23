import styled from 'styled-components';

export const MovieSection = styled.section`
  min-height: 75.2vh;
  background-color: #222222;
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  margin: 0 2rem;
  color: #fff;
  @media (max-width: 1025px) {
    margin: 0 0.8rem;
  }
  h1 {
    font-size: 3rem;
    font-family: cursive, sans-serif;
    text-align: center;
    margin-bottom: 0.5rem;
    @media (max-width: 720px) {
      font-size: 2rem;
    }
  }
  img {
    box-shadow: 15px 15px 15px black;
    border-radius: 0.5rem;
    width: 50%;
    align-self: center;
    @media (max-width: 1025px) {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
`;

export const MovieStyle = styled.div`
  display: flex;
  margin-top: 1rem;
  @media (max-width: 1025px) {
    margin-top: 1.4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ErrorImg = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.3rem;

  @media (max-width: 1025px) {
    margin-top: 1.5rem;
    margin-left: 0;
  }
  p {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;

    span {
      background-color: #fff;
      border-radius: 50%;
      padding: 0.4rem;
      color: black;
      border: 3px solid #1fc3ff;
      margin-left: 0.5rem;
      margin-bottom: 0.3rem;

      min-width: 2.8rem;
      text-align: center;
    }
  }

  button {
    margin-top: 0.8rem;
    padding: 0.5rem;
    background-color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: background-color 0.3s;
    font-size: 1.1rem;
    & + button {
      margin-left: 0.8rem;
    }
    &:hover {
      background-color: #1fc3ff;
    }
  }
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1025px) {
    width: 100%;
  }

  h2 {
    font-size: 1.7rem;
    font-family: cursive, sans-serif;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    text-align: justify;
    align-self: flex-start;
    margin-bottom: 0.5rem;
    width: 90%;
    @media (max-width: 1025px) {
      width: 100%;
      text-align: start;
    }
  }

  h3 {
    font-size: 1.7rem;
    font-family: cursive, sans-serif;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1.5rem;
    font-family: cursive, sans-serif;
    margin-bottom: 0.5rem;
  }
`;
