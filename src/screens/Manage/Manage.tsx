import * as React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { Container, GuestItem, SwitchSelector } from '@components';
import { useLogScreen } from '@hooks';
import { people } from '@actions';
import { FilterType, PeopleEntry } from '@actions/people';
import { useToast } from 'react-native-toast-notifications';

import styles from './Manage.styles';

interface ManageProps {}

function renderItem({ item }: { item: PeopleEntry }) {
  return <GuestItem person={item} />;
}

function ManageScreen({}: ManageProps) {
  const [peopleData, setPeopleData] = React.useState<PeopleEntry[]>();
  const [selected, setSelected] = React.useState(0);
  const toast = useToast();
  useLogScreen({ screenName: 'Manage' });

  function savePeopleData(data: PeopleEntry[]) {
    setPeopleData(data);
  }

  function handleError() {
    toast.show('Algo salio mal', { type: 'danger' });
  }

  function loadData(filter?: FilterType) {
    people
      .getAllPeopleEntries(filter)
      .then(savePeopleData, handleError)
      .catch(handleError);
  }

  function onChangeIndex(index: number) {
    setSelected(index);
  }

  React.useEffect(() => {
    const params = {
      isFromBride: selected === 1
    } as FilterType;

    loadData(selected !== 0 ? params : undefined);
  }, [selected]);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Lista de</Text>
          <Text style={styles.postTitle}>Invitados</Text>
          <SwitchSelector
            options={['Ambos', 'Kari', 'Moy']}
            selected={selected}
            onChangeIndex={onChangeIndex}
          />
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
