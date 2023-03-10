import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function TodoCounter({ todos }: any) {
  function completedTodosCount() {
    return todos.filter((todo: { completed: any }) => todo.completed).length;
  }
  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <Text style={styles.counterText}>
          Criadas <Text style={styles.count}>{todos.length}</Text>
        </Text>
      </View>
      <View style={styles.counter}>
        <Text style={styles.counterDone}>
          Concluídas <Text style={styles.count}>{completedTodosCount()}</Text>
        </Text>
      </View>
    </View>
  );
}
