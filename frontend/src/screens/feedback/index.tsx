import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import Header from "../components/Header";
import ScoreCard from "../components/ScoreCard";
import StrengthCard from "../components/StrengthCard";
import BottomNav from "../components/BottomNav";

import { styles } from "../style/styles";

export default function FeedbackScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <ScoreCard />
        <StrengthCard />
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
}