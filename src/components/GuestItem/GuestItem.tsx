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
  'Hola, queremos agradacerte por confirmar tu asistencia. Tu lugar a sido reservado, *te recordamos que contamos contigo para no perder ningun lugar* ya que cada lugar esta pagado y si se deja vacio se perdera ese dinero. Tambien recordarte que por medidas de seguridad *NO se permitira la entrada a niños a menos que aun sean de brazos*, no tendremos tampoco sillas ni platos adicionales. A la entrada los organizadores te preguntaran tu nombre y te llevaran a tu lugar asignado. Estamos muy felices de contar con tu asistencia y estamos ansiosos porque se llegue la fecha. Nos vemos pronto. Que tengas un excelente dia.\n\n\n PD: No es necesario pero te hacemos saber que contamos con mesa de regalos 🤭😊💃: \nhttps://www.amazon.com.mx/hz/wishlist/ls/2RKK5C8IQKS0W?ref_=wl_share';

const UNANSWERED_MESSAGE =
  'Hola, se han transcurrido los dias limite y no recibimos respuesta. El lugar fue asignado a otra persona porque no podemos perder ningun lugar, agradecemos tu comprension y esperamos verte pronto. Que tengas un excelente dia.';

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
      if (daysOfInvite > 13) {
        return styles.greenHighlight;
      }

      return styles.cyanHighlight;
    }

    if (daysOfInvite > 13) {
      return styles.blackHighlight;
    }

    if (daysOfInvite > 12) {
      return styles.redHighlight;
    }

    if (daysOfInvite > 11) {
      return styles.orangeHighlight;
    }

    if (daysOfInvite > 10) {
      return styles.yellowHighlight;
    }

    return undefined;
  }, [daysOfInvite, answered, attending]);

  function getMessage() {
    if (daysOfInvite > 13) {
      if (answered) {
        if (attending) {
          return ATTENDING_MESSAGE;
        } else {
          return NOT_GOING_MESSAGE;
        }
      }

      return UNANSWERED_MESSAGE;
    }

    if (answered && attending) {
      return ATTENDING_MESSAGE;
    }

    if (daysOfInvite >= 11) {
      return `${WARNING_MESSAGE}\n\nhttps://kenailabs.com/invitation/${token}`;
    }

    return `Hola ${name}, ${MESSAGE}\n\nhttps://kenailabs.com/invitation/${token}`;
  }

  function handleOnOpenChat() {
    handleOnOpen(`https://api.whatsapp.com/send?phone=${phone}`);
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
    sendMessage = `https://api.whatsapp.com/send?phone=${phone}`
  ) {
    Linking.openURL(sendMessage);
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

  function handleConfirmation() {
    const confirmation = `Hola ${name}, estamos solo a 10 dias de la boda!`;
    const openLink = `https://api.whatsapp.com/send?phone=${phone}&text=${confirmation}`;
    const invitation = `https://kenailabs.com/invitation/${token}`;

    const copied = Clipboard.setString(invitation);

    if (Boolean(copied)) {
      toast.show('Token copiado', {
        type: 'normal',
        duration: 800,
        placement: 'bottom'
      });

      handleOnOpen(openLink);
    }
  }

  const color = !!invitedOn ? 'rgba(158, 115, 255, 0.7)' : 'rgba(0,0,0,0.2)';

  return (
    <View style={[styles.container, highlighStyle]}>
      <View style={[styles.person]}>
        <View style={styles.status}>
          <StatusIcon answered={answered} attending={attending} />
        </View>
        <TouchableOpacity style={styles.content} onPress={navigateToHome}>
          <Text style={styles.personName}>{name}</Text>
          {!!message ? (
            <Text style={styles.personEmail}>{`Mensaje: ${message}`}</Text>
          ) : null}
        </TouchableOpacity>
        <View style={styles.actions}>
          <TouchableOpacity onLongPress={handleOnOpenChat}>
            <Feather name="external-link" size={20} color={color} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.actionWrapper}>
        <TouchableOpacity
          style={styles.actionItem}
          onPress={navigateToEdit}
          onLongPress={copyToken}>
          <Text style={styles.actionText}>Editar</Text>
          <Ionicons name="pencil" size={16} color={color} />
        </TouchableOpacity>
        {answered && attending && (
          <TouchableOpacity
            style={styles.actionItem}
            onPress={handleConfirmation}>
            <Text style={styles.actionText}>Confimacion</Text>
            <Feather name="alert-triangle" size={16} color={color} />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.actionItem} onPress={handleOnSend}>
          <Text style={styles.actionText}>Invitar</Text>
          <Feather name="send" size={16} color={color} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GuestItem;
