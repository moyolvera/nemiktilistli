import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  container: {
    width: 340,
    height: 340,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 24,
    paddingHorizontal: 10
  },
  close: {
    top: 20,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  title: {
    fontFamily: 'GreatVibes-Regular',
    fontSize: 34,
    textAlign: 'center'
  },
  message: {
    marginTop: 14,
    fontFamily: 'Quattrocento-Regular',
    marginHorizontal: 14,
    fontSize: 14,
    color: '#212121',
    borderColor: '#cccccc',
    borderRadius: 5,
    borderWidth: 1,
    padding: 8
  },
  highlightMessage: {
    borderColor: '#6060a0',
    borderWidth: 2
  },
  detail: {
    paddingHorizontal: 14,
    fontFamily: 'Quattrocento-Regular',
    fontSize: 12,
    textAlign: 'justify',
    color: '#6e6e6e'
  },
  detailBold: {
    marginTop: 6,
    fontFamily: 'Quattrocento-Bold'
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
  },
  separator: {
    marginTop: 10
  }
});

export default styles;
