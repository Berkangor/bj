import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { Audio } from "expo-av"; // expo-audio değil!
import scenarios from "./assets/data/blackjack_strategy_full_with_random_suits.json";
import Card from "./components/Card";
import styles from "./App.styles";

export default function App() {
  const [index, setIndex] = useState(Math.floor(Math.random() * scenarios.length));
  const [selected, setSelected] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(0));

  const current = scenarios[index];
  const options = ["Hit", "Stand", "Double", "Split"];

  const parseCards = (cards) => {
    return cards.map((card, i) => (
      <Card key={i} code={`${card.value}${card.suit}`} />
    ));
  };

  const playSound = async (correct) => {
    const soundObject = new Audio.Sound();
    try {
      const soundFile = correct
        ? require("./assets/sounds/correct.mp3")
        : require("./assets/sounds/incorrect.mp3");
      await soundObject.loadAsync(soundFile);
      await soundObject.playAsync();
    } catch (error) {
      console.log("Error loading sound", error);
    }
  };

  const handleAnswer = (option) => {
    setSelected(option);
    playSound(option === current.correct_action);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const nextQuestion = () => {
    setSelected(null);
    fadeAnim.setValue(0);
    const newIndex = Math.floor(Math.random() * scenarios.length);
    setIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blackjack Quiz</Text>

      <Text style={styles.cardLabel}>Dealer's Card:</Text>
      <View style={styles.cardRow}>{parseCards(current.dealer_card)}</View>

      <Text style={styles.cardLabel}>Your Hand:</Text>
      <View style={styles.cardRow}>{parseCards(current.player_hand)}</View>

      <View style={styles.buttonGroup}>
        {options.map((opt) => (
          <TouchableOpacity
            key={opt}
            style={[styles.choiceButton, selected === opt && styles.selectedButton]}
            onPress={() => handleAnswer(opt)}
          >
            <Text style={styles.buttonText}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selected && (
        <Animated.View style={[styles.explanationBox, { opacity: fadeAnim }]}>
          <Text style={styles.result}>
            {selected === current.correct_action ? "✅ Correct!" : "❌ Incorrect"}
          </Text>
          <Text>{current.explanation}</Text>
          <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
}
