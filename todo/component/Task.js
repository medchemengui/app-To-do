import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Task = (props) => {
  return (
    <View style={styles.item}>
    <View style={styles.itemLeft}>
    <View style={styles.square} />
      <Text style={styles.itemText}>
      {props.text} 
      </Text>
    </View>
      <View style={styles.circular}></View>
    </View>
  )
}
const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
square:{
marginRight:15,
width: 24,
height: 24,
backgroundColor: '#55BCF6',
opacity :0.4 ,
borderRadius: 5,

    },
    itemText:{
     maxWidth:'80%',  
    },
circular:{
width: 12,
height: 12,
backgroundColor:'#55BCF6',
borderdWidth:2,

borderRadius: 5,
    },
});



export default Task