import * as React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from '@components';
import styles from './Locations.style';

interface LocationsProps {
  toggleDirections: () => void;
}

function Locations({ toggleDirections }: LocationsProps) {
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
      <TouchableOpacity onPress={toggleDirections}>
        <Image
          source={require('../../../assets/images/location.png')}
          style={styles.pin}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Locations;
