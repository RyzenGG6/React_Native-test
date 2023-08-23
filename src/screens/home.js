import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function home() {
  return (
    <LinearGradient colors={['#c33764', '#1d2671']} style={styles.container}>
      <SafeAreaView>
        <View style={styles.icon}>
          <Icon name="home" style={styles.menu} size={30} />
          <Icon name="search" style={styles.menu} size={30} />
        </View>
        <View style={styles.welcome}>
          <Text style={{ fontSize: 45, fontWeight: 'bold', color: 'grey' }}>
            Welcome Home

          </Text>
          <Icon name="search" size={20} color="#777" style={styles.icon} />
          <View style={styles.search}>
          <TextInput
          style={styles.searchbar}
          placeholder='Search'
          
          />
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search:{
    marginTop:20,
padding:10,
borderRadius:20,
backgroundColor:'grey'

  },
  searchbar:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',  

  },
  welcome: {
    padding: 40,


  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginLeft: 10,
  },
  menu: {
    color: '#f0ffff',
    padding: 20,
  },
});
