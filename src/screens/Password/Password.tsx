import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { Container, PasscodeDot, Secret } from '@components';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming
} from 'react-native-reanimated';
import { useLogScreen } from '@hooks';
import { getSecretEntry, SecretEntry } from '@actions/secret';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from 'src/Navigator';

import styles from './Password.styles';
import { useToast } from 'react-native-toast-notifications';

interface PasswordProps {}

function PasswordScreen({}: PasswordProps) {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const [secret, setSecret] = React.useState('');
  const animation = useSharedValue(0);
  const toast = useToast();

  useLogScreen({ screenName: 'Password' });

  function shake() {
    animation.value = withSequence(
      withTiming(10, { duration: 100 }),
      withTiming(-10, { duration: 100 }),
      withTiming(10, { duration: 100 }),
      withTiming(0, { duration: 100 })
    );
  }

  function onButtonPress(value: string) {
    setSecret(secret + value);
  }

  function handleError() {
    setSecret('');
    toast.show('Algo salio mal, intentalo mas tarde', { type: 'danger' });
  }

  function handleSecretEntryRequest(entry: SecretEntry | undefined) {
    if (!entry) {
      setSecret('');
      shake();

      toast.show('La contraseña es incorrecta, intentalo de nuevo.', {
        type: 'danger'
      });
      return;
    }

    // navigate('Manage');
    toast.show('Contraseña correcta!', { type: 'success' });
  }

  const dotsWrapperStyles = useAnimatedStyle(
    () => ({
      transform: [{ translateX: animation.value }]
    }),
    []
  );

  React.useEffect(() => {
    console.log(secret);

    if (secret.length !== 4) {
      return;
    }

    getSecretEntry(secret).then(handleSecretEntryRequest, handleError);
  }, [secret]);

  return (
    <Container>
      <View style={styles.wrapper}>
        <Image
          source={require('../../../assets/images/guardian.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.title}>Necesitas una contraseña para ver esto</Text>
        <Animated.View style={[styles.animatedWrap, dotsWrapperStyles]}>
          <PasscodeDot isActive={secret.length > 0} />
          <PasscodeDot isActive={secret.length > 1} />
          <PasscodeDot isActive={secret.length > 2} />
          <PasscodeDot isActive={secret.length > 3} />
        </Animated.View>
        <Secret onButtonPress={onButtonPress} />
      </View>
    </Container>
  );
}

export default PasswordScreen;
