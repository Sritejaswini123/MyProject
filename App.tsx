/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView,ScrollView,StyleSheet,Text, View, } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style = {styles.container}>
         <FlatCards/>
         <ElevatedCard/>
         <FancyCard/>
         <ContactList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}




const styles = StyleSheet.create({
  container: {
  
  
    
  }
});

export default App;
