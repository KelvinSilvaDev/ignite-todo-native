import React from "react";
import { View } from "react-native";
import { TodoItem } from "../TodoItem";

import { styles } from "./styles";

export function TodoList({ todos, removeTodo, completeTodo }: any) {
  return (
    <View style={styles.container}>
      {todos.map((todo: { id: React.Key | null | undefined }) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </View>
  );
}
