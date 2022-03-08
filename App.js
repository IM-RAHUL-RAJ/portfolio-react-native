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
    <Stack.Screen name="Home" options={{headerShown:false}}>
    {(props)=><Home {...props} channelName={"Rahul's Company"}/>}
    </Stack.Screen>


    <Stack.Screen name="Skill" component={Skill} options={{headerTitleStyle:{fontSize:30},
    headerTitle:"Skills",
    headerTitleAlign:"center",
    }}/>
    <Stack.Screen name="Student" component={UserData} options={{headerTitleStyle:{fontSize:30},
    headerTitle:"Students",
    headerTitleAlign:"center",
    }}/>
    <Stack.Screen name="About" component={About} options={{headerTitleStyle:{fontSize:30},
    headerTitle:"About",
    headerTitleAlign:"center",
    }}/>
    <Stack.Screen name="Contact" component={Contact} options={{headerTitleStyle:{fontSize:30},
    headerTitle:"Contact Us",
    headerTitleAlign:"center",
    }}/>

    </Stack.Navigator>
    
    
    </NavigationContainer>
      
  );
}


