import * as React from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { ActionsToolbar, Container, GuestItem, Text } from '@components';
import { useLogScreen } from '@hooks';
import { people } from '@actions';
import { FilterType, PeopleEntry } from '@actions/people';
import { Feather } from '@expo/vector-icons';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from 'src/Navigator';
import { RefreshControl } from 'react-native-web-refresh-control';

import styles from './Manage.styles';
import { AnimatePresence, MotiView } from 'moti';

interface ManageProps {}

function renderItem({ item }: { item: PeopleEntry }) {
  return <GuestItem person={item} />;
}

function ManageScreen({}: ManageProps) {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const [peopleData, setPeopleData] = React.useState<PeopleEntry[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const [filters, setFilters] = React.useState<FilterType | undefined>(
    undefined
  );

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
      .catch(handleError)
      .finally(() => setRefreshing(false));
  }

  function navigateToAddEdit() {
    navigate('AddEdit', { guest: undefined });
  }

  function refreshScreen(avoidRefresh?: boolean) {
    if (!avoidRefresh) {
      setRefreshing(true);
    }

    loadData(filters);
  }

  React.useEffect(() => {
    console.log(filters);

    refreshScreen(true);
  }, [filters]);

  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl onRefresh={refreshScreen} refreshing={refreshing} />
        }>
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
          {peopleData.length > 0 ? (
            <>
              <Text
                style={styles.counter}>{`${peopleData.length} personas`}</Text>
              <FlatList
                data={peopleData}
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
