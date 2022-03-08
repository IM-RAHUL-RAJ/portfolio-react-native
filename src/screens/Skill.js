import React from 'react';
import { FlatList,View, Text ,StyleSheet,Image,TouchableOpacity,Touchable} from 'react-native';
import SkillApi from '../../src/screens/SkillApi';
const Skill = () => {

    const SkillCard=({item})=>{
        return (<View style={styles.mainContainer}>
        <View style={styles.skillContainer}>
            <View>
                <Image style={styles.skillImage} source={item.image} resizeMode="contain" />
            </View>
            <Text style={styles.mainHeader}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle} 
            onPress={()=>navigation.navigate("SkillDetails",{id:item.id})}>
            <Text style={styles.buttonText}>Skill Details</Text>
            </TouchableOpacity>

            </View>
        </View>

        </View>
        );
    };
  return (
      <View>
    <FlatList 
   keyExtractor={(item)=>item.id}
     data={SkillApi} renderItem={SkillCard}/>
     </View>
  );;
}
const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal: 20,
    },
    skillContainer:{
        padding: 30,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30, 

    },
    skillImage:{
        width: "100%",
    height: undefined,
    aspectRatio: 1,
    },
    mainHeader:{
        fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    // fontWeight: 500,
    paddingBottom: 15,
    textAlign: "center",
    fontFamily: "Nunito_700Bold",
    },
    description:{
        textAlign: "center",
        paddingBottom: 15,
        lineHeight:20,
        fontSize:16,
        color:'#7d7d7d'
    },
    buttonContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonStyle:{
        backgroundColor: "#809fff",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText:{
        fontSize: 20,
    color: "#eee",
    fontFamily: "WorkSans_400Regular",
    textTransform: "capitalize",
    }

})

export default Skill;