import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  transparency: {
    opacity: 0.3
  }
});

interface StatusIconProps {
  answered: boolean;
  attending: boolean;
}

function StatusIcon({ answered, attending }: StatusIconProps) {
  if (!answered) {
    return (
      <Ionicons
        name="radio-button-off"
        size={26}
        color="#000"
        style={styles.transparency}
      />
    );
  }

  if (attending) {
    return (
      <Ionicons
        name="checkmark-circle"
        size={26}
        color="#00c853"
        style={styles.transparency}
      />
    );
  }

  return (
    <Ionicons
      name="close-circle"
      size={26}
      color="#ff3d00"
      style={styles.transparency}
    />
  );
}

export default StatusIcon;
