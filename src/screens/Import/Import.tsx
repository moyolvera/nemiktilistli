import * as React from 'react';
import { Container, SwitchSelector } from '@components';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { PeopleEntry } from '@actions/people';

import styles from './Import.styles';
import { Feather } from '@expo/vector-icons';

interface ImportProps {}

function renderItem({ item }: { item: PeopleEntry }) {
  return <></>;
}

function ImportScreen({}: ImportProps) {
  const [peopleData, setPeopleData] = React.useState<PeopleEntry[]>([]);
  const [selected, setSelected] = React.useState(0);

  function onChangeIndex(index: number) {
    setSelected(index);
  }

  function importData() {}

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Agregar</Text>
          <Text style={styles.postTitle}>Invitados</Text>
          <TouchableOpacity style={styles.addButton} onPress={importData}>
            <Feather name="file-plus" size={22} color="#000" />
          </TouchableOpacity>
          <View style={styles.separator} />
          <Text style={styles.label}>Invitados de:</Text>
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

export default ImportScreen;
