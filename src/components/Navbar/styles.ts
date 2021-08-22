import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #000000;
  width: 100%;
  font-weight: bold;

  a {
    padding: 1rem 0;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size: 2.5rem;
    align-items: flex-end;
    font-family: Cursive, sans-serif;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    @media (max-width: 320px) {
      font-size: 1.6rem;
    }
  }
`;

export const Img = styled.img`
  width: 3.2rem;
  margin-left: 1rem;
  align-self: center;
  @media (max-width: 768px) {
    width: 3rem;
  }
`;

export const Hamburguer = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-top: 1.3rem;

  span {
    height: 2px;
    width: 25px;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 4px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export interface MenuProps {
  isOpen: boolean;
}

export const Menu = styled.div<MenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  a {
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: bold;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: #474747;
    }
  }
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`;
