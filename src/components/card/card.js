import React from 'react';
import Title from '../title/title';
import CenterBox from '../centerbox/centerbox';
import styled from 'styled-components';
//import Box from '../box/box';
import Items from './item/item';

const Right = styled.div`
text-align: right;
`;

const Margin = styled.div`
    margin-top: 120px;
    margin-bottom: 100px;
`;

const CardSection = () => (
    <Margin>
    <CenterBox>
        <Right>
            <Title tag="h2" size="large">& am enthusiastic in what I do</Title>
        </Right>
    </CenterBox>
   <Items />
    </Margin>
);

export default CardSection;