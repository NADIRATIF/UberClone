import React from "react";
import styled from "styled-components";
import {View, Text} from "react-native";

export const InputBox = styled(View)`
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #e6e6e6;
margin: 10px;
padding: 10px;
border-radius: 5px;
`;

export const LabelText = styled(Text)`
font-size: 18px;
font-weight: 700;
color: #404040;
`;

export const Timer = styled(View)`
flex-direction:row;
justify-content: space-between;
align-items: center;
background-color: floralwhite;
padding: 10px;
border-radius: 100px;
`;

export const TimerLabel = styled(Text)`
color: #404040;
font-size: 16px;
font-weight: 700;
text-transform: capitalize;
margin: 0 5px;
`;

export const Row = styled(View)`
flex-direction: row;
align-items: center;
margin: 10px;
padding-bottom: 10px;
border-bottom-width:1px;
border-color:#ddd;
`;

export const Avatar = styled(View)`
background-color: #8c8c8c;
padding: 10px
border-radius: 50px;
`;

export const LabelDestination = styled(Text)`
font-size: 16px;
font-weight: 700;
color: #404040;
margin-left: 10px;
`;