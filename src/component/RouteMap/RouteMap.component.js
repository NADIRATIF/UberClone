import React from 'react';
import MapView, {Marker} from "react-native-maps";
import {Dimensions} from "react-native";
import MapViewDirections from "react-native-maps-directions";
import {MarkMap} from "../../styles/component/HomeMap.style";

const RouteMap = () => {
    const origin = {latitude: 28.450627, longitude: -16.263045};
    const destination = {latitude: 28.459556, longitude: -16.277954};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyDScZ3EPKYuCveMD2bKUvP78XVjwhDmxuc';
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
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor="hotpink"
                />
                <Marker
                    title={'origin'}
                    coordinate={origin}
                    pinColor={'green'}
                />
                <Marker
                    title={'destination'}
                    coordinate={destination}
                    pinColor={'black'}
                />
            </MapView>
        </>
    );
};

export default RouteMap;
