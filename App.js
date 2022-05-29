import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'koupit mrkev', id: 1 },
    { text: 'koupit pomerance', id: 2 },
    { text: 'koupit mleko', id: 3 },
  ]);

  const pressHandler = (id) => {
    setTodos((prevState) => prevState.filter(todo => todo.id !== id));
  }

  const submitHandler = (text) => {
    setTodos((prevState) => [...prevState, { text, id: Math.random().toString() }]);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  content: {
    padding: 40
  },
  list: {
    paddingTop: 20
  }
});
