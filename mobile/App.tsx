import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    // TODO: Fazer funcionar o tailwind no react native
    <View style={styles.container} className=" flex-1 items-center justify-center bg-gray-900">
      <Text style={styles.text} className='text-5xl font-bold text-gray-50'>Spacetime</Text>

      <StatusBar style="light" translucent />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#f9fafb',
    fontWeight: '900',
    fontSize: 56,
  },
})
