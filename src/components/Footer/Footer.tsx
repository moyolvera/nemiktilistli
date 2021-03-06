import * as React from 'react';
import { Linking, TouchableOpacity, View } from 'react-native';
import { Text } from '@components';
import styles from './Footer.styles';
import { DisplayContext } from '@context/DisplayContext';

interface FooterProps {
  openItinerary: () => void;
  openMenu: () => void;
  openInfo: () => void;
  openGiftTable: () => void;
  sensible?: boolean;
}

function Footer({
  openItinerary,
  openMenu,
  openInfo,
  sensible,
  openGiftTable
}: FooterProps) {
  const { displayStatus } = React.useContext(DisplayContext);
  return (
    <View style={[styles.separate, displayStatus === 2 && styles.white]}>
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
        onLongPress={openGiftTable}
        onPress={() => {
          Linking.openURL(
            'https://www.amazon.com.mx/hz/wishlist/ls/2RKK5C8IQKS0W?ref_=wl_share'
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
