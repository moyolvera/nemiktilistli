import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 550,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingBottom: 8,
    alignItems: 'center'
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
    marginTop: 14,
    fontSize: 20
  },
  separator: {
    textAlign: 'center',
    fontFamily: 'Quattrocento-Regular',
    fontSize: 10,
    marginBottom: 0
  },
  button: {
    shadowColor: '#6060a0',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    paddingLeft: 5,
    fontFamily: 'Quattrocento-Regular',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 10
  }
});

export default styles;
