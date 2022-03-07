import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Home from './src/screens/Home.js'
import About from './src/screens/About.js'
import Contact from './src/screens/Contact.js'
import UserData from './src/screens/UserData.js'
import Skill from './src/screens/Skill.js'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
  const Stack=createNativeStackNavigator();
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name="Home" >
    {(props)=><Home {...props} channelName={"Rahul's Company"}/>}
    </Stack.Screen>


    <Stack.Screen name="Skill" component={Skill}/>
    <Stack.Screen name="Student" component={UserData}/>
    <Stack.Screen name="About" component={About}/>
    <Stack.Screen name="Contact" component={Contact}/>

    </Stack.Navigator>
    
    
    </NavigationContainer>
      
  );
}


