import styled from "styled-components";
import {Text, View, Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export const Container = styled(View)`
flex-direction: row;
align-items:center;
padding: 0 18px
`;
export const LeftContainer = styled(View)`
`;
export const IconLeft = styled(Image)`
height: 70px;
width:80px;
resize-mode:contain;
`;
export const MiddleContainer = styled(View)`
flex:1;
flex-grow:1;
padding-left: 10px;
`;
export const TitleType = styled(Text)`
font-size: 16px;
font-weight:700;
margin: 0 0 4px;
`;
export const SubTitleType = styled(Text)`
font-size: 14px;
font-weight:500;
color: #babdbe;
`;
export const UserIcon = styled(Ionicons)`
margin: 13px;
`;
export const RightContainer = styled(View)`
flex-direction:column;
align-items: flex-end;
`;
export const EstContainer = styled(View)`
flex-direction: row;
align-items: center;
`;
export const TagPrice = styled(Ionicons)`
margin:5px;
`;