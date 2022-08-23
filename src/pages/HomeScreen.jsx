
import React,{useState} from 'react';
import { View,TouchableOpacity, Text,StyleSheet,SafeAreaView,Button,TextInput } from 'react-native';
import Todocontainer from './components/TodoBox';
import { useDispatch } from 'react-redux';
import {nanoid} from "@reduxjs/toolkit"
import {sendReadwrite} from "../ListSlice"
import { logggedIn } from './login';

export default function HomeScreen({navigation}) {
  const [refInput,setRefInput]=useState("");
  const dispatch=useDispatch();

  const handleAddInput=()=>{
    const date=new Date()
    const year=date.getFullYear()
    const month=date.getMonth() +1;
    const day =date.getDate()

      if(refInput){
        dispatch(sendReadwrite({
          id:nanoid(),
          date:`${day}\\${month}\\${year}`,
          title:"ToDo notes",
           text:refInput,
           logggedIn
        }))
        setRefInput("")
      }
  }
  return (
    <SafeAreaView style={{flex:1}} >
    <View style={styles.container}>
      <View style={{flexDirection:"row",marginBottom:"20px"}}>
    <TextInput value={refInput} onChangeText={setRefInput} style={styles.inputtxt} placeholder="insert text..."/>
    <TouchableOpacity style={styles.btn} onPress={handleAddInput}>
      <Text style={{fontSize:15,fontWeight:"500"}}>Add</Text>
      </TouchableOpacity>
      </View>
      <Todocontainer setRefInput={setRefInput}/>
    </View>
    </SafeAreaView>
  );
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        btn:{
          backgroundColor:"skyblue",
          height:70,
          width:"100px",
 justifyContent:"center",
 alignItems:"center"
        },
        inputtxt:{
          height:70,
          width:"250px",
          backgroundColor:"white",
          color:"gray",
          fontSize:20,
        }
      });
      