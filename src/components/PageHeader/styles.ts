import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #7d4715;
  height: 15.3rem;
  padding-top: 4.3rem;

  h1 {
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 3rem;
    font-family: Roboto;
  }

  span {
    font: 2rem Roboto;
    font-weight: normal;
    line-height: 2.3rem;
    color: #fff;
    opacity: 0.8;
    margin-top: 2rem;
  }

  a {
    position: absolute;
    left: 0;
    margin-left: 2.6rem;
    color: #fff;
  }
`;
