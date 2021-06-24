import React from 'react';
import {View} from "react-native";
import {AntDesign, Entypo} from "@expo/vector-icons";
import {
    Avatar,
    InputBox,
    LabelDestination,
    LabelText,
    Row,
    Timer,
    TimerLabel
} from "../../styles/component/HomeSearch.style";

const HomeSearch = () => {
    return (
        <View>
            <InputBox>
                <LabelText>Where to?</LabelText>
                <Timer>
                    <AntDesign name="clockcircle" size={14} color="#404040" />
                    <TimerLabel>now</TimerLabel>
                    <AntDesign name="down" size={14} color="#404040" />
                </Timer>
            </InputBox>
            <Row>
                <Avatar>
                    <AntDesign name="clockcircle" size={18} color="#ffffff" />
                </Avatar>
                <LabelDestination>Some title here</LabelDestination>
            </Row>
            <Row>
                <Avatar style={{backgroundColor: 'rgb(23,121,217)'}}>
                    <Entypo name="home" size={18} color="#ffffff"/>
                </Avatar>
                <LabelDestination>Some title here</LabelDestination>
            </Row>
        </View>
    );
};

export default HomeSearch;