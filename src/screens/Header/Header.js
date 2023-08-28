import React from 'react'
import { View } from 'react-native';
import styled from "styled-components/native";

const StyledView = styled.View`
  background-color: #0c70f2;
  width: 428px;
  padding: 25.5px;
  flex-direction: row;
  gap: 20px;
  padding-left: 18px;
`;

const StyledText = styled.Text`
  color: #f5f5f5;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  font-family: Poppins_600SemiBold;
`;

const StyledText2 = styled.Text`
  color: #f5f5f5;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  font-family: Poppins_800ExtraBold;
`;

const Header = () => {
    return (
        <View>
          <StyledView>
            <StyledText>Organização</StyledText>
            <StyledText2>Transações</StyledText2>
          </StyledView>
        </View>
      );
}

export default Header