import React from 'react';
import {Button, View} from "react-native";
import UberTypeRow from "../UberTypeRow/UberTypeRow.component";
import types from "./../../../assets/data/Types.Car.js";
const UberType = () => {
    const Confirm = ()=>{
        console.log('confirm')
    }
    return (
        <View>
            {types.map((type, i) => <UberTypeRow key={i} type={type}/>)}
            <View style={{
                margin:25
            }}>
                <Button
                    onPress={Confirm}
                    title="Confirm Uber"
                    color="#000a12"
                    accessibilityLabel="Confirm your uber driver"
                />
            </View>
        </View>
    );
};

export default UberType;
