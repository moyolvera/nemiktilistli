import * as React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { Text, Timer } from '@components';
import { Feather } from '@expo/vector-icons';
import styles from './Header.styles';

interface HeaderProps {
  guest: string;
}

function Header({ guest }: HeaderProps) {
  return (
    <ImageBackground
      source={require('../../../assets/images/cover.png')}
      resizeMode="cover"
      style={styles.wrapper}>
      <Text style={styles.title}>{`Nos        \n   Casamos`}</Text>
      <Text style={styles.subtitle}>{'Kary & Moy'}</Text>
      <Text style={styles.guest}>{guest}</Text>
      <Text style={styles.inviteIntro}>Tenemos el honor de invitarle</Text>
      <Text style={styles.inviteIntro2}>a celebrar nuestra boda el dia</Text>
      <Text style={styles.date}>20 de Mayo de 2022</Text>
      <Text style={styles.separator}>/</Text>
      <Timer />
      <TouchableOpacity style={styles.button}>
        <Feather name="calendar" size={12} />
        <Text style={styles.label}>Confirmar asistencia ahora</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default Header;
