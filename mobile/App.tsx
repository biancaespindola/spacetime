import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		//TODO: Fazer funcionar o tailwind no react native
		<View style={styles.container} className="bg-gray-900 flex-1">
			<Text style={styles.text}>Spacetime</Text>

			<StatusBar style="auto" />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#09090b',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#fafafa',
		fontWeight: '900',
		fontSize: 64,
	},
});
