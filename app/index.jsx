import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import {Link} from 'expo-router'

// View -> UIView 
export default function App() {
  return (
    <View style={styles.container}>


      <Text style ={[styles.title] }> 
        The Number 1 
      </Text>

      <Text style = {{marginTop: 10, marginBottom: 30}}>
        The Game APP
      </Text>

      <View style ={styles.APP}>
        <Text>Hello, This is an APP.</Text>
      </View>

      <StatusBar style="auto"/>

      <Link href ="/About"> About Page</Link>
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
  title:{
    fontWeight: 'bold',
    fontSize: 18
  },
  APP:{
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 10,
    boxShadow: '4px 4px rgba(0,0,0,0.1)',
  },
});

