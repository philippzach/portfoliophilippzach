import React from 'react';
import Title from '../title/title';
import CenterBox from '../centerbox/centerbox';
import styled from 'styled-components';
//import Box from '../box/box';
import Items from './item/item';

const Right = styled.div`
text-align: right;
max-width: 900px;
`;

const Margin = styled.div`
    margin-top: 120px;
    margin-bottom: 100px;
`;

const CardSection = () => (
    <Margin>
    <CenterBox>
        <Right>
            <Title tag="h2" size="large">& am love what I do</Title>
        </Right>
    </CenterBox>
   <Items />
    </Margin>
);

export default CardSection;