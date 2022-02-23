import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './SwitchSelector.styles';

interface SwitchSelectorProps {
  options: string[];
  selected: number;
  onChangeIndex: (index: number) => void;
}

function SwitchSelector({
  options,
  selected,
  onChangeIndex
}: SwitchSelectorProps) {
  return (
    <View style={styles.wrapper}>
      {options.map((option, index) => (
        <TouchableOpacity
          onPress={() => onChangeIndex(index)}
          style={[styles.option, index === selected && styles.selected]}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default SwitchSelector;
