import * as React from 'react';
import { Text, View } from 'react-native';
import { Container } from '@components';

import styles from './Manage.styles';

interface ManageProps {}

function ManageScreen({}: ManageProps) {
  return (
    <Container>
      <View style={styles.wrapper}>
        <Text>More text</Text>
      </View>
    </Container>
  );
}

export default ManageScreen;
