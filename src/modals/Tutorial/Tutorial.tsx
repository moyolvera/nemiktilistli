import * as React from 'react';
import { YoutubeVideo } from '@components';
import { Feather } from '@expo/vector-icons';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

import styles from './Tutorial.styles';

interface TutorialProps {
  visible: boolean;
  closeModal: () => void;
}

function Tutorial({ visible, closeModal }: TutorialProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={closeModal}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.title}>Tutorial</Text>
          <YoutubeVideo onComplete={closeModal} />
        </View>
        <TouchableOpacity style={styles.close} onPress={closeModal}>
          <Feather name="x" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default Tutorial;
