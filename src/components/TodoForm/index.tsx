import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { PlusCircle } from "phosphor-react-native";
import { styles } from "./styles";

export function TodoForm({ addTodo }: any) {
  const [newTodoText, setNewTodoText] = useState("");

  function handleNewTodo(e: string) {
    setNewTodoText(e);
  }

  function handleSubmit() {
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    };
    Keyboard.dismiss;
    if (newTodo.text.length <= 0) {
      Alert.alert("O conteúdo do ToDo está vazio");
      return null;
    }
    addTodo(newTodo);
    setNewTodoText("");
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={"#808080"}
        value={newTodoText}
        onChangeText={(text) => handleNewTodo(text)}
      />

      <TouchableWithoutFeedback accessible={false}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          onPressOut={Keyboard.dismiss}
        >
          <PlusCircle color="#fff" />
        </TouchableOpacity>
      </TouchableWithoutFeedback>
    </View>
  );
}
