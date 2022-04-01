import * as React from 'react';
import { Linking, TouchableOpacity, View } from 'react-native';
import { Text } from '@components';
import styles from './Footer.styles';

interface FooterProps {
  openItinerary: () => void;
  openMenu: () => void;
  openInfo: () => void;
  sensible?: boolean;
}

function Footer({ openItinerary, openMenu, openInfo, sensible }: FooterProps) {
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
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          Linking.openURL(
            'http://mesaderegalos.liverpool.com.mx/milistaderegalos/50860857'
          );
        }}>
        <Text style={[styles.font]}>{` MESA DE REGALOS `}</Text>
      </TouchableOpacity>
      <View style={styles.wrapper}>
        {!sensible ? (
          <Text
            onPress={openInfo}
            style={[
              styles.separation,
              styles.fontSmall,
              styles.blackText
            ]}>{` NO NIÑOS | ETIQUETA `}</Text>
        ) : null}
      </View>
    </View>
  );
}

export default Footer;
