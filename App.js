import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from './components/Header';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'koupit mrkev', id: 1 },
    { text: 'koupit pomerance', id: 2 },
    { text: 'koupit mleko', id: 3 },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
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
