import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const MenuItems = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.buttonStyle}
      onPress={()=>navigation.navigate("About")}
      >
          <Text>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}
      onPress={()=>navigation.navigate("Student")}
      >
          <Text>Student</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}
      onPress={()=>navigation.navigate("Skill")}
      >
          <Text>Skill</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}
      onPress={()=>navigation.navigate("Contact")}
      >
          <Text>Contact US</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({});

export default MenuItems