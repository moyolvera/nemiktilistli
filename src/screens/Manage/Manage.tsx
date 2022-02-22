import * as React from 'react';
import { Text, View } from 'react-native';
import { Container } from '@components';
import { useLogScreen } from '@hooks';

import styles from './Manage.styles';

interface ManageProps {}

function ManageScreen({}: ManageProps) {
  useLogScreen({ screenName: 'Manage' });

  return (
    <Container>
      <View style={styles.wrapper}>
        <Text>More text</Text>
      </View>
    </Container>
  );
}

export default ManageScreen;
