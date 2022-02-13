import * as React from 'react';
import { View, Image, TouchableOpacity, Linking } from 'react-native';
import { Text } from '@components';
import styles from './Locations.style';

interface LocationsProps {}

function Locations({}: LocationsProps) {
  function openTendenzaLocation() {
    Linking.openURL('https://goo.gl/maps/YeEawfbEFTJ3eZ7V7');
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>CEREMONIA</Text>
      <Text style={styles.locationName}>SAN ANTONIO DE PADUA</Text>
      <Text style={styles.address}>Pedro Parga 252, Centro, AGS</Text>
      <Image
        source={require('../../../assets/images/separator.png')}
        style={styles.separator}
      />
      <Text style={styles.label}>RECEPCION</Text>
      <Text style={styles.locationName}>TENDENZA</Text>
      <TouchableOpacity onPress={openTendenzaLocation}>
        <Image
          source={require('../../../assets/images/location.png')}
          style={styles.pin}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Locations;
