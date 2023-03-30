import React, { useState } from "react";
import { View, Image } from "react-native";
import { TodoForm } from "../../components/TodoForm";
import { TodoList } from "../../components/TodoList";
import Logo from "../../../assets/logo.png";

import { styles } from "./styles";
import { TodoCounter } from "../../components/TodoCounter";
import { EmptyComponent } from "../../components/EmptyComponent";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Aprender React Native", completed: false },
  ]);

  function addTodo(todo: Todo) {
    setTodos([...todos, todo]);
  }

  function removeTodo(todo: Todo) {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  function completeTodo(todo: Todo) {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <TodoForm addTodo={addTodo} />
      <TodoCounter todos={todos} />
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ) : (
        <EmptyComponent />
      )}
    </View>
  );
}
