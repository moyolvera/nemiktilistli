import * as React from 'react';
import { PeopleEntry } from '@actions/people';
import { View, TouchableOpacity, Linking } from 'react-native';
import { StatusIcon, Text } from '@components';
import { Feather, Ionicons } from '@expo/vector-icons';
import { people } from '@actions';
import * as Clipboard from 'expo-clipboard';
import { useToast } from 'react-native-toast-notifications';

import styles from './GuestItem.styles';

const MESSAGE =
  'Tenemos el gusto de invitarte en este dia tan especial para nosotros, esperamos nos puedas acompañar, por favor confirma tu asistencia en el siguiente link: \n';

interface GuestItemProps {
  person: PeopleEntry;
}

function GuestItem({
  person: { name, token, invitedOn, phone, answered, message, attending }
}: GuestItemProps) {
  const toast = useToast();

  function handleOnSend() {
    const compoundMessage = `Hola ${name}, ${MESSAGE}\n\nhttps://kenailabs.com/invitation/${token}`;
    const link = `https://api.whatsapp.com/send?phone=${phone}&text=${compoundMessage}`;

    if (!invitedOn) {
      people
        .setPeopleEntryInvitedDate({ token, invitedOn: Date.now() })
        .then(() => {
          handleOnOpen(link);
        })
        .catch(error => {
          console.log('error', error);
        });
    } else {
      handleOnOpen(link);
    }
  }

  function handleOnOpen(
    message = `https://api.whatsapp.com/send?phone=${phone}`
  ) {
    Linking.openURL(message);
  }

  function copyToken() {
    const copied = Clipboard.setString(token);

    if (Boolean(copied)) {
      toast.show('Token copiado', {
        type: 'normal',
        duration: 800,
        placement: 'bottom'
      });
    }
  }

  return (
    <View style={styles.person}>
      <View style={styles.status}>
        <StatusIcon answered={answered} attending={attending} />
      </View>
      <View style={styles.content}>
        <Text style={styles.personName}>{name}</Text>
        <Text style={styles.personEmail}>{`Mensaje: ${message}`}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => handleOnOpen()}
          onLongPress={copyToken}>
          <Ionicons name="open-outline" size={20} color="rgba(0,0,0,0.2)" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOnSend}>
          <Feather
            name="send"
            size={20}
            color={!!invitedOn ? 'rgba(158, 115, 255, 0.7)' : 'rgba(0,0,0,0.2)'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GuestItem;
