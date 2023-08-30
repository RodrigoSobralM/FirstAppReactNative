import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import checkMarcado from "../assets/ri_checkbox-circle-line.png";
import checkDesmarcado from "../assets/Vector.png";

function CheckboxButton({ label, isChecked, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: "row", gap: 8, fontFamily: "Poppins_500Medium" }}>
        <Image style={{width: 22, height: 22}} source={isChecked ? checkMarcado : checkDesmarcado} />
        <Text style={{fontFamily: "Poppins_500Medium", color: "#fff"}}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CheckboxButton;
