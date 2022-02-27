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
  buttonsWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 28,
    width: 60,
    justifyContent: 'space-between',
    right: 16
  },
  itemWrapper: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 8,
    padding: 8,

    shadowColor: '#6060a0',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  itemTitle: {
    fontFamily: 'Nunito-Bold'
  },
  itemNumber: {
    fontFamily: 'Quattrocento-Bold',
    fontSize: 16
  },
  itemSeparator: {
    marginVertical: 8,
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(230, 219, 255, 0.4)'
  },
  itemActions: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default styles;
