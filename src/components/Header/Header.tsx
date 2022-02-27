import * as React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  View
} from 'react-native';
import { Text, Timer } from '@components';
import { Feather } from '@expo/vector-icons';
import { PeopleEntry } from '@actions/people';

import styles from './Header.styles';

interface HeaderProps {
  guest?: PeopleEntry;
  toggleAttending: () => void;
}

function Header({ guest, toggleAttending }: HeaderProps) {
  const calendarColor = React.useMemo(() => {
    if (!guest?.answered) {
      return '#000';
    }

    return guest.attending ? '#00c853' : '#ff3d00';
  }, [guest]);

  return (
    <ImageBackground
      source={require('../../../assets/images/cover.png')}
      resizeMode="cover"
      style={styles.wrapper}>
      <Text style={styles.title}>{`Nos        \n   Casamos`}</Text>
      <Text style={styles.subtitle}>{'Kary & Moy'}</Text>
      <Text style={styles.guest}>{`${guest?.name || 'Cargando...'}`}</Text>
      <Text style={styles.inviteIntro}>Tenemos el honor de invitarle</Text>
      <Text style={styles.inviteIntro2}>a celebrar nuestra boda el dia</Text>
      <Text style={styles.date}>20 de Mayo de 2022</Text>
      {!!guest?.goodfather ? (
        <>
          <Text style={styles.like}>como</Text>
          <Text style={styles.goodfather}>{guest?.goodfather}</Text>
        </>
      ) : (
        <>
          <Timer />
        </>
      )}

      {guest ? (
        <TouchableOpacity
          style={[styles.buttonShadow, styles.button]}
          onPress={toggleAttending}>
          <Feather name="calendar" size={12} color={calendarColor} />
          <Text style={styles.label}>
            {!guest.answered ? (
              'Responder invitacion'
            ) : (
              <>{guest.attending ? 'Ahi nos vemos' : 'No podre ir'}</>
            )}
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size="small" />
        </View>
      )}
    </ImageBackground>
  );
}

export default Header;
