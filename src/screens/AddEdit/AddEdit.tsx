import * as React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Container, Input, Switch, Text, Button } from '@components';
import { InputHandlers } from '@components/Input/Input';
import { useToast } from 'react-native-toast-notifications';
import { savePeople } from '@actions/people';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList, ScreenNavigationProp } from 'src/Navigator';
import styles from './AddEdit.styles';
import { SwitchHandlers } from '@components/Switch/Switch';

interface AddEditProps {}

function SwitchWrapper({
  token,
  children
}: {
  token?: string;
  children: React.ReactNode;
}) {
  return token ? (
    <View style={styles.switch}>{children}</View>
  ) : (
    <View style={styles.switch}>{children}</View>
  );
}

function AddEditScreen({}: AddEditProps) {
  const { params: { guest } = {} } =
    useRoute<RouteProp<RootStackParamList, 'AddEdit'>>();
  const toast = useToast();
  const { navigate } = useNavigation<ScreenNavigationProp>();

  const nameRef = React.useRef<InputHandlers>(null);
  const phoneRef = React.useRef<InputHandlers>(null);
  const goodfatherRef = React.useRef<InputHandlers>(null);
  const messageRef = React.useRef<InputHandlers>(null);

  const answeredRef = React.useRef<SwitchHandlers>(null);
  const sensibleRef = React.useRef<SwitchHandlers>(null);
  const tutorialRef = React.useRef<SwitchHandlers>(null);
  const attendingRef = React.useRef<SwitchHandlers>(null);
  const isFromBrideRef = React.useRef<SwitchHandlers>(null);

  function validateFields() {
    if (
      !nameRef.current?.validate() ||
      !phoneRef.current?.validate() ||
      !goodfatherRef.current?.validate() ||
      !messageRef.current?.validate()
    ) {
      return;
    }

    return true;
  }

  function makePeopleEntry() {
    return {
      name: nameRef.current?.getValue() || '',
      phone: phoneRef.current?.getValue() || '',
      goodfather: goodfatherRef.current?.getValue() || '',
      message: messageRef.current?.getValue() || '',
      tutorial: Boolean(tutorialRef.current?.getValue()),
      attending: Boolean(attendingRef.current?.getValue()),
      isFromBride: Boolean(isFromBrideRef.current?.getValue()),
      answered: Boolean(answeredRef.current?.getValue()),
      sensible: Boolean(sensibleRef.current?.getValue())
    };
  }

  async function submit() {
    const isValid = validateFields();
    if (!isValid) {
      toast.show('Algunos campos no estan correctos', {
        duration: 2000,
        type: 'danger'
      });
      return;
    }

    const peopleEntry = makePeopleEntry();

    const isSaved = await savePeople(peopleEntry, guest?.token);
    if (isSaved) {
      toast.show('Datos guardados', { type: 'success' });
      navigate('Manage');
    } else {
      toast.show('Error al guardar los datos', { type: 'danger' });
    }
  }

  React.useLayoutEffect(() => {
    if (guest) {
      nameRef.current?.setValue(guest.name || '');
      phoneRef.current?.setValue(guest.phone || '');
      goodfatherRef.current?.setValue(guest.goodfather || '');
      messageRef.current?.setValue(guest.message || '');

      answeredRef.current?.setValue(guest.answered);
      sensibleRef.current?.setValue(guest.sensible);
      tutorialRef.current?.setValue(guest.tutorial);
      attendingRef.current?.setValue(guest.attending);
      isFromBrideRef.current?.setValue(guest.isFromBride);
    }
  }, [guest]);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <View style={styles.headerWrapper}>
            <TouchableOpacity
              style={styles.headerItem}
              onPress={() => navigate('Manage')}>
              <Feather name="chevron-left" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerItem}
              onPress={() => navigate('Import')}>
              <Feather name="file-plus" size={20} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Agregar</Text>
          <Text style={styles.subtitle}>Invitado</Text>
          <Input ref={nameRef} label="Nombre" required />
          <Input ref={phoneRef} label="Telefono" required />
          <Input ref={goodfatherRef} label="Madrina" required={false} />
          <Text style={styles.status}>Status:</Text>
          <SwitchWrapper token={guest?.token}>
            <Switch ref={answeredRef} label="Contestó" />
            <Switch ref={attendingRef} label="Asistirá" />
            <Switch ref={sensibleRef} label="Sensible" />
            <Switch ref={tutorialRef} label="Tutorial" />
            <Switch ref={isFromBrideRef} label="De la novia" />
          </SwitchWrapper>
          <Input
            ref={messageRef}
            label="Mensaje"
            required={false}
            multiline
            numberOfLines={3}
          />
          <View style={styles.button}>
            <Button label="Guardar" onPress={submit} />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}

export default AddEditScreen;
