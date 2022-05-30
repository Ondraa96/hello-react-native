import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Sandbox from './components/Sandbox';
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
    if (text.length > 3) {
      setTodos((prevState) => [{ text, id: Math.random().toString() }, ...prevState]);
    } else {
      Alert.alert('OOPS!', 'Todos must have at least 3 chars.', [
        { text: 'Understood' }
      ])
    }
  }

  return (
    //<Sandbox />
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    paddingTop: 20,
    flex: 1,
  }
});
