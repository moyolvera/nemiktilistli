import * as React from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { Container, GuestItem, SwitchSelector, Text } from '@components';
import { useLogScreen } from '@hooks';
import { people } from '@actions';
import { FilterType, PeopleEntry } from '@actions/people';
import { Feather } from '@expo/vector-icons';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from 'src/Navigator';

import styles from './Manage.styles';

interface ManageProps {}

function renderItem({ item }: { item: PeopleEntry }) {
  return <GuestItem person={item} />;
}

function ManageScreen({}: ManageProps) {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const [peopleData, setPeopleData] = React.useState<PeopleEntry[]>([]);
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

  function navigateToImport() {
    navigate('Import');
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
          <TouchableOpacity style={styles.addButton} onPress={navigateToImport}>
            <Feather name="plus" size={22} color="#000" />
          </TouchableOpacity>
          <SwitchSelector
            options={['Ambos', 'Kari', 'Moy']}
            selected={selected}
            onChangeIndex={onChangeIndex}
          />
          {peopleData.length > 0 ? (
            <FlatList
              data={peopleData}
              renderItem={renderItem}
              keyExtractor={(item: PeopleEntry) => item.token}
            />
          ) : (
            <Text style={styles.noData}>No hay invitados</Text>
          )}
        </View>
      </ScrollView>
    </Container>
  );
}

export default ManageScreen;
