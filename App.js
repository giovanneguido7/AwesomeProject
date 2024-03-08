import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>7</Text>
      <View style={styles.button}> 
        <Button title='MAIS'/>
        <Button title='MENOS'/>
      </View>
      <StatusBar style='auto' />
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
  text: {
    color: '#000',
    fontSize: 60,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 150,

  },

});
