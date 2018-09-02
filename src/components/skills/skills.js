import React from 'react';
import Background from '../background/background';
import CenterBox from '../centerbox/centerbox';
import Box from '../box/box';
import Title from '../title/title';
import SkillCards from './item/item';
import BackgroundSkills from '../../images/background-skills.svg';

const Skills = () => (
    <Background src={BackgroundSkills}>
        <CenterBox>
            <Box>
            <Title tag="h2" size="large">I specialize in...</Title>
            </Box>
            <SkillCards/>
        </CenterBox>
    </Background>
);

export default Skills;