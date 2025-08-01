import React from "react";
import { Image, View } from "react-native";
import cardImages from "../assets/cardImages";
import styles from "./Card.styles";

function parseCardCode(code) {
  if (!code || typeof code !== "string" || code.length < 2) {
    console.warn("Invalid card code passed to Card:", code);
    return { value: "null", suit: "null" };
  }

  const suitChar = code.slice(-1).toLowerCase();
  const valuePart = code.slice(0, -1).toLowerCase();

  const suitMap = {
    s: "spades",
    h: "hearts",
    d: "diamonds",
    c: "clubs",
  };

  const faceMap = {
    j: "j",
    q: "q",
    k: "k",
    a: "a",
  };

  const value = faceMap[valuePart] || valuePart;
  const suit = suitMap[suitChar];

  return { value, suit };
}

export default function Card({ code }) {
  const { value, suit } = parseCardCode(code);
  const filename = `${value}_${suit}`;
  const imageSource = cardImages[filename];

  if (!imageSource) {
    console.warn(`Missing image for card: ${filename}`);
    return <View style={styles.cardPlaceholder} />;
  }

  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.cardImage} resizeMode="contain" />
    </View>
  );
}
