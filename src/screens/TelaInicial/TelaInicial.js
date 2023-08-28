import React from "react";
import styled from "styled-components/native";
import { View, Button, Text } from "react-native";

const StyledViewGeral = styled.View`
  background-color: #2d2d2d;
  align-items: center;
`;

const ContainerPaiEntradasSaidas = styled.View`
  flex-direction: row;
  gap: 23px;
  margin-top: 103px;
`;
const ContainerFilhoEntradasSaidas = styled.View`
  width: 151px;
  height: 100px;
  border-radius: 10px;
  background: #f5f5f5;
  gap: 11px;
`;

const EntradasSidasTitle = styled.Text`
  color: #0c70f2;
  font-family: Poppins_700Bold;
  font-size: 15px;
  font-style: normal;
  text-align: center;
  padding-top: 13px;
`;

const EntradasSaidasValor = styled.Text`
  color: #000;
  font-family: Poppins_600SemiBold;
  font-size: 15px;
  font-style: normal;
  text-align: center;
`;

const DivBtn = styled.View`
  margin-top: 351px;
`;

const Btn = styled.TouchableOpacity`
  width: 284px;
  height: 37px;
  border-radius: 5px;
  background-color: #0c70f2;
`;

const BtnText = styled.Text`
  text-align: center;
  color: #fff;
  font-family: Raleway_600SemiBold;
  font-size: 20px;
  font-style: normal;
`;

const Table = styled.View`
`;

const Tr = styled.View`
  margin-top: 79px;
  flex-direction: row;
  justify-content: space-around;
`;

const Th = styled.Text`
  color: #fff;
  font-family: Poppins_500Medium;
  font-size: 15px;
  font-style: normal;
`;

const Th2 = styled.Text`
  color: #fff;
  font-family: Poppins_500Medium;
  font-size: 15px;
  font-style: normal;
  margin-left: 38px;
  margin-right: 59px;
`;

const TelaInicial = ({ navigation }) => {
  return (
    <StyledViewGeral style={{ flex: 1 }}>
      <ContainerPaiEntradasSaidas>
        <ContainerFilhoEntradasSaidas>
          <EntradasSidasTitle>Entradas</EntradasSidasTitle>
          <EntradasSaidasValor>R$ 2.000,00</EntradasSaidasValor>
        </ContainerFilhoEntradasSaidas>
        <ContainerFilhoEntradasSaidas>
          <EntradasSidasTitle>Saidas</EntradasSidasTitle>
          <EntradasSaidasValor>R$ 50,00</EntradasSaidasValor>
        </ContainerFilhoEntradasSaidas>
      </ContainerPaiEntradasSaidas>
      <Table>
        <Tr>
          <Th>Transação</Th>
          <Th2>Valor</Th2>
          <Th>Data</Th>
        </Tr>
      </Table>
      <DivBtn>
        <Btn>
          <BtnText>Adicionar transação</BtnText>
        </Btn>
      </DivBtn>
    </StyledViewGeral>
  );
};

export default TelaInicial;
