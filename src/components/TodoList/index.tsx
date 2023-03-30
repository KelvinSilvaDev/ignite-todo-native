import React from "react";
import { FlatList, View } from "react-native";
import { Todo } from "../../screens/Home";
import { TodoItem } from "../TodoItem";

import { styles } from "./styles";

type TodosProps = {
  todos: Todo[];
  removeTodo: (todo: Todo) => void;
  completeTodo: (todo: Todo) => void;
};

export function TodoList({ todos, removeTodo, completeTodo }: TodosProps) {
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TodoItem
              key={item.id}
              todo={item}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          )}
        />
      </View>
    </View>
  );
}
