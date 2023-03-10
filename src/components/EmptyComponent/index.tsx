import React from "react";
import { View, Text, Image } from "react-native";
import Clipboard from "../../../assets/Clipboard.png";
import { styles } from "./styles";

export function EmptyComponent() {
  return (
    <View style={styles.container}>
      <Image source={Clipboard} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.boldText}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.emptyText}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
