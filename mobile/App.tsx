import { StatusBar } from 'expo-status-bar'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import {
  BaiJamjuree_700Bold,
} from '@expo-google-fonts/bai-jamjuree'

import blurBg from './assets/bg-blur.png'
import Logo from './assets/spacetime-logo.svg'
import Stripes from './assets/stripes.svg'
import { styled } from 'nativewind'

const StyledStripes = styled(Stripes)

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
    <ImageBackground 
      imageStyle={{ position: 'absolute', left: '-100%'  }} 
      source={blurBg} style={styles.container} 
      className="relative px-8 flex-1 items-center bg-gray-900" 
    >
      <StyledStripes className="absolute left-2" style={styles.stripes} />

      <View 
        className="flex-1 items-center justify-center gap-6 "
        style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 1.5}}
      > 
        <Logo />

        <View
          className='space-y-2'
          style={{marginTop: 12, marginBottom: 12}}
        >
        <Text
          style={styles.title }
          className='text-center font-title text-2xl leading-tight text-gray-50'
        >
          Sua cápsula do tempo
        </Text>
        <Text
        style={styles.body}
          className='text-center font-body text-base leading-relaxed text-gray-100'
        >          
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</Text>
        </View>
      
        <TouchableOpacity
          activeOpacity={0.7}
          className='rounded-full bg-green-500 px-5 py-3'
          style={{borderRadius: 100, backgroundColor: "#04d361", paddingHorizontal: 20, paddingVertical: 12}}
        >
          <Text
          className='font-alt text-sm font-bold uppercase text-black'
          style={styles.alt}
          >
            COMEÇAR A CADASTRAR
          </Text>
        </TouchableOpacity>
      </View>

      <Text
      style={styles.footer}
        className=''
      >
          Feito com 💜 por Bianca no NLW da Rocketseat
      </Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  
  title: {
    fontFamily: 'Roboto_700Bold',
    color: '#eaeaea',
    fontSize: 24,
    lineHeight: 40,
    textAlign: 'center',
  },
  body:{
    fontFamily: 'Roboto_400Regular',
    color: '#bebebf',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 28,
  },
  alt:{
    fontFamily: 'BaiJamjuree_700Bold',
    color: '#000',
    fontSize: 16,
    textTransform: 'uppercase',
    
  },

  footer: {
    
  },

  container: {
    flex: 1,
    backgroundColor: '#121215',
    alignItems: 'center',
    position: 'relative',	
    paddingHorizontal: 64,
  },

  stripes: {
    	position: 'absolute',
      left: 8,
  }
})
