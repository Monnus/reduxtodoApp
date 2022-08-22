import React,{useState} from 'react';
import { View,Text,TextInput, StyleSheet,SafeAreaView} from 'react-native';
import Todocontainer from './components/TodoBox';
export default function TodoPage() {
  const [refInput,setRefInput]=useState("");


  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
           <TextInput value={refInput} onChangeText={setRefInput} placeholder='Insert Text...' placeholderTextColor="lightgray" style={{color:"black",height:70,width:400, backgroundColor:"white",fontSize:20}}/>
        </View>
        <Todocontainer refInput={refInput}/>      
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