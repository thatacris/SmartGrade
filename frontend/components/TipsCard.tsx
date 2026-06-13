import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { globalStyles } from "styles/feedback.styles";

export default function TipsCard() {
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.statsTitle}>
        DICAS PARA MELHORAR
      </Text>
    </View>
  );
}
