import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import styled from "styled-components/native";
import arrowBack from "../../assets/material-symbols_arrow-back.png";
import CheckboxButton from "../../function/checkbox";

const DivGeral = styled.View`
  flex: 1;
  background-color: #2d2d2d;
  align-items: center;
`;

const DivBtnBack = styled.View`
  width: 100%;
  margin-left: 20px;
  margin-top: 24px;
`;
const BtnBack = styled.TouchableOpacity``;

const Input = styled.TextInput`
  width: 264px;
  height: 34px;
  padding: 11px 13px;
`;

const H1 = styled.Text`
  color: white;
  font-size: 15px;
  font-style: normal;
  font-family: Poppins_500Medium;
  margin-bottom: 5px;
`;

const DivPaiInput = styled.View`
  margin-top: 132px;
  gap: 8px;
`;

const DivCheckbox = styled.View`
    gap: 8px;
`;

const DivFilhoInput = styled.View``;

const DivBtn = styled.View`
  margin-top: 161px;
`;

const Btn = styled.TouchableOpacity`
  width: 264px;
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

const TelaTransacao = ({ navigation }) => {
  const [entradaMarcada, setEntradaMarcada] = useState(false);
  const [saidaMarcada, setSaidaMarcada] = useState(false);

  const handleEntradaPress = () => {
    setEntradaMarcada(true);
    setSaidaMarcada(false);
  };

  const handleSaidaPress = () => {
    setEntradaMarcada(false);
    setSaidaMarcada(true);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      transacao: "",
      valor: "",
      data: "",
    },
  });
  const onSubmit = (data) => {
    if (entradaMarcada) {
      data.tipo = "Entrada";
    } else if (saidaMarcada) {
      data.tipo = "Saída";
    } else {
      alert("Selecione o tipo da transação");
      return;
    }
    navigation.navigate("TelaInicial");
    console.log(data);
  };

  return (
    <DivGeral>
      <DivBtnBack>
        <BtnBack onPress={() => navigation.navigate("TelaInicial")}>
          <Image source={arrowBack} />
        </BtnBack>
      </DivBtnBack>
      <DivPaiInput>
        <DivFilhoInput>
          <H1>Título</H1>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="transacao"
            rules={{ required: true }}
          />
        </DivFilhoInput>
        <DivFilhoInput>
          <H1>Valor</H1>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="valor"
            rules={{ required: true }}
          />
        </DivFilhoInput>
        <DivCheckbox>
          <CheckboxButton
            label="Entrada"
            isChecked={entradaMarcada}
            onPress={handleEntradaPress}
          />
          <CheckboxButton
            label="Saída"
            isChecked={saidaMarcada}
            onPress={handleSaidaPress}
          />
        </DivCheckbox>
        <DivFilhoInput>
          <H1>Data</H1>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="data"
            rules={{ required: true }}
          />
        </DivFilhoInput>
      </DivPaiInput>
      <DivBtn>
        <Btn>
          <BtnText onPress={handleSubmit(onSubmit)}>Criar transação</BtnText>
        </Btn>
      </DivBtn>
    </DivGeral>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "#ec5990",
    borderRadius: 4,
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "#0e101c",
  },
  input: {
    backgroundColor: "white",

    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default TelaTransacao;
