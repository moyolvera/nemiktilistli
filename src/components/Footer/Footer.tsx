import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@components';
import styles from './Footer.styles';

interface FooterProps {
  openItinerary: () => void;
}

function Footer({ openItinerary }: FooterProps) {
  return (
    <View style={styles.wrapper}>
      <Text onPress={openItinerary} style={styles.font}>
        ITINERARIO |
      </Text>
      <Text style={styles.font}>{` MENU `}</Text>
      <Text style={styles.font}>| INFORMACION</Text>
    </View>
  );
}

export default Footer;
