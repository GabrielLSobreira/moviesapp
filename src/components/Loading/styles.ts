import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75.2vh;
  background-color: #222222;
`;

export const LoadingStyle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 10px solid #f14d4d;
  border-right-color: transparent;
  animation: loading 1s infinite;
  padding: 5rem;
  margin-bottom: 5rem;

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
