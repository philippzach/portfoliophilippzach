import styled from 'styled-components';
import { Rocket } from 'styled-icons/fa-solid/Rocket';
import { Bitcoin } from 'styled-icons/fa-brands/Bitcoin';
import { ReactLogo } from 'styled-icons/fa-brands/ReactLogo';
import { Github } from 'styled-icons/fa-brands/Github';
import { FacebookF } from 'styled-icons/fa-brands/FacebookF';
import { MediumM } from 'styled-icons/fa-brands/MediumM';
import { Youtube } from 'styled-icons/fa-brands/Youtube';
import { Instagram } from 'styled-icons/fa-brands/Instagram';
import { Twitter } from 'styled-icons/fa-brands/Twitter';
import { LinkedinIn } from 'styled-icons/fa-brands/LinkedinIn';
import { Text } from '../title/title.css';
import { Container } from '../centerbox/centerbox.css';

export const CenterBox = styled(Container)`
text-align: center;
`;

export const Contact = styled.h3`
font-weight: 200;
font-size: 1em;
margin-top: 40px;
`;

export const Email = styled(Text)`
margin-top: 40px;
`;

export const Phone = styled(Text)`
font-weight: 700;
margin-top: 60px;
`;

export const Button = styled.button`
  /* Adapt the colours based on primary prop */
  margin-top: 40px;
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
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 40px;
@media (max-width: 500px) {
  justify-content: space-between;
}
`;

export const PrimaryIcons = styled.div`
display: flex;
justify-content: space-around;
margin-top: 40px;
`;

export const PrimaryContainer = styled.div`
    max-width: 30vw;
    margin: auto;
    @media (max-width: 550px) {
      max-width: 65vw;
    }
`;



export const RocketIcon = Rocket.extend`
color: lightgrey;
`;
export const BitcoinIcon = Bitcoin.extend`
color: lightgrey;
`;
export const ReactIcon = ReactLogo.extend`
color: lightgrey;
`;
export const GithubIcon = Github.extend`
color: lightgrey;
`;
export const FacebookIcon = FacebookF.extend`
color: black;
&:hover {
    filter: drop-shadow( 3px 3px 0px #3b5998);
    cursor: pointer;
  }
`;
export const MediumIcon = MediumM.extend`
color: black;
&:hover {
    filter: drop-shadow( 3px 3px 0px #00ab6c);
    cursor: pointer;
  }
  &:focus {
    filter: drop-shadow( 3px 3px 0px #00ab6c);
  }
`;
export const YoutubeIcon = Youtube.extend`
color: black;
&:hover {
    filter: drop-shadow( 3px 3px 0px #ff0000);
    cursor: pointer;
  }
`;
export const InstagramIcon = Instagram.extend`
color: black;
&:hover {
    filter: drop-shadow( 3px 3px 0px #e1306c);
    cursor: pointer;
  }
`;
export const TwitterIcon = Twitter.extend`
color: black;
&:hover {
    filter: drop-shadow( 3px 3px 0px #1da1f2);
    cursor: pointer;
  }
`;
export const LinkedinIcon = LinkedinIn.extend`
color: black;
&:hover {
    filter: drop-shadow( 3px 3px 0px #0077b5);
    cursor: pointer;
  }
`;