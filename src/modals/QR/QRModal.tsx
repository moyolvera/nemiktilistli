import * as React from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Feather } from '@expo/vector-icons';

import styles from './QRModal.styles';
import { Text } from '@components';

type QRModalItem = {
  title: string;
  qrValue: string;
  subtitle?: string;
};

interface QRModalProps {
  visible: boolean;
  closeModal: () => void;
  name: string;
  data: QRModalItem[];
}

function QRModal({ visible, closeModal, data, name }: QRModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={closeModal}>
      <View style={styles.wrapper}>
        <Text style={styles.guest}>{name}</Text>
        {data.map(item => (
          <>
            <Text style={styles.title}>{item.title}</Text>
            {!!item.subtitle && (
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            )}
            <View style={styles.qrWrapper}>
              <QRCode value={item.qrValue} />
            </View>
          </>
        ))}
        <TouchableOpacity style={styles.close} onPress={closeModal}>
          <Feather name="x" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default QRModal;
