import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 50px;
`;

const InputName = styled.input`
  background-color: #fff;
  border: 1px solid #ddd;
  box-sizing: border-box;
  font-size: 0.8em;
  line-height: normal;
  margin: 0 0 0.5em;
  padding: 0.9em;
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  vertical-align: baseline;
  width: 100%;

  &:focus {
    box-shadow: pink 0px 0px 5px 1px;
    border-color: pink;
    outline: none;
  }
`;

const InputText = styled.textarea`
  background-color: #fff;
  border: 1px solid #ddd;
  box-sizing: border-box;
  font-size: 1em;
  height: 10.3em;
  margin: 0 0 0.5em;
  overflow: auto;
  padding: 0.9em;
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  vertical-align: top;
  width: 100%;
  &:focus {
    box-shadow: pink 0px 0px 5px 1px;
    border-color: pink;
    outline: none;
  }
`;

const Send = styled.input`
  text-transform: uppercase;
  float: right;
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
`;

const Contact = () => (
  <Container>
    <form action="https://formspree.io/filippzach@gmail.com" method="POST">
      <InputName type="text" name="name" placeholder="Your Name" />
      <InputName type="email" name="_replyto" placeholder="Email" />
      <InputText type="text" name="content" placeholder="How can I help you?" />
      <Send type="submit" value="Send" />
    </form>
  </Container>
);

export default Contact;
