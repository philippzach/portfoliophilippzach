import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      -webkit-appearance: none;
    background-color: #fff;
    border-radius: 5px;
    border: none;
    color: #757575;
    border: 1px solid #ddd;
    cursor: pointer;
    font-family: inherit;
    font-size: 1.3rem;
    font-weight: 500;
    padding: 1rem 2rem;
    text-transform: uppercase;
    -webkit-transition: 0.2s background-color ease;
    transition: 0.2s background-color ease;

    &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }
    }
  }
`;
