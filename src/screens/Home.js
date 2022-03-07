
import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react'
import MenuItems from './MenuItems.js'


const Home = (props) => {
    const Description ="lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lore";
    return (
      <View style={styles.mainContainer}>
       <View style={styles.homeTop}>
       <Image style={styles.headerImage}
         source={require("../../assets/pic1.jpg")}
         resizeMode="contain"
       />
       <Text style={styles.mainHeader}>WELCOME TO</Text>
      <Text style={[styles.mainHeader,
      {fontSize:33,color:"#4c5dab",marginTop:0,}]}>
      {props.channelName}</Text>
      <Text style={styles.paraStyle}>{Description}</Text>
       </View>
       <View>
           <MenuItems/>
       </View>
      </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
      height:'100%',
      display: 'flex',
      justifyContent: 'space-between',
      paddingHorizontal:20,
      backgroundColor:'#fff',
      textAlign:'center',
    },
   headerImage:{
    height:undefined,
    width:'100%',
    aspectRatio:1,
    // centre's the image
    display:'flex',
    alignItems: 'stretch',
    marginTop:50,
    borderRadius:20,
  
  
   },
   homeTop:{
     display:"flex",
     justifyContent: 'center',
     alignItems: 'center',
     paddingHorizontal:10,
    
   },
   mainHeader:{
    fontSize:30,
    color:'#344055',
    textTransform: 'uppercase'
   },
   paraStyle:{
    textAlign:'center',
    fontSize:'19',
    color:'#7d7d7d',
    marginTop:30,
    lineHeight:26,
    paddingBottom:50
   }
  
  });
  export default Home;