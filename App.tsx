/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import CounterScreen from './src/redux/CounterScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(){

  return (
        // <View>
        //   <Text>hel</Text>
        // </View>

        <CounterScreen/>

        
      
  );
}

const styles = StyleSheet.create({
  
});

export default App;
