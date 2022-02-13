import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@components';
import styles from './Footer.styles';

interface FooterProps {
  openItinerary: () => void;
  openMenu: () => void;
}

function Footer({ openItinerary, openMenu }: FooterProps) {
  return (
    <>
      <View style={styles.wrapper}>
        <Text onPress={openItinerary} style={styles.font}>
          ITINERARIO |
        </Text>
        <Text onPress={openMenu} style={styles.font}>{` MENU `}</Text>
        <Text style={styles.font}>| INFORMACION</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.fontSmall}>{` NO NIÑOS | ETIQUETA `}</Text>
      </View>
    </>
  );
}

export default Footer;
