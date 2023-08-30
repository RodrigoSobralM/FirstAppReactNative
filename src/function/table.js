import React from "react";
import { View, StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const table = () => {
  const tableData = [
    ["Transação", "Valor", "Data"],
    ["Alice", 25, "São Paulo"],
    ["Bob", 30, "Rio de Janeiro"],
    ["Carol", 22, "Belo Horizonte"],
  ];

  return (
    <View style={styles.container}>
      <Table>
        <Row data={tableData[0]} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData.slice(1)} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16},
  head: {  borderBottomWidth: 4, borderBottomColor: "#D9D9D9" },
  text: {
    margin: 6,
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
  },
});

export default table;
