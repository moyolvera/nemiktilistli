import * as React from 'react';
import { View } from 'react-native';
import styles from './Container.styles';

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

export default Container;
