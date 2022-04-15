import * as React from 'react';
import { ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList, ScreenNavigationProp } from 'src/Navigator';
import { Container, Header, Footer, Locations } from '@components';
import {
  Attending,
  Directions,
  Itinerary,
  Menu,
  QRModal,
  Tutorial
} from '@modals';
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
  const [showTutorial, setShowTutorial] = React.useState(false);
  const [showQRModal, setShowQRModal] = React.useState(false);
  const [peopleData, setPeopleData] = React.useState<PeopleEntry>();

  useLogScreen({ screenName: 'Home' });

  function toggleItinerary() {
    setShowItinerary(!showItinerary);
  }

  function toggleDirections() {
    setShowDirections(!showDirections);
  }

  function toggleTutorial() {
    setShowTutorial(!showTutorial);
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function toggleAttending() {
    setShowAttending(!showAttending);
  }

  function toggleQRModal() {
    setShowQRModal(!showQRModal);
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
    if (!peopleData) {
      return;
    }

    if (peopleData.answered) {
      return;
    }

    if (showAttending) {
      return;
    }

    if (peopleData.tutorial) {
      setShowTutorial(true);
    }
  }, [peopleData]);

  React.useEffect(() => {
    loadUserData();
  }, [showAttending]);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          guest={peopleData}
          toggleAttending={toggleAttending}
          toggleQR={toggleQRModal}
        />
        <Locations guest={peopleData} toggleDirections={toggleDirections} />
        <Footer
          sensible={peopleData?.sensible}
          openItinerary={toggleItinerary}
          openMenu={toggleMenu}
          openInfo={toggleInfo}
          openGiftTable={toggleQRModal}
        />
      </ScrollView>
      <Itinerary visible={showItinerary} closeModal={toggleItinerary} />
      <Menu visible={showMenu} closeModal={toggleMenu} />
      <Directions visible={showDirections} closeModal={toggleDirections} />
      <Tutorial visible={showTutorial} closeModal={toggleTutorial} />
      <QRModal
        name={`${peopleData?.name}`}
        data={[
          {
            title: 'Confirma tu asistencia',
            subtitle:
              'Por favor, escanea el codigo para confirmar tu asistencia tan pronto te sea posible',
            qrValue: `https://kenailabs.com/invitation/${peopleData?.token}`
          },
          {
            title: 'Mesa de regalos',
            qrValue:
              'https://www.amazon.com.mx/hz/wishlist/ls/2RKK5C8IQKS0W?ref_=wl_share'
          }
        ]}
        visible={showQRModal}
        closeModal={toggleQRModal}
      />
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
