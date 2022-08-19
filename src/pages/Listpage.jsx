import React from 'react';
import { View,Text,TextInput, StyleSheet,SafeAreaView} from 'react-native';

export default function TodoPage() {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
           <TextInput value="monnus" placeholder="Monnus" style={{height:70,width:400, backgroundColor:"white",fontSize:20}}/>
        </View>      
     </SafeAreaView>
  );
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"lightblue",
  }
})