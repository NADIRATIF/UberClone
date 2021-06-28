import React, {useEffect, useState} from 'react';
import {Container, textInput, container} from "../../styles/screen/DestinationScreen.style";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const GOOGLE_PLACES_API_KEY = 'AIzaSyDScZ3EPKYuCveMD2bKUvP78XVjwhDmxuc';

const DestinationScreen = () => {
    const [from, setFrom] = useState(null);
    const [where, setWhere] = useState(null);

    useEffect(() => {
        if (from && where){
            console.log('redirect to next screen result')
        }
    }, [from, where]);


    return (
        <Container>
                <GooglePlacesAutocomplete
                    placeholder="From"
                    autoFocus={true}
                    query={{
                        key: GOOGLE_PLACES_API_KEY,
                        language: 'en',
                        components: 'country:us'
                    }}
                    onPress={(data, details = null) => {
                        setFrom({data, details});
                    }}
                    fetchDetails
                    onFail={(error) => console.error(error)}
                    enablePoweredByContainer = {false}
                    styles={{
                        container,
                        textInput,
                    }}
                />
                <GooglePlacesAutocomplete
                    placeholder="Where to"
                    query={{
                        key: GOOGLE_PLACES_API_KEY,
                        language: 'en',
                        components: 'country:us'
                    }}
                    onPress={(data, details = null) => {
                        setWhere({data, details});
                    }}
                    fetchDetails
                    onFail={(error) => console.error(error)}
                    enablePoweredByContainer = {false}
                    styles={{
                        container,
                        textInput,
                    }}
                />
        </Container>
    );
}

export default DestinationScreen;