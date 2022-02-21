import * as React from 'react';
import { ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList, ScreenNavigationProp } from 'src/Navigator';
import { Container, Header, Footer, Locations } from '@components/index';
import { Attending, Itinerary, Menu } from '@modals/index';
import { useLogScreen } from '@hooks/index';
import { people } from '@actions/index';
import { PeopleEntry } from '@actions/people';

interface HomeProps {}

function HomeScreen({}: HomeProps) {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const { params } = useRoute<RouteProp<RootStackParamList, 'Home'>>();

  const [showItinerary, setShowItinerary] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  const [showAttending, setShowAttending] = React.useState(false);
  const [peopleData, setPeopleData] = React.useState<PeopleEntry>();

  useLogScreen({ screenName: 'Home' });

  function toggleItinerary() {
    setShowItinerary(!showItinerary);
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function toggleAttending() {
    setShowAttending(!showAttending);
  }

  function toggleInfo() {
    navigate('Details');
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
        <Locations />
        <Footer
          openItinerary={toggleItinerary}
          openMenu={toggleMenu}
          openInfo={toggleInfo}
        />
      </ScrollView>
      <Itinerary visible={showItinerary} closeModal={toggleItinerary} />
      <Menu visible={showMenu} closeModal={toggleMenu} />
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
