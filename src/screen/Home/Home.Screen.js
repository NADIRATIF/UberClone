import React from 'react';
import {Text, View} from "react-native";
import HomeMap from "../../component/HomeMap/HomeMap.component";
import CovidMessage from "../../component/CovidMessage/CovidMessage.component";
import HomeSearch from "../../component/HomeSearch.component/HomeSearch.component";

const HomeScreen = () => {
    return (
        <View>
            <HomeMap/>
            <CovidMessage/>
            <HomeSearch/>
        </View>
    );
}

export default HomeScreen;