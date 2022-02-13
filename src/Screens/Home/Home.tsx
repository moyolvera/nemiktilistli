import * as React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, Footer, Locations } from '@components';
import { Itinerary } from '@modals';
import { ScreenNavigationProp } from '../../Navigator';

interface HomeProps {}

function HomeScreen({}: HomeProps) {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const [showItinerary, setShowItinerary] = React.useState(false);

  function toggleItinerary() {
    setShowItinerary(!showItinerary);
  }

  return (
    <Container>
      <ScrollView>
        <Header guest="Don Fiscal" />
        <Locations />
        <Footer openItinerary={toggleItinerary} />
      </ScrollView>
      <Itinerary visible={showItinerary} closeModal={toggleItinerary} />
    </Container>
  );
}

export default HomeScreen;
