import React from 'react';
import {View} from "react-native";
import {
    Container, EstContainer, IconLeft,
    LeftContainer,
    MiddleContainer,
    RightContainer, SubTitleType, TagPrice,
    TitleType, UserIcon
} from "../../styles/component/UberTypeRow.Styles";


const UberTypeRow = (props) => {
    const {type} = props
    const imagePath = () => {
        if (type.type === 'UberX'){
            return require(`../../../assets/images/UberX.jpeg`)
        }else if(type.type === 'UberXL'){
            return require(`../../../assets/images/UberXL.jpeg`)
        }else{
            return require(`../../../assets/images/Comfort.jpeg`)
        }
    }
    return (
        <Container>
            <LeftContainer>
                <IconLeft
                    source={imagePath()}
                />
            </LeftContainer>
            <MiddleContainer>
                <TitleType>
                    {type.type} <UserIcon name={"person"} size={13} color={"black"}/>3
                </TitleType>
                <SubTitleType>
                    8.30PM dropoff
                </SubTitleType>
            </MiddleContainer>
            <RightContainer>
                <EstContainer>
                    <TagPrice name="pricetag" size={14} color="green" />
                    <TitleType>
                        est. {type.price}$
                    </TitleType>
                </EstContainer>
                <SubTitleType>
                    20-25
                </SubTitleType>
            </RightContainer>
        </Container>
    );
};

export default UberTypeRow;
