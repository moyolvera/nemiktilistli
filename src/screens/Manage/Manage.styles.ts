import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 30,
    padding: 20
  },
  title: {
    fontSize: 22,
    fontFamily: 'Quattrocento-Regular',
    lineHeight: 14
  },
  postTitle: {
    fontSize: 28,
    fontFamily: 'Quattrocento-Bold',
    marginBottom: 16
  },
  person: {
    backgroundColor: '#fff',
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
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
  }
});

export default styles;
