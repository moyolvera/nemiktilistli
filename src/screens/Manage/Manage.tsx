import * as React from 'react';
import {
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Container, StatusIcon } from '@components';
import { useLogScreen } from '@hooks';
import { people } from '@actions';

import styles from './Manage.styles';
import { PeopleEntry } from '@actions/people';
import { useToast } from 'react-native-toast-notifications';

const MESSAGE =
  'Tenemos el gusto de invitarte en este dia tan especial para nosotros, esperamos nos puedas acompañar, por favor confirma tu asistencia.';

interface ManageProps {}

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

  function handleOnPress(data: PeopleEntry) {
    const compoundMessage = `Hola ${data.name}, ${MESSAGE}`;
    Linking.openURL(
      `https://api.whatsapp.com/send?phone=${data.phone}&text=${compoundMessage}`
    );
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
          {peopleData?.map((person: PeopleEntry) => (
            <TouchableOpacity
              key={person.token}
              style={styles.person}
              onPress={() => handleOnPress(person)}>
              <View style={styles.status}>
                <StatusIcon
                  answered={person.answered}
                  attending={person.attending}
                />
              </View>
              <View style={styles.content}>
                <Text style={styles.personName}>{person.name}</Text>
                <Text style={styles.personEmail}>{person.message}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </Container>
  );
}

export default ManageScreen;
