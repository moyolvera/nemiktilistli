import * as React from 'react';
import { ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList, ScreenNavigationProp } from 'src/Navigator';
import { Container, Header, Footer, Locations } from '@components';
import { Attending, Directions, Itinerary, Menu } from '@modals';
import { useLogScreen } from '@hooks';
import { people } from '@actions';
import { PeopleEntry } from '@actions/people';

interface HomeProps {}

function HomeScreen({}: HomeProps) {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const { params } = useRoute<RouteProp<RootStackParamList, 'Home'>>();

  const [showItinerary, setShowItinerary] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  const [showAttending, setShowAttending] = React.useState(false);
  const [showDirections, setShowDirections] = React.useState(false);
  const [peopleData, setPeopleData] = React.useState<PeopleEntry>();

  useLogScreen({ screenName: 'Home' });

  function toggleItinerary() {
    setShowItinerary(!showItinerary);
  }

  function toggleDirections() {
    setShowDirections(!showDirections);
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function toggleAttending() {
    setShowAttending(!showAttending);
  }

  function toggleInfo() {
    navigate('Details', { isSensible: peopleData?.sensible });
  }

  async function loadUserData() {
    if (params?.token) {
      const data = await people.getPeopleEntry(params.token);
      if (data) {
        setPeopleData(data);
      }
    }
  }

  React.useEffect(() => {
    loadUserData();
  }, [showAttending]);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header guest={peopleData} toggleAttending={toggleAttending} />
        <Locations toggleDirections={toggleDirections} />
        <Footer
          sensible={peopleData?.sensible}
          openItinerary={toggleItinerary}
          openMenu={toggleMenu}
          openInfo={toggleInfo}
        />
      </ScrollView>
      <Itinerary visible={showItinerary} closeModal={toggleItinerary} />
      <Menu visible={showMenu} closeModal={toggleMenu} />
      <Directions visible={showDirections} closeModal={toggleDirections} />
      {peopleData && (
        <Attending
          visible={showAttending}
          closeModal={toggleAttending}
          guest={peopleData}
        />
      )}
    </Container>
  );
}

export default HomeScreen;
