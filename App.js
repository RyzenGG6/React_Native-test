import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,StackNavigator ,Button,TouchableOpacity,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import home from './src/screens/home';
import auth from '@react-native-firebase/auth';


export default function App() {
  return (
    
    <LinearGradient colors={['#34e89e', '#0f3443']} style={styles.container}>
      <StackNavigator>
        <StackNavigator.Screen name="home" component={home}/>
      <SafeAreaView style={styles.container}>
      <View style={{
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom: 20,
  marginTop: 150, // Add marginTop to move the entire block down
}}>
  <Text style={{
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  }}>Login</Text>
</View>

        
        <View style={styles.login}>
      



          <TextInput style={{
            height: 40,
            width: 270,
            marginTop: 100,
            backgroundColor: 'white',
            borderRadius: 20,
            position: 'absolute'

          }}
            placeholder='Enter Email'>
            
          </TextInput>
          <TextInput style={{
          
  height: 40,
  width: 270,
  marginTop: 20,
  backgroundColor: 'white',
  borderRadius: 20,

}}

placeholder='Enter Password'
// secureTextEntry="true"
/>
          </View>
          <View style={styles.submit}>

      
<Button
title='Submit'
onPress={()=>{

navigaton.navigate('home');
}

}
/>

</View>
      </SafeAreaView>
      </StackNavigator>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 submit:{
  marginBottom:350,
  marginLeft:120,
  marginTop:10,
  padding: 5,
  height: 55,
  width: 100,
 },

  login: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 170,
  },
});
