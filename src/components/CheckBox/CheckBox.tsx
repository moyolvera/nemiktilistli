import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@components';
import styles from './CheckBox.styles';

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onCheck: () => void;
}

function CheckBox({ label, checked, onCheck }: CheckBoxProps) {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onCheck}>
      <View style={styles.checkContainer}>
        <View style={styles.checkBorder}>
          {checked ? <View style={styles.check} /> : null}
        </View>
      </View>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CheckBox;
