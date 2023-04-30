import AsyncStorage from '@react-native-async-storage/async-storage';


const getDataByKey = async (keyVal: string): Promise<boolean | null> => {
    try {
      const value = await AsyncStorage.getItem(keyVal)
      if(value !== null) {
        // console.log(value)
        return value === 'true'
      }else{
        // console.log(`Value for ${keyVal}`)
        return null
      }
    } catch(e) {
    //   console.log(`Error reading ${keyVal}`)
      return null
    }
}


const getStrByKey = async (keyVal: string): Promise<string> => {
  try {
    const value = await AsyncStorage.getItem(keyVal)
    if(value !== null) {
      // console.log(value)
      return value
    }else{
      // console.log(`Value for ${keyVal}`)
      return 'en'
    }
  } catch(e) {
  //   console.log(`Error reading ${keyVal}`)
    return 'en'
  }
}

const setDataByKey = async (keyVal: string, dataVal: string): Promise<boolean> => {
    // console.log(`${keyVal}: ${dataVal}`)
    try {
     await AsyncStorage.setItem(keyVal, dataVal)
     return true
    } catch(e) {
    //   console.log(`Error reading ${keyVal}`)
      return false
    }
}


export {
    getDataByKey,
    setDataByKey,
    getStrByKey
}