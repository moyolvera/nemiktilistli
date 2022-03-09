import * as React from 'react';
import { Image, View } from 'react-native';
import { Container, PasscodeDot, Secret, Text } from '@components';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming
} from 'react-native-reanimated';
import { useToast } from 'react-native-toast-notifications';
import { useLogScreen } from '@hooks';
import { ManageContext } from '@context/ManageContext';
import { getSecretEntry, SecretEntry } from '@actions/secret';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from 'src/Navigator';
import asyncStorageUtil from '@utils/asyncStorageUtil';

import styles from './Password.styles';

interface PasswordProps {}

function PasswordScreen({}: PasswordProps) {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const [secret, setSecret] = React.useState('');
  const { canManageContext, setCanManageContext } =
    React.useContext(ManageContext);
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

  async function handleSecretEntryRequest(entry: SecretEntry | undefined) {
    if (!entry) {
      setSecret('');
      shake();

      toast.show('La contraseña es incorrecta, intentalo de nuevo.', {
        type: 'danger'
      });
      return;
    }

    toast.show('Contraseña correcta!', { type: 'success' });

    await asyncStorageUtil.storeData('secret', `${Date.now()}`);

    if (setCanManageContext) {
      setCanManageContext(true);
    }
  }

  const dotsWrapperStyles = useAnimatedStyle(
    () => ({
      transform: [{ translateX: animation.value }]
    }),
    []
  );

  React.useEffect(() => {
    if (secret.length !== 4) {
      return;
    }

    getSecretEntry(secret).then(handleSecretEntryRequest, handleError);
  }, [secret]);

  React.useEffect(() => {
    if (canManageContext) {
      navigate('Manage');
    }
  }, [canManageContext]);

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
