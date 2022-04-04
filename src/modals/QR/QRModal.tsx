import * as React from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Feather } from '@expo/vector-icons';

import styles from './QRModal.styles';
import { Text } from '@components';

interface QRModalProps {
  visible: boolean;
  closeModal: () => void;
  title: string;
  qrValue: string;
}

function QRModal({ visible, closeModal, qrValue, title }: QRModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={closeModal}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <QRCode value={qrValue} />
        <TouchableOpacity style={styles.close} onPress={closeModal}>
          <Feather name="x" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default QRModal;
