import * as React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Container, Text } from '@components';
import { useLogScreen } from '@hooks';
import { RootStackParamList, ScreenNavigationProp } from 'src/Navigator';
import styles from './Details.styles';

interface DetailsProps {}

function DetailsScreen({}: DetailsProps) {
  const {
    params: { isSensible }
  } = useRoute<RouteProp<RootStackParamList, 'Details'>>();

  const { canGoBack, goBack, navigate } = useNavigation<ScreenNavigationProp>();
  useLogScreen({ screenName: 'Details' });

  function handleGoBack() {
    if (canGoBack()) {
      goBack();
      return;
    }

    navigate('Home');
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={handleGoBack}>
            <Feather name="chevron-left" size={26} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Informacion General</Text>
          <View style={styles.separator} />
          <Text style={styles.subtitle}>CONFIRMAR ASISTENCIA</Text>
          <Text style={styles.info}>
            Favor de confirmar su asistencia o no asistencia a mas tardar el dia
            1 de abril de 2022 para elaborar reservar su lugar. Si no se
            confirma el lugar sera reasignado y entregado a otra persona
          </Text>
          <Text style={styles.info}>
            Los asientos se reservan y asignan por persona, por lo que si
            confirma su asistencia, consideramos el compromiso de su parte para
            que no se pierda el asiento.
          </Text>
          {!isSensible && (
            <>
              <Text style={styles.subtitle}>NO NIÑOS 2-17 AÑOS</Text>
              <Text style={styles.info}>Excepcion para niños de brazos.</Text>
              <Text style={styles.info}>
                Por motivos de seguridad y costos no es posible la asistencia de
                niños de entre 2 y 18 años. El recinto se encuentra en un lago y
                tiene una piscina, ademas los meseros se encontraran caminando
                con espadas en sus manos repartiendo la carne, todo esto resulta
                peligroso para los niños
              </Text>
            </>
          )}
          <Text style={styles.subtitle}>ALIMENTOS</Text>
          <Text style={styles.info}>
            El servicio de banquetes dara comienzo a las 19:00 hrs y terminara a
            las 21:00 hrs sin excepciones.
          </Text>
          <Text style={styles.info}>
            El banquete constara de una entrada de verduras, un plato fuerte
            basado en cortes de carne tipo espadas brasileñas y un postre de un
            sandwich de helado. Si se es alergico a algun alimento favor de
            reportarlo antes de 15 de abril.
          </Text>
          <Text style={styles.subtitle}>MEDIDAS DE HIGIENE</Text>
          <Text style={styles.info}>
            Por motivos de la situacion de emergencia internacional se le pedira
            contar con su cubrebocas mientras no se este consumiendo alimentos,
            asi como respetar los protocolos de la aplicacion de gel
            antibacterial
          </Text>
          <Text style={styles.subtitle}>BYOB Y REGALOS</Text>
          <Text style={styles.info}>
            Se agradece de antemano los buenos deseos e intenciones, no es
            necesario acudir con presentes para la ocacion pero por motivos de
            logistica se recomienda traer su propia botella
          </Text>
          {!isSensible && (
            <>
              <Text style={styles.subtitle}>VESTIMENTA</Text>
              <Text style={styles.info}>
                Se recomienda vestimenta formal de etiqueta
              </Text>
            </>
          )}
        </View>
      </ScrollView>
    </Container>
  );
}

export default DetailsScreen;
