import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { Container } from '@components';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from 'src/Navigator';
import useLogScreen from '@hooks/useLogScreen';
import styles from './NotFound.styles';

interface NotFoundProps {}

function NotFoundScreen({}: NotFoundProps) {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  useLogScreen({ screenName: 'NotFound' });

  function goToHome() {
    navigate('Home');
  }

  return (
    <Container>
      <View style={styles.wrapper}>
        <Image
          source={require('../../../assets/images/sleeping-guardian.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Ups! Esa pagina no existe</Text>
        <Text style={[styles.title, styles.link]} onPress={goToHome}>
          regresa al inicio
        </Text>
      </View>
    </Container>
  );
}

export default NotFoundScreen;
