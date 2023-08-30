import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import {
  BaiJamjuree_700Bold,
} from '@expo-google-fonts/bai-jamjuree'


export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    // TODO: Fazer funcionar o tailwind no react native
    <View style={styles.container} className=" flex-1 items-center justify-center bg-gray-900">
      <Text style={styles.title } className='text-5xl font-bold text-gray-50'>Spacetime</Text>
      <Text style={styles.alt } className='text-2xl font-bold text-gray-50'>Uma viagem no tempo</Text>

      <StatusBar style="light" translucent />
    </View>
  )
}
const styles = StyleSheet.create({
  
  body:{
    fontFamily: 'Roboto_400Regular',
  },
  alt:{
    fontFamily: 'BaiJamjuree_700Bold',
    color: '#eaeaea',
    fontWeight: '200',
    fontSize: 30,
  },

  container: {
    flex: 1,
    backgroundColor: '#121215',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'BaiJamjuree_700Bold',
    color: '#eaeaea',
    fontWeight: '900',
    fontSize: 56,
  },
})
