import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  blackHighlight: {
    borderBottomColor: 'black',
    borderBottomWidth: 2
  },
  cyanHighlight: {
    borderBottomColor: 'cyan',
    borderBottomWidth: 2
  },
  greenHighlight: {
    borderBottomColor: '#ff94ff',
    borderBottomWidth: 2
  },
  redHighlight: {
    borderBottomColor: 'red',
    borderBottomWidth: 2
  },
  orangeHighlight: {
    borderBottomColor: 'orange',
    borderBottomWidth: 2
  },
  yellowHighlight: {
    borderBottomColor: 'yellow',
    borderBottomWidth: 2
  },
  person: {
    backgroundColor: '#fff',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6060a0',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  status: {
    width: 35,
    height: '100%',
    justifyContent: 'center'
  },
  content: {
    flex: 1
  },
  personName: {
    fontFamily: 'Quattrocento-Bold'
  },
  personEmail: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12
  },
  actions: {
    flexDirection: 'row',
    width: 50,
    justifyContent: 'space-between'
  }
});

export default styles;
