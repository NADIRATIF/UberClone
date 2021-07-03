import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView} from "react-native";
import UberSearch from "./src/screen/UberSearch/UberSearch.Screen";
import HomeScreen from "./src/screen/Home/Home.Screen";
import DestinationScreen from "./src/screen/DestinationSearch/Destination.Screen";


export default function App() {
  return (
    <>
        <SafeAreaView>
            <UberSearch/>
        </SafeAreaView>
        <StatusBar style="auto" />
    </>
  );
}
