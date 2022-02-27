import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  View,
  Modal,
  TouchableOpacity,
  ImageBackground,
  Linking
} from 'react-native';
import { Text } from '@components';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './Directions.styles';

interface DirectionsProps {
  visible: boolean;
  closeModal: () => void;
}

function Directions({ closeModal, visible }: DirectionsProps) {
  function openTendenzaLocation() {
    Linking.openURL('https://goo.gl/maps/YeEawfbEFTJ3eZ7V7');
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={closeModal}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <ImageBackground
            source={require('../../../assets/images/mapa.jpg')}
            style={styles.image}>
            <LinearGradient
              colors={['#fff', 'transparent']}
              style={styles.gradientTop}>
              <Text style={styles.title}>Direcciones</Text>
            </LinearGradient>
            <LinearGradient
              colors={['transparent', '#fff']}
              style={styles.gradientBottom}>
              <TouchableOpacity
                onPress={openTendenzaLocation}
                style={styles.button}>
                <Feather name="map-pin" size={16} color="#6060a0" />
                <Text style={styles.subtitle}>Ver en maps</Text>
              </TouchableOpacity>
            </LinearGradient>
          </ImageBackground>
        </View>
        <TouchableOpacity style={styles.close} onPress={closeModal}>
          <Feather name="x" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default Directions;
