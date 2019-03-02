import React from 'react';
import { Card, Image, OutsideCard, Wrapper, ImageWrapper, Paragraph, Row } from './item.css.js';
import Rocket from '../../../images/rocket.svg';
import Code from '../../../images/code.svg';
import Camera from '../../../images/video.svg';
import Data from '../../../images/data.svg';


const SkillCards = () => (
    <div>
    <Row>
        <OutsideCard>
            <Card>
                <Wrapper>
                    <ImageWrapper><Image alt="Rocket" src={Rocket}/></ImageWrapper>
                    <Paragraph>Growth Strategy</Paragraph>
                </Wrapper>
            </Card>
        </OutsideCard>
        <OutsideCard>
            <Card>
                <Wrapper>
                    <ImageWrapper><Image alt="Programming" src={Code}/></ImageWrapper>
                    <Paragraph>Front End Development</Paragraph>
                </Wrapper>
            </Card>
        </OutsideCard>
    </Row>
    <Row>
        <OutsideCard>
            <Card>
                <Wrapper>
                    <ImageWrapper><Image alt="Photography & Video" src={Camera}/></ImageWrapper>
                    <Paragraph>Content Production</Paragraph>
                </Wrapper>
            </Card>
        </OutsideCard>
        <OutsideCard>
            <Card>
                <Wrapper>
                    <ImageWrapper><Image alt="Technical Analysis Philipp Zach" src={Data}/></ImageWrapper>
                    <Paragraph>Technical Analysis</Paragraph>
                </Wrapper>
            </Card>
        </OutsideCard>
    </Row>    
    </div>
    );

export default SkillCards;