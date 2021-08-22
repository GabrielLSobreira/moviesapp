import styled from 'styled-components';

export const MovieFooter = styled.footer`
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #2d2b2b;
  width: 100%;
  font-weight: bold;
  color: #fff;

  p {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    @media (max-width: 288px) {
      font-size: 0.9rem;
    }
  }

  img {
    height: 0.7rem;
    align-self: center;
    margin-left: 0.4rem;
  }

  ul {
    display: flex;
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }

  li {
    padding: 0.1rem 0.5rem;
    &:hover {
      background-color: #474747;
    }
    svg {
      font-size: 1.8rem;
    }
  }
`;
