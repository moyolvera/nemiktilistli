import * as React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from '@components';
import styles from './Locations.style';
import { DisplayContext } from '@context/DisplayContext';
import { PeopleEntry } from '@actions/people';

interface LocationsProps {
  guest?: PeopleEntry;
  toggleDirections: () => void;
}

function Locations({ guest, toggleDirections }: LocationsProps) {
  const { displayStatus } = React.useContext(DisplayContext);
  const hideInfo = React.useMemo(() => {
    if (!guest) {
      return true;
    }

    return guest.answered && !guest.attending;
  }, [guest]);

  return (
    <View style={[styles.wrapper, displayStatus === 2 && styles.white]}>
      {hideInfo ? (
        <></>
      ) : (
        <>
          <Text style={styles.label}>CEREMONIA</Text>
          <Text style={styles.locationName}>SAN ANTONIO DE PADUA</Text>
          <Text style={styles.address}>Pedro Parga 252, Centro, AGS</Text>
          <Image
            source={require('../../../assets/images/separator.png')}
            style={[
              styles.separator,
              displayStatus === 1 && styles.transparent
            ]}
          />
          <Text style={styles.label}>RECEPCION</Text>
          <Text style={styles.locationName}>TENDENZA</Text>
          <TouchableOpacity onPress={toggleDirections}>
            <Image
              source={require('../../../assets/images/location.png')}
              style={[styles.pin, displayStatus === 1 && styles.transparent]}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

export default Locations;
