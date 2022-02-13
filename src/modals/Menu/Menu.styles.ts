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
    width: 250,
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden'
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
    borderRadius: 50
  },
  cover: {
    width: 250,
    height: 210,
    position: 'absolute',
    zIndex: -1
  },
  gradient: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    padding: 8,
    width: '100%',
    height: 400,
    justifyContent: 'flex-end'
  },
  title: {
    fontFamily: 'GreatVibes-Regular',
    fontSize: 34
  },
  rowWrapper: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10
  },
  iconWrapper: {
    width: 60,
    paddingRight: 8,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  item: {
    flex: 1
  },
  itemTitle: {
    fontFamily: 'Quattrocento-Bold',
    fontSize: 12,
    textTransform: 'uppercase'
  },
  itemSubtitle: {
    fontFamily: 'Quattrocento-Regular',
    fontSize: 12
  },
  alergicButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 14
  },
  alergicText: {
    paddingTop: 1,
    paddingLeft: 8,
    fontFamily: 'Quattrocento-Bold',
    fontSize: 10,
    textTransform: 'uppercase'
  }
});

export default styles;
