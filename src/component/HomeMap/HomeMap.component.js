import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Dimensions} from "react-native";
import {MarkMap} from "../../styles/component/HomeMap.style";
import cars from "../../../assets/data/Position.Car";


function HomeMap() {
    const imagePath = (type) => {
        if (type === 'UberX'){
            return require(`../../../assets/images/top-UberX.png`)
        }else if(type === 'UberXL'){
            return require(`../../../assets/images/top-UberXL.png`)
        }else{
            return require(`../../../assets/images/top-Comfort.png`)
        }
    }
    return (
        <>
            <MapView
                style={{
                    height: Dimensions.get('window').height - 400
                }}
                initialRegion={{
                    latitude: 28.450627,
                    longitude: -16.263045,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {cars.map((car)=>(
                    <Marker
                        key={car.id}
                        coordinate={{ latitude : car.latitude , longitude : car.longitude }}
                    >
                        <MarkMap source={imagePath(car.type)}/>
                    </Marker>
                ))}
            </MapView>
        </>
    );
}

export default HomeMap;