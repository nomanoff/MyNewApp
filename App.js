import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello React Native.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default App;
