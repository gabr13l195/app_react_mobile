import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Esta es mi primera</Text>
      <Text>Aqui va mas texto</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ducimus. Quis rerum magni perspiciatis? Sit dolorum qui, 
        repellendus voluptas voluptatem sint ipsum ad expedita voluptate animi voluptates reprehenderit! Nesciunt, repudiandae.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
