import * as React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import { Text, Timer } from '@components';
import { Feather } from '@expo/vector-icons';
import { PeopleEntry } from '@actions/people';

import styles from './Header.styles';
import { DisplayContext } from '@context/DisplayContext';

interface HeaderProps {
  guest?: PeopleEntry;
  toggleAttending: () => void;
}

interface ButtonWrapperProps {
  disabled: boolean;
  style: StyleProp<ViewStyle>;
  children: React.ReactNode;
  onPress?: () => void;
}

function ButtonWrapper({ disabled, ...props }: ButtonWrapperProps) {
  return disabled ? <View {...props} /> : <TouchableOpacity {...props} />;
}

function Header({ guest, toggleAttending }: HeaderProps) {
  const { displayStatus, updateDisplayStatus } =
    React.useContext(DisplayContext);
  const [disableButton, setDisableButton] = React.useState(false);

  const calendarColor = React.useMemo(() => {
    if (!guest?.answered) {
      return '#000';
    }

    return guest.attending ? '#00c853' : '#ff3d00';
  }, [guest]);

  React.useEffect(() => {
    if (!guest) {
      return;
    }

    const invitationDate = guest.invitedOn;
    if (!invitationDate) {
      return;
    }

    const diff = Date.now() - invitationDate;
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    if (diffDays > 15) {
      setDisableButton(true);
    }
  }, [guest]);

  function getPendingAnswerLabel() {
    if (disableButton) {
      return 'Lamentamos que no nos acompañes';
    } else {
      return 'Responder invitacion';
    }
  }

  return (
    <ImageBackground
      source={
        displayStatus === 2
          ? require('../../../assets/images/cover-w.jpg')
          : require('../../../assets/images/cover.png')
      }
      resizeMode="cover"
      style={styles.wrapper}>
      <TouchableOpacity
        style={styles.invisibleButton}
        onLongPress={updateDisplayStatus}
      />
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
        <ButtonWrapper
          disabled={disableButton}
          style={[
            styles.button,
            !disableButton && styles.buttonShadow,
            displayStatus !== 0 && styles.transparent
          ]}
          onPress={toggleAttending}>
          <Feather name="calendar" size={12} color={calendarColor} />
          <Text style={styles.label}>
            {!guest.answered ? (
              getPendingAnswerLabel()
            ) : (
              <>{guest.attending ? 'Ahi nos vemos' : 'No podre ir'}</>
            )}
          </Text>
        </ButtonWrapper>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size="small" />
        </View>
      )}
    </ImageBackground>
  );
}

export default Header;
