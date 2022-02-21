import * as React from 'react';
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons
} from '@expo/vector-icons';
import { View, Modal, TouchableOpacity, ImageBackground } from 'react-native';
import { Text } from '@components';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Menu.styles';

interface MenuProps {
  visible: boolean;
  closeModal: () => void;
}

function Menu({ visible, closeModal }: MenuProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={closeModal}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <ImageBackground
            source={require('../../../assets/images/menu.jpeg')}
            resizeMode="cover"
            style={styles.cover}
          />
          <LinearGradient
            colors={['transparent', '#fff']}
            style={styles.gradient}>
            <Text style={styles.title}>Vini do brasil</Text>
            <View style={styles.rowWrapper}>
              <View style={styles.iconWrapper}>
                <FontAwesome name="leaf" size={16} />
              </View>
              <View style={styles.item}>
                <Text style={styles.itemTitle}>Entrada</Text>
                <Text style={styles.itemSubtitle}>Ensalada verde</Text>
              </View>
            </View>
            <View style={styles.rowWrapper}>
              <View style={styles.iconWrapper}>
                <MaterialCommunityIcons
                  name="silverware-fork-knife"
                  size={16}
                />
              </View>
              <View style={styles.item}>
                <Text style={styles.itemTitle}>PLATO FUERTE</Text>
                <Text style={styles.itemSubtitle}>
                  Banquete de espadas brasileñas
                </Text>
              </View>
            </View>
            <View style={styles.rowWrapper}>
              <View style={styles.iconWrapper}>
                <Ionicons name="ice-cream" size={16} />
              </View>
              <View style={styles.item}>
                <Text style={styles.itemTitle}>POSTRE</Text>
                <Text style={styles.itemSubtitle}>Sandwich de helado</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.alergicButton}>
              <FontAwesome name="envelope" size={10} />
              <Text style={styles.alergicText}>SOY ALERGICO</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <TouchableOpacity style={styles.close} onPress={closeModal}>
          <Feather name="x" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default Menu;
