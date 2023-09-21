import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.maincontainer}>
      <Text style={styles.maintext}>React Native App</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    padding: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  maintext: {
    borderRadius: 10,
    fontSize: 16,
  },
});

export default App;
