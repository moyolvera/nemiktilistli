import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@components';
import styles from './Footer.styles';

interface FooterProps {
  openItinerary: () => void;
  openMenu: () => void;
  openInfo: () => void;
}

function Footer({ openItinerary, openMenu, openInfo }: FooterProps) {
  return (
    <View style={styles.separate}>
      <View style={styles.wrapper}>
        <Text onPress={openItinerary} style={styles.font}>
          ITINERARIO |
        </Text>
        <Text onPress={openMenu} style={styles.font}>{` MENU `}</Text>
        <Text onPress={openInfo} style={styles.font}>
          | INFORMACION
        </Text>
      </View>
      <View style={styles.wrapper}>
        <Text
          onPress={openInfo}
          style={styles.fontSmall}>{` NO NIÑOS | ETIQUETA `}</Text>
      </View>
    </View>
  );
}

export default Footer;
