import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//components
import NewNote from './components/NewNote'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <NewNote/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
