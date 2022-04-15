import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  qrButton: {
    position: 'absolute',
    left: -50,
    top: 5,
    width: 48,
    height: 48
  },
  wrapper: {
    width: '100%',
    height: 580,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingBottom: 8,
    alignItems: 'center'
  },
  invisibleButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    zIndex: 9999
  },
  transparent: {
    opacity: 0
  },
  title: {
    fontFamily: 'GreatVibes-Regular',
    fontSize: 65,
    lineHeight: 35
  },
  subtitle: {
    fontFamily: 'Nunito-Bold',
    letterSpacing: 5,
    fontSize: 18,
    marginBottom: 0
  },
  guest: {
    fontFamily: 'DancingScript-Regular',
    fontSize: 24,
    marginTop: 8
  },
  inviteIntro: {
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Quattrocento-Regular',
    letterSpacing: 2,
    lineHeight: 10,
    fontSize: 14,
    marginBottom: 0
  },
  inviteIntro2: {
    textAlign: 'center',
    fontFamily: 'Quattrocento-Regular',
    letterSpacing: 2,
    fontSize: 14,
    marginBottom: 0
  },
  date: {
    fontFamily: 'DancingScript-Regular',
    marginTop: 8,
    fontSize: 20
  },
  separator: {
    textAlign: 'center',
    fontFamily: 'Quattrocento-Regular',
    fontSize: 10,
    marginBottom: 0
  },
  like: {
    fontFamily: 'Quattrocento-Regular',
    fontSize: 10,
    lineHeight: 1,
    marginTop: 8
  },
  goodfather: {
    color: '#6060a0',
    fontFamily: 'DancingScript-Bold',
    fontSize: 20
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
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  label: {
    paddingLeft: 5,
    fontFamily: 'Quattrocento-Regular',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 10
  },
  loading: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
