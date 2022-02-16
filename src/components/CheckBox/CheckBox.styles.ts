import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 22
  },
  checkContainer: {
    width: 40,
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBorder: {
    alignSelf: 'flex-end',
    width: 18,
    height: 18,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 1
  },
  check: {
    width: '100%',
    flex: 1,
    backgroundColor: '#854fff',
    borderRadius: 10
  },
  labelWrapper: {
    flex: 1,
    paddingTop: 2
  },
  label: {
    fontFamily: 'Nunito-Regular'
  }
});

export default styles;
