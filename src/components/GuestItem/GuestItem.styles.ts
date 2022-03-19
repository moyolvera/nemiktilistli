import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  blackHighlight: {
    borderLeftColor: 'black',
    borderLeftWidth: 2
  },
  cyanHighlight: {
    borderLeftColor: 'cyan',
    borderLeftWidth: 2
  },
  greenHighlight: {
    borderLeftColor: '#ff94ff',
    borderLeftWidth: 2
  },
  redHighlight: {
    borderLeftColor: 'red',
    borderLeftWidth: 2
  },
  orangeHighlight: {
    borderLeftColor: 'orange',
    borderLeftWidth: 2
  },
  yellowHighlight: {
    borderLeftColor: 'yellow',
    borderLeftWidth: 2
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
