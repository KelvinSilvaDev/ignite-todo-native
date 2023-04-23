import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Trash } from "phosphor-react-native";
import UncheckIcon from "../../../assets/uncheckedItem.png";
import CheckIcon from "../../../assets/check.png";

import { styles } from "./styles";

export function TodoItem({ todo, removeTodo, completeTodo }: any) {
  function handleRemoveTodo() {
    removeTodo(todo);
  }

  function handleDoneTodo() {
    completeTodo(todo);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.wrapp} onPress={handleDoneTodo}>
        {todo.completed ? (
          <>
            <Image source={CheckIcon} />
            <Text style={styles.completed}>{todo.text}</Text>
          </>
        ) : (
          <>
            <Image source={UncheckIcon} />
            <Text style={styles.TodoText}>{todo.text}</Text>
          </>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRemoveTodo}>
        <Trash color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
