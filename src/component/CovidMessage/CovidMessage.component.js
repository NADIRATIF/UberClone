import React from 'react';
import {AntDesign} from "@expo/vector-icons";
import {Container, Title, Paragraph, ButtonOutline} from "../../styles/component/CovidMessage.style";


const CovidMessage = () => {
    return (
        <Container>
            <Title>travel if necessary</Title>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci dignissimos distinctio dolore dolorum eveniet nostrum
                nulla sit suscipit veritatis voluptates? Aspernatur consectetur culpa,
                itaque laudantium nostrum optio quasi repellat sint?
            </Paragraph>
            <ButtonOutline>
                learn more
                <AntDesign name="swapright" size={24} color="white" />
            </ButtonOutline>
        </Container>
    );
}

export default CovidMessage;