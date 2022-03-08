import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerItem: {
    width: 30
  },
  title: {
    flex: 1,
    fontFamily: 'Quattrocento-Regular',
    fontSize: 22,
    marginTop: 20,
    lineHeight: 14
  },
  subtitle: {
    flex: 1,
    fontFamily: 'Quattrocento-Bold',
    fontSize: 28
  },
  status: {
    fontFamily: 'Nunito-Regular',
    color: '#999',
    marginVertical: 8
  },
  switch: {
    height: 130,
    justifyContent: 'space-between',
    paddingLeft: 60
  },
  button: { marginTop: 20 }
});

export default styles;
