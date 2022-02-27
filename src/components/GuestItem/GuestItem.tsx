import * as React from 'react';
import { PeopleEntry } from '@actions/people';
import { View, TouchableOpacity, Linking } from 'react-native';
import { StatusIcon, Text } from '@components';
import { Feather, Ionicons } from '@expo/vector-icons';

import styles from './GuestItem.styles';

const MESSAGE =
  'Tenemos el gusto de invitarte en este dia tan especial para nosotros, esperamos nos puedas acompañar, por favor confirma tu asistencia en el siguiente link:\n';

interface GuestItemProps {
  person: PeopleEntry;
}

function GuestItem({ person }: GuestItemProps) {
  function handleOnSend() {
    const compoundMessage = `Hola ${person.name}, ${MESSAGE}\n\nhttps://kenailabs.com/invitation/${person.token}`;
    Linking.openURL(
      `https://api.whatsapp.com/send?phone=${person.phone}&text=${compoundMessage}`
    );
  }

  function handleOnOpen() {
    Linking.openURL(`https://api.whatsapp.com/send?phone=${person.phone}`);
  }

  return (
    <View style={styles.person}>
      <View style={styles.status}>
        <StatusIcon answered={person.answered} attending={person.attending} />
      </View>
      <View style={styles.content}>
        <Text style={styles.personName}>{person.name}</Text>
        <Text style={styles.personEmail}>{`Mensaje: ${person.message}`}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleOnOpen}>
          <Ionicons name="open-outline" size={20} color="rgba(0,0,0,0.2)" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOnSend}>
          <Feather name="send" size={20} color="rgba(0,0,0,0.2)" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GuestItem;
