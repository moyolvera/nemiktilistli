import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Container } from '@components';
import { ScreenNavigationProp } from '../../Navigator';

interface HomeProps {}

function HomeScreen({}: HomeProps) {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  return (
    <Container>
      <View>
        <Text>Home Screen</Text>
        <Button title="Go to Details" onPress={() => navigate('Details')} />
      </View>
    </Container>
  );
}

export default HomeScreen;
