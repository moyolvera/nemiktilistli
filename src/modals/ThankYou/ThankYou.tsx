import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@components';
import { Feather } from '@expo/vector-icons';
import { MotiView } from 'moti';
import styles from './ThankYou.styles';

const MOTI_CONFIG = {
  from: {
    opacity: 0,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  exit: {
    opacity: 0,
    scale: 0.9
  }
};

interface ThankYouProps {
  handle: () => void;
}

function ThankYou({ handle }: ThankYouProps) {
  return (
    <MotiView
      from={MOTI_CONFIG.from}
      animate={MOTI_CONFIG.animate}
      exit={MOTI_CONFIG.exit}
      style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>Gracias!</Text>
        <Text style={styles.description}>
          Lamentamos saber que no te sera posible acompañarnos en esta ocasion.
          Te agradecemos por hacernoslo saber, seguro que ya nos podremos ver en
          otro ocasion. Recibe un gran saludo y bendiciones.
        </Text>
        <TouchableOpacity
          style={[styles.buttonShadow, styles.button]}
          onPress={handle}>
          <Feather name="send" size={12} />
          <Text style={styles.label}>Aceptar</Text>
        </TouchableOpacity>
      </View>
    </MotiView>
  );
}

export default ThankYou;
