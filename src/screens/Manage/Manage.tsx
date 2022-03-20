import * as React from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { ActionsToolbar, Container, GuestItem, Text } from '@components';
import { useLogScreen } from '@hooks';
import { filterPeopleData, FilterType, PeopleEntry } from '@actions/people';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from 'src/Navigator';

import styles from './Manage.styles';
import { AnimatePresence, MotiView } from 'moti';
import { PeopleContext } from '@context/PeopleContext';

interface ManageProps {}

function renderItem({ item }: { item: PeopleEntry }) {
  return <GuestItem person={item} />;
}

function ManageScreen({}: ManageProps) {
  useLogScreen({ screenName: 'Manage' });
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const { peopleData, getPeopleData } = React.useContext(PeopleContext);
  const [localPeopleData, setLocalPeopleData] = React.useState<PeopleEntry[]>(
    []
  );
  const [filters, setFilters] = React.useState<FilterType | undefined>(
    undefined
  );

  function navigateToAddEdit() {
    navigate('AddEdit', { guest: undefined });
  }

  React.useEffect(() => {
    const filtedNewData = filterPeopleData(peopleData, filters);
    setLocalPeopleData(filtedNewData);
  }, [peopleData, filters]);

  React.useEffect(() => {
    if (getPeopleData && peopleData.length === 0) {
      getPeopleData();
    }
  }, []);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Lista de</Text>
          <Text style={styles.postTitle}>Invitados</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={navigateToAddEdit}>
            <Feather name="plus" size={22} color="#000" />
          </TouchableOpacity>
          <AnimatePresence>
            {filters && Object.keys(filters).length > 0 ? (
              <MotiView
                style={styles.filterButton}
                animate={{ opacity: 1 }}
                from={{ opacity: 0 }}
                exit={{ opacity: 0 }}>
                <TouchableOpacity onPress={() => setFilters(undefined)}>
                  <Feather
                    name="filter"
                    size={22}
                    color="rgba(158, 115, 255, 0.7)"
                  />
                </TouchableOpacity>
              </MotiView>
            ) : null}
          </AnimatePresence>
          <ActionsToolbar setFilters={setFilters} />
          {localPeopleData.length > 0 ? (
            <>
              <Text
                style={
                  styles.counter
                }>{`${localPeopleData.length} personas`}</Text>
              <FlatList
                data={localPeopleData}
                renderItem={renderItem}
                keyExtractor={(item: PeopleEntry) => item.token}
              />
            </>
          ) : (
            <Text style={styles.noData}>No hay invitados</Text>
          )}
        </View>
      </ScrollView>
    </Container>
  );
}

export default ManageScreen;
