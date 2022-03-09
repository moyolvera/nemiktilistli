import AsyncStorage from '@react-native-async-storage/async-storage';

function entity(value: string) {
  return value;
}

async function storeData(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    // saving error
    return false;
  }
}

async function readData(key: string, deserialize = entity) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value === null) {
      return false;
    }

    return deserialize(value);
  } catch (e) {
    // saving error
    return false;
  }
}

async function removeData(key: string) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    // saving error
    return false;
  }
}

export default {
  storeData,
  removeData,
  readData
};
