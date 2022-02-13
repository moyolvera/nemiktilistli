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
    height: 260,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 24
  },
  close: {
    position: 'absolute',
    top: 14,
    right: 14
  },
  title: {
    fontFamily: 'GreatVibes-Regular',
    fontSize: 34
  },
  rowWrapper: {
    flexDirection: 'row',
    marginTop: 20
  },
  iconWrapper: {
    width: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    flex: 1,
    paddingLeft: 14
  },
  itemTitle: {
    fontFamily: 'DancingScript-Regular',
    fontSize: 18
  },
  itemDescription: {
    fontFamily: 'Quattrocento-Regular',
    fontSize: 12
  }
});

export default styles;
