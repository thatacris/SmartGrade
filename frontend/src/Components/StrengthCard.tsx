import React from "react";
import { View, Text } from "react-native";
import { ShieldCheck } from "lucide-react-native";
import { styles } from "../style/styles";

export default function StrengthCard() {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <ShieldCheck color="#2563eb" size={18} />
        <Text style={styles.cardTitle}> Pontos Fortes</Text>
      </View>

      <Text style={styles.text}>• Tese clara e objetiva</Text>
      <Text style={styles.text}>• Bibliografia correta</Text>
    </View>
  );
}