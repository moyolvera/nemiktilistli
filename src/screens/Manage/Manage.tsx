import * as React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { Container, GuestItem } from '@components';
import { useLogScreen } from '@hooks';
import { people } from '@actions';
import { PeopleEntry } from '@actions/people';
import { useToast } from 'react-native-toast-notifications';

import styles from './Manage.styles';

interface ManageProps {}

function renderItem({ item }: { item: PeopleEntry }) {
  return <GuestItem person={item} />;
}

function ManageScreen({}: ManageProps) {
  const [peopleData, setPeopleData] = React.useState<PeopleEntry[]>();
  const toast = useToast();
  useLogScreen({ screenName: 'Manage' });

  function savePeopleData(data: PeopleEntry[]) {
    setPeopleData(data);
  }

  function handleError() {
    toast.show('Algo salio mal', { type: 'danger' });
  }

  React.useEffect(() => {
    people
      .getAllPeopleEntries()
      .then(savePeopleData, handleError)
      .catch(handleError);
  }, []);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Lista de</Text>
          <Text style={styles.postTitle}>Invitados</Text>
          <FlatList
            data={peopleData}
            renderItem={renderItem}
            keyExtractor={(item: PeopleEntry) => item.token}
          />
        </View>
      </ScrollView>
    </Container>
  );
}

export default ManageScreen;
