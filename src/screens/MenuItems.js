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
          <Text style={styles.textStyle}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}
      onPress={()=>navigation.navigate("Student")}
      >
          <Text style={styles.textStyle}>Student</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}
      onPress={()=>navigation.navigate("Skill")}
      >
          <Text style={styles.textStyle}>Skill</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}
      onPress={()=>navigation.navigate("Contact")}
      >
          <Text style={styles.textStyle}>Contact US</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    menuContainer:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        marginBottom:20,
    },
    textStyle:{
        textTransform: 'uppercase',
        fontWeight:'bold',
    }
});

export default MenuItems