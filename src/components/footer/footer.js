import React from 'react';

import { Container } from '../background/background.css';
import BackgroundBottom from '../../images/backgroundbottom.png';
import { Phone, CenterBox, Contact, Email, Button, RocketIcon, BitcoinIcon, ReactIcon, GithubIcon, InstagramIcon, YoutubeIcon, TwitterIcon, LinkedinIcon, MediumIcon, FacebookIcon, PrimaryIcons, SocialIcons, PrimaryContainer } from './footer.css';
//import { Block } from '../../../node_modules/styled-icons/material';
import styled from '../../../node_modules/styled-components';


const Background = styled(Container)`
height: 36rem;
`;

const Footer = () => (
    <div>
    <CenterBox>
            <Contact>CONTACT ME</Contact>
            <Email tag="span" size="large">hello@philippzach.com</Email>
            <a href="mailto:hello@philippzach.com?subject=Ready for something big?&body=Hi Philipp,">
            <Button>SAY HI!</Button>
            </a>
        </CenterBox>
    <Background src={BackgroundBottom}>
        <CenterBox>
        <PrimaryContainer>
            <PrimaryIcons>
                <RocketIcon size="30" title="Growth"/>
                <ReactIcon size="30" title="React" />
                <BitcoinIcon size="30" title="Bitcoin" />
                <GithubIcon size="30" title="Github" />
            </PrimaryIcons>
            </PrimaryContainer>
            <SocialIcons>
                <a href="https://instagram.com/philipp.zach">
                <InstagramIcon size="48" title="Instagram" />
                </a>
                <a href="https://facebook.com/philipp.zach">
                <FacebookIcon size="38" title="Facebook" />
                </a>
                <a href="https://youtube.com/Hoferino">
                <YoutubeIcon size="48" title="Youtube" />
                </a>
                <a href="https://twitter.com/waimeazach">
                <TwitterIcon size="48" title="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/philipp-zach-078059120/">
                <LinkedinIcon size="48" title="Linkedin" />
                </a>
                <a href="https://medium.com/@filippzach">
                <MediumIcon size="48" title="Medium" />
                </a>
                
            </SocialIcons>
            <Phone>+43 (664) 129 6232</Phone>
            <Contact>Copyright © Philipp Zach. All rights reserved</Contact>
        </CenterBox>
    </Background>
    </div>
);

export default Footer;