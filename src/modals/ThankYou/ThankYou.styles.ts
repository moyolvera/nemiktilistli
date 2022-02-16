import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: 500,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 310,
    minHeight: 310,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'GreatVibes-Regular',
    fontSize: 34,
    textAlign: 'center',
    padding: 14
  },
  description: {
    padding: 14,
    fontFamily: 'Quattrocento-Regular',
    textAlign: 'justify'
  },
  buttonShadow: {
    shadowColor: '#6060a0',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  button: {
    marginHorizontal: 14,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    paddingLeft: 5,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 10
  }
});

export default styles;
