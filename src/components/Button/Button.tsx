import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Text from '../Text/Text';
import styles from './Button.styles';

interface ButtonProps {
  onPress?: () => void;
  label: string;
}

function Button({ onPress, label }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.buttonShadow, styles.button]}
      onPress={onPress}>
      <Feather name="send" size={12} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

export default Button;
