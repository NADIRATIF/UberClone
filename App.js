import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from "./src/screen/Home/Home.Screen";


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
        <HomeScreen/>
    </>
  );
}
