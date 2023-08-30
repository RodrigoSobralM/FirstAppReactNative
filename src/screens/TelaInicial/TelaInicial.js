import React from "react";
import styled from "styled-components/native";
import TableA from "../../function/table";

const StyledViewGeral = styled.View`
  background-color: #2d2d2d;
  align-items: center;
`;

const CenteredTable = styled.View`
  flex-direction: row
`;

const DivPai = styled.View`
  flex-direction: row;
  gap: 23px;
  margin-top: 103px;
`;
const DivFilho = styled.View`
  width: 151px;
  height: 100px;
  border-radius: 10px;
  background: #f5f5f5;
  gap: 11px;
`;

const H1 = styled.Text`
  color: #0c70f2;
  font-family: Poppins_700Bold;
  font-size: 15px;
  font-style: normal;
  text-align: center;
  padding-top: 13px;
`;

const P = styled.Text`
  color: #000;
  font-family: Poppins_600SemiBold;
  font-size: 15px;
  font-style: normal;
  text-align: center;
`;

const DivBtn = styled.View`
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


const TelaInicial = ({ navigation }) => {
  return (
    <StyledViewGeral style={{ flex: 1 }}>
      <DivPai>
        <DivFilho>
          <H1>Entradas</H1>
          <P>R$ 2.000,00</P>
        </DivFilho>
        <DivFilho>
          <H1>Saidas</H1>
          <P>R$ 50,00</P>
        </DivFilho>
      </DivPai>
      <CenteredTable>
        <TableA />
      </CenteredTable>
      <DivBtn>
        <Btn>
          <BtnText onPress={() => navigation.navigate("TelaTransacao")}>
            Adicionar transação
          </BtnText>
        </Btn>
      </DivBtn>
    </StyledViewGeral>
  );
};

export default TelaInicial;
