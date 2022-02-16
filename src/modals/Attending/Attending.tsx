import * as React from 'react';
import { View, Modal, TouchableOpacity, TextInput } from 'react-native';
import { CheckBox, Text } from '@components';
import { Feather } from '@expo/vector-icons';
import { PeopleEntry, updatePeopleEntry } from '@actions/people';
import styles from './Attending.styles';
import { ThankYou } from '@modals';
import { AnimatePresence } from 'moti';

interface AttendingProps {
  visible: boolean;
  guest: PeopleEntry;
  closeModal: () => void;
}

function Attending({ visible, closeModal, guest }: AttendingProps) {
  const [attending, setAttending] = React.useState(guest.attending || false);
  const [message, setMessage] = React.useState(guest.message || '');

  const [highlightMessage, setHighlightMessage] = React.useState(false);
  const [thankYouModal, setThankYouModal] = React.useState(false);

  function setNotAttending() {
    setAttending(false);
  }

  function setYesAttending() {
    setAttending(true);
  }

  async function updateEntry() {
    await updatePeopleEntry({ token: guest.token, attending, message });

    closeModal();
  }

  async function handleThankYouOk() {
    await updateEntry();
    setThankYouModal(false);
  }

  async function requestUpdate() {
    if (message === '') {
      setHighlightMessage(true);
      return;
    }

    if (!attending) {
      setThankYouModal(true);
      return;
    }

    await updateEntry();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={closeModal}>
      <View style={styles.wrapper}>
        <AnimatePresence>
          {thankYouModal ? <ThankYou handle={handleThankYouOk} /> : null}
        </AnimatePresence>
        <View style={styles.container}>
          <Text style={styles.title}>Asistencia</Text>
          <CheckBox
            label={`Confirmar asistencia - ${guest.quantity} persona(s)`}
            checked={attending}
            onCheck={setYesAttending}
          />
          <CheckBox
            label="No sera posible acompañarlos"
            checked={!attending}
            onCheck={setNotAttending}
          />
          <TextInput
            placeholder="Escribe aqui un mensaje para los novios"
            style={[
              styles.message,
              highlightMessage && styles.highlightMessage
            ]}
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={3}
          />
          <View style={styles.separator} />
          <Text style={styles.detail}>
            Los asientos se reservan y asignan por persona. Contamos contigo
            para no perder ningun asiento.
          </Text>
          <Text style={[styles.detail, styles.detailBold]}>
            En caso de que no todos vayan favor de agregarlo en el mensaje
          </Text>
          <View style={styles.separator} />
          <TouchableOpacity
            style={[styles.buttonShadow, styles.button]}
            onPress={requestUpdate}>
            <Feather name="send" size={12} />
            <Text style={styles.label}>Enviar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.close} onPress={closeModal}>
          <Feather name="x" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default Attending;
