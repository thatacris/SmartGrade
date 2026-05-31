import React from "react";
import { View, Text, StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
  },
  infoBox: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    marginBottom: 12,
  },
  infoNumber: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#d1d1d1",
    marginVertical: 8,
  },
  infoSubText: {
    fontSize: 14,
    color: "#555",
  },
});

export default function DeleteCard() {
  return (
    <View>

      <Text style={globalStyles.subtitle}>
        Exclusão de Atividade
      </Text>

      <Text style={globalStyles.title}>
        Atenção
      </Text>

      <Text style={globalStyles.description}>
        Esta atividade será permanentemente excluída e não poderá ser recuperada.
        Certifique-se de que deseja prosseguir com esta ação.
      </Text>

        <View style={globalStyles.infoBox}>
  <Text style={globalStyles.infoNumber}>4</Text>

  <Text style={globalStyles.infoText}>
    Rubricas vinculadas
  </Text>

  <View style={globalStyles.divider} />

  <Text style={globalStyles.infoSubText}>
    Serão excluídas permanentemente
  </Text>
</View>

<View style={globalStyles.infoBox}>
  <Text style={globalStyles.infoNumber}>2</Text>

  <Text style={globalStyles.infoText}>
    Alunos vinculados
  </Text>

  <View style={globalStyles.divider} />

  <Text style={globalStyles.infoSubText}>
    Terão os dados desta atividade removidos
  </Text>
</View>
    </View>

  );
}