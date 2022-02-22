import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Secret.styles';

interface SecretProps {
  onButtonPress: (value: string) => void;
}

function Secret({ onButtonPress }: SecretProps) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.box} onPress={() => onButtonPress('7')}>
        <Text style={styles.number}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => onButtonPress('3')}>
        <Text style={styles.number}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => onButtonPress('0')}>
        <Text style={styles.number}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => onButtonPress('1')}>
        <Text style={styles.number}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => onButtonPress('5')}>
        <Text style={styles.number}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => onButtonPress('9')}>
        <Text style={styles.number}>9</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Secret;
