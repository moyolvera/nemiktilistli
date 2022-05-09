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
  actionWrapper: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    marginTop: 8,
    paddingTop: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6
  },
  actionText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    marginHorizontal: 8
  },
  container: {
    backgroundColor: '#fff',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    shadowColor: '#6060a0',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  person: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
    width: 20,
    justifyContent: 'space-between'
  }
});

export default styles;
