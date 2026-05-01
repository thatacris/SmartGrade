import React from "react";
import { View, Text } from "react-native";
import { styles } from "../style/styles";

export default function ScoreCard() {
  return (
    <View style={styles.scoreSection}>
      <View style={styles.scoreCircle}>
        <Text style={styles.scoreNumber}>8.5</Text>
        <Text style={styles.scoreText}>NOTA FINAL</Text>
      </View>

      <Text style={styles.mainTitle}>Excelente Progresso!</Text>
    </View>
  );
}
