import React from "react";
import { View, Text } from "react-native";
import { LayoutGrid, FileText, User } from "lucide-react-native";
import { styles } from "../screens/Feedback/style";

export default function BottomNav() {
  return (
    <View style={styles.bottomNav}>
      <View style={styles.navItem}>
        <LayoutGrid size={18} color="#6b7280" />
        <Text style={styles.navText}>Painel</Text>
      </View>

      <View style={styles.navItem}>
        <FileText size={18} color="#2563eb" />
        <Text style={styles.activeNav}>Trabalhos</Text>
      </View>

      <View style={styles.navItem}>
        <User size={18} color="#6b7280" />
        <Text style={styles.navText}>Perfil</Text>
      </View>
    </View>
  );
}
