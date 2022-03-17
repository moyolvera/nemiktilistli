import * as React from 'react';
import { PeopleEntry } from '@actions/people';
import { View, TouchableOpacity, Linking } from 'react-native';
import { StatusIcon, Text } from '@components';
import { Feather, Ionicons } from '@expo/vector-icons';
import { people } from '@actions';
import * as Clipboard from 'expo-clipboard';
import { useToast } from 'react-native-toast-notifications';

import styles from './GuestItem.styles';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from 'src/Navigator';

const MESSAGE =
  'Tenemos el gusto de invitarte en este dia tan especial para nosotros, esperamos nos puedas acompañar, por favor confirma tu asistencia en el siguiente link: \n';

const ATTENDING_MESSAGE =
  'Gracias por confirmar tu asistencia, tu lugar a sido reservado, *te recordamos que contamos contigo para no perder ningun lugar* ya que cada lugar es único y no podemos dejar ningun lugar sin asistencia.';

const UNANSWERED_MESSAGE =
  'Hola, se han transcurrido los dias limite y no recibimos respuesta. El lugar sera reasignado, lamentamos que no puedas asistir, agradecemos tu comprension y esperamos verte pronto. Que tengas un excelente dia.';

const NOT_GOING_MESSAGE =
  'Agradecemos tu respuesta a la invitacion. Lamentamos que no nos puedas acompanñar, esperamos verte pronto.';

const WARNING_MESSAGE =
  'Hola, solo para recordarte que se agotan los dias para confirmar tu asistencia, por favor confirma tu asistencia o no asistencia en el siguiente link: \n';

interface GuestItemProps {
  person: PeopleEntry;
}

function GuestItem({ person }: GuestItemProps) {
  const { name, token, invitedOn, phone, answered, message, attending } =
    person;
  const toast = useToast();
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const daysOfInvite = React.useMemo(() => {
    if (!invitedOn) {
      return 15;
    }

    const diff = Date.now() - invitedOn;
    return Math.ceil(diff / (1000 * 3600 * 24));
  }, [invitedOn]);

  const highlighStyle = React.useMemo(() => {
    if (answered && attending) {
      if (daysOfInvite >= 16) {
        return styles.greenHighlight;
      }

      return styles.cyanHighlight;
    }

    if (daysOfInvite >= 16) {
      return styles.blackHighlight;
    }

    if (daysOfInvite >= 14) {
      return styles.redHighlight;
    }

    if (daysOfInvite >= 12) {
      return styles.orangeHighlight;
    }

    if (daysOfInvite >= 10) {
      return styles.yellowHighlight;
    }

    return undefined;
  }, [daysOfInvite, answered, attending]);

  function getMessage() {
    if (daysOfInvite >= 16) {
      if (answered) {
        if (attending) {
          return ATTENDING_MESSAGE;
        } else {
          return NOT_GOING_MESSAGE;
        }
      }

      return UNANSWERED_MESSAGE;
    }

    if (daysOfInvite >= 12) {
      return `${WARNING_MESSAGE}\n\nhttps://kenailabs.com/invitation/${token}`;
    }

    return `Hola ${name}, ${MESSAGE}\n\nhttps://kenailabs.com/invitation/${token}`;
  }

  function handleOnSend() {
    const compoundMessage = getMessage();
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

  function navigateToEdit() {
    navigate('AddEdit', { guest: person });
  }

  function navigateToHome() {
    navigate('Home', { token });
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
    <View style={[styles.person, highlighStyle]}>
      <View style={styles.status}>
        <StatusIcon answered={answered} attending={attending} />
      </View>
      <TouchableOpacity style={styles.content} onPress={navigateToHome}>
        <Text style={styles.personName}>{name}</Text>
        <Text style={styles.personEmail}>{`Mensaje: ${message}`}</Text>
      </TouchableOpacity>
      <View style={styles.actions}>
        <TouchableOpacity onPress={navigateToEdit} onLongPress={copyToken}>
          <Ionicons name="pencil" size={20} color="rgba(0,0,0,0.2)" />
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
