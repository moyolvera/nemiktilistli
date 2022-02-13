import * as React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, Footer, Locations } from '@components';
import { Itinerary, Menu } from '@modals';
import { ScreenNavigationProp } from '../../Navigator';

interface HomeProps {}

function HomeScreen({}: HomeProps) {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const [showItinerary, setShowItinerary] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  function toggleItinerary() {
    setShowItinerary(!showItinerary);
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <Container>
      <ScrollView>
        <Header guest="Don Fiscal" />
        <Locations />
        <Footer openItinerary={toggleItinerary} openMenu={toggleMenu} />
      </ScrollView>
      <Itinerary visible={showItinerary} closeModal={toggleItinerary} />
      <Menu visible={showMenu} closeModal={toggleMenu} />
    </Container>
  );
}

export default HomeScreen;
