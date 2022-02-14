import * as React from 'react';
import { ScrollView } from 'react-native';
import { Container, Header, Footer, Locations } from '@components';
import { Itinerary, Menu } from '@modals';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList, ScreenNavigationProp } from 'src/Navigator';

interface HomeProps {}

function HomeScreen({}: HomeProps) {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const { params } = useRoute<RouteProp<RootStackParamList, 'Home'>>();

  const [showItinerary, setShowItinerary] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  function toggleItinerary() {
    setShowItinerary(!showItinerary);
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function toggleInfo() {
    navigate('Details');
  }

  // console.log(params);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header guest="Don Perignon" />
        <Locations />
        <Footer
          openItinerary={toggleItinerary}
          openMenu={toggleMenu}
          openInfo={toggleInfo}
        />
      </ScrollView>
      <Itinerary visible={showItinerary} closeModal={toggleItinerary} />
      <Menu visible={showMenu} closeModal={toggleMenu} />
    </Container>
  );
}

export default HomeScreen;
