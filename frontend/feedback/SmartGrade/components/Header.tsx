import React from "react";
import { View, Text } from "react-native";
import { Menu } from "lucide-react-native";
import { styles } from "../style/styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <Menu color="#111827" size={22} />

      <Text style={styles.logo}>
        Smart<Text style={styles.logoBlue}>Grade</Text>
      </Text>

      <View style={styles.avatar}>
        <Text>👤</Text>
      </View>
    </View>
  );
}