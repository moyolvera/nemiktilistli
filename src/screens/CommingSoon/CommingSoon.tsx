import * as React from 'react';
import { Image, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Text } from '@components';
import useLogScreen from '@hooks/useLogScreen';

import styles from './CommingSoon.styles';

interface CommingSoonProps {}

function CommingSoonScreen({}: CommingSoonProps) {
  useLogScreen({ screenName: 'CommingSoon' });

  return (
    <View style={styles.wrapper}>
      <Image
        source={require('../../../assets/images/kenailabs-logo-white.png')}
        style={styles.image}
      />
      <Entypo name="dot-single" size={28} color="#fff" style={styles.dot} />
      <Text style={styles.coming}>coming</Text>
      <Text style={styles.soon}>soon</Text>
    </View>
  );
}

export default CommingSoonScreen;
