import styled from "styled-components";
import {Text, View} from "react-native";

export const Container = styled(View)`
background: rgb(23,121,217);
padding: 10px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`;

export const Title = styled(Text)`
color: white;
font-size: 20px;
font-weight: bold;
margin-bottom:10px;
`;

export const Paragraph = styled(Text)`
color: lightgray;
font-size: 14px;
`;

export const ButtonOutline = styled(Text)`
flex-direction: row;
color: white;
font-size: 14px;
font-weight: bold;
justify-content: center;
align-items: center;
align-content: center;
`;