import React from 'react';
import { StatusBar } from 'expo-status-bar';
import DestinationScreen from "./src/screen/DestinationSearch/Destination.Screen";
import {SafeAreaView} from "react-native";


export default function App() {
  return (
    <>
        <SafeAreaView>
            <DestinationScreen/>
        </SafeAreaView>
        <StatusBar style="auto" />
    </>
  );
}
