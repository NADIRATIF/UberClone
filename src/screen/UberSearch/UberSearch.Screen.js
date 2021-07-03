import React from 'react';
import UberType from "../../component/UberType/UberType.Component";
import {Container} from "../../styles/screen/UberSearchSreeen.style";
import RouteMap from "../../component/RouteMap/RouteMap.component";

const UberSearch = () => {
    return (
        <Container>
            <RouteMap/>
            <UberType/>
        </Container>
    );
};

export default UberSearch;
