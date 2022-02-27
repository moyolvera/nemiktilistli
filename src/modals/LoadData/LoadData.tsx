import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Modal, TouchableOpacity, TextInput } from 'react-native';
import { Text } from '@components';
import { useToast } from 'react-native-toast-notifications';
import {
  determineIfIsImportPeopleEntry,
  ImportPeopleEntry
} from '@actions/people';

import styles from './LoadData.styles';

interface LoadDataProps {
  visible: boolean;
  closeModal: (data?: ImportPeopleEntry[]) => void;
}

function LoadData({ visible, closeModal }: LoadDataProps) {
  const [plainData, setPlainData] = React.useState('');
  const toast = useToast();

  function parseData() {
    try {
      const data = JSON.parse(plainData);
      if (!Array.isArray(data)) {
        toast.show('El JSON no es un array', { type: 'danger' });
        return;
      }

      const isValid = data.every(item => determineIfIsImportPeopleEntry(item));
      if (!isValid) {
        toast.show('El JSON no es valido', { type: 'danger' });
        return;
      }

      closeModal(data);
    } catch (error) {
      toast.show('Algo salio mal: ' + error, { type: 'danger' });
    }
  }

  function requestCloseModal() {
    closeModal();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={requestCloseModal}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.title}>Cargar datos</Text>
          <Text style={styles.subtitle}>
            Agrega los invitados, se necesita un JSON. Un arry de objetos. Cada
            objeto con nombre, telefono, padrino descripcion y tutorial
          </Text>
          <TextInput
            numberOfLines={8}
            placeholder={`"Moises Olvera", "+524442646803"`}
            multiline
            onChangeText={setPlainData}
            value={plainData}
            style={styles.input}
          />
          <TouchableOpacity
            style={[styles.buttonShadow, styles.button]}
            onPress={parseData}>
            <Feather name="check" size={12} />
            <Text style={styles.label}>Aceptar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.close} onPress={requestCloseModal}>
          <Feather name="x" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default LoadData;
