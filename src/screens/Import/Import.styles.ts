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
  separator: {
    marginTop: 16
  },
  label: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    marginBottom: 8
  },
  noData: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: '#999',
    marginBottom: 8
  },
  addButton: {
    position: 'absolute',
    top: 28,
    right: 16
  }
});

export default styles;
