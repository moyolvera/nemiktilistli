import * as React from 'react';
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { View, Modal, TouchableOpacity } from 'react-native';
import { Text } from '@components';
import styles from './Itinerary.styles';

interface ItineraryProps {
  visible: boolean;
  closeModal: () => void;
}

function Itinerary({ visible, closeModal }: ItineraryProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={closeModal}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.title}>Itinerario</Text>
          <View style={styles.rowWrapper}>
            <View style={styles.iconWrapper}>
              <FontAwesome5 name="church" size={20} />
            </View>
            <View style={styles.item}>
              <Text style={styles.itemTitle}>Ceremonia Religiosa</Text>
              <Text style={styles.itemDescription}>
                17:00 hrs - San Antonio
              </Text>
            </View>
          </View>
          <View style={styles.rowWrapper}>
            <View style={styles.iconWrapper}>
              <MaterialIcons name="room-service" size={20} />
            </View>
            <View style={styles.item}>
              <Text style={styles.itemTitle}>Recepcion/Banquete</Text>
              <Text style={styles.itemDescription}>19:00 hrs - Tendenza</Text>
            </View>
          </View>
          <View style={styles.rowWrapper}>
            <View style={styles.iconWrapper}>
              <MaterialIcons name="music-note" size={20} />
            </View>
            <View style={styles.item}>
              <Text style={styles.itemTitle}>Valts/Baile</Text>
              <Text style={styles.itemDescription}>21:00 hrs - Tendenza</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.close} onPress={closeModal}>
          <Feather name="x" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default Itinerary;
