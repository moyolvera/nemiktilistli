import * as React from 'react';
import { Container, SwitchSelector, Text, Switch } from '@components';
import { View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { ImportPeopleEntry, PeopleEntry } from '@actions/people';
import { Feather } from '@expo/vector-icons';
import { LoadData } from '@modals';
import { people } from '@actions';
import { useToast } from 'react-native-toast-notifications';

import styles from './Import.styles';

interface ImportProps {}

function ImportScreen({}: ImportProps) {
  const [peopleData, setPeopleData] = React.useState<PeopleEntry[]>([]);
  const [selected, setSelected] = React.useState(0);
  const [showLoadData, setShowLoadData] = React.useState(false);
  const toast = useToast();

  function onChangeIndex(index: number) {
    setSelected(index);
  }

  function toggleLoadData() {
    setShowLoadData(!showLoadData);
  }

  function closeLoadData(data?: ImportPeopleEntry[]) {
    console.log(data);

    if (!data) {
      toggleLoadData();
      return;
    }

    const people = data.map(entry => ({
      ...entry,
      tutorial: Boolean(entry.tutorial),
      attending: false,
      answered: false,
      message: '',
      token: `${entry.name}${entry.phone}`,
      isFromBride: selected === 1,
      sensible: false
    }));

    setPeopleData(people);
    toggleLoadData();
  }

  React.useEffect(() => {
    const people = peopleData.map(entry => ({
      ...entry,
      isFromBride: selected === 1
    }));

    setPeopleData(people);
  }, [selected]);

  function saveData() {
    people
      .savePeopleEntries(peopleData)
      .then(() => {
        toast.show('Datos guardados', { type: 'success' });
        setPeopleData([]);
      })
      .catch(console.error);
  }

  function renderItem({ item, index }: { item: PeopleEntry; index: number }) {
    function onChangeTutorial(value: boolean) {
      const people = [...peopleData];
      people[index].tutorial = value;
      setPeopleData(people);
    }

    function onChangeConfirmed(value: boolean) {
      const people = [...peopleData];
      people[index].attending = value;
      people[index].answered = true;
      setPeopleData(people);
    }

    function onChangeSensible(value: boolean) {
      const people = [...peopleData];
      people[index].sensible = value;
      setPeopleData(people);
    }

    return (
      <View style={styles.itemWrapper}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemNumber}>{item.phone}</Text>
        <View style={styles.separator} />
        {!!item.goodfather ? (
          <Text style={styles.itemNumber}>{item.goodfather}</Text>
        ) : null}
        <View style={styles.itemSeparator} />
        <View style={styles.itemActions}>
          <Switch
            label="Confirmado"
            initialValue={item.attending}
            onChangeValue={onChangeConfirmed}
          />
          <Switch
            label="Sensible"
            initialValue={item.sensible}
            onChangeValue={onChangeSensible}
          />
          <Switch
            label="Tutorial"
            initialValue={item.tutorial}
            onChangeValue={onChangeTutorial}
          />
        </View>
      </View>
    );
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Agregar</Text>
          <Text style={styles.postTitle}>Invitados</Text>
          <View style={styles.buttonsWrapper}>
            <TouchableOpacity onPress={toggleLoadData}>
              <Feather name="file-plus" size={22} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={saveData}>
              <Feather name="send" size={22} color="#000" />
            </TouchableOpacity>
          </View>
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
      <LoadData visible={showLoadData} closeModal={closeLoadData} />
    </Container>
  );
}

export default ImportScreen;
