import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';


export default function StatusScreen() {
  return (
    <View style={styles.container}>
      <Text>Coming Soon</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
