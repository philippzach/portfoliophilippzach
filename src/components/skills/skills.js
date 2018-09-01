import React from 'react';
import Background from '../background/background';
import CenterBox from '../centerbox/centerbox';
import Box from '../box/box';
import Title from '../title/title';
import SkillCards from './item/item';

const Skills = () => (
    <Background src="https://maurosicard.com/wp-content/uploads/2018/02/mauro-sicard-my-skills-bg-900.svg">
        <CenterBox>
            <Box>
            <Title tag="h2" size="large">I especialize in...</Title>
            </Box>
            <SkillCards/>
        </CenterBox>
    </Background>
);

export default Skills;