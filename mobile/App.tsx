import { StatusBar } from 'expo-status-bar'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import {
  BaiJamjuree_700Bold,
} from '@expo-google-fonts/bai-jamjuree'

import blurBg from './assets/bg-blur.png'

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
    //<Text style={styles.title } className='text-5xl font-bold text-gray-50'>Spacetime</Text>
    //<Text style={styles.alt } className='text-2xl font-bold text-gray-50'>Uma viagem no tempo</Text>
    <ImageBackground imageStyle={{ opacity: 0.5 }} source={blurBg} style={styles.container} className="relative flex-1 items-center bg-gray-900">
  

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  
  title: {
    fontFamily: 'Roboto_700Bold',
    color: '#eaeaea',
    fontSize: 56,
  },
  body:{
    fontFamily: 'Roboto_400Regular',
  },
  alt:{
    fontFamily: 'BaiJamjuree_700Bold',
    color: '#eaeaea',
    fontSize: 30,
  },

  container: {
    flex: 1,
    backgroundColor: '#121215',
    alignItems: 'center',
    position: 'relative',	
  },
})
