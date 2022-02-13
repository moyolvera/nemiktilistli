import * as React from 'react';
import { View, StyleSheet } from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    width: '100%'
  },
  content: {
    flex: 1,
    backgroundColor: '#f1ffdd',
    alignSelf: 'center',
    maxWidth: 800,
    minWidth: 500
  }
});

function Container({ children }: ContainerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

export default Container;
