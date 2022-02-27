import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    top: 28,
    right: 16
  },
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
  noData: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: '#999',
    marginBottom: 8
  }
});

export default styles;
