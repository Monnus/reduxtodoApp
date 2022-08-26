
import React,{useState} from 'react';
import { View,TouchableOpacity, Text,StyleSheet,SafeAreaView,Button,TextInput } from 'react-native';
import Todocontainer from './components/TodoBox';
import { useDispatch } from 'react-redux';
import {nanoid} from "@reduxjs/toolkit"
import {sendReadwrite} from "../ListSlice"
import { logggedIn } from './login';
import {getDatabase,set,ref} from "firebase/database"
import { useSelector } from 'react-redux';

export default function HomeScreen({navigation}) {
  const [refInput,setRefInput]=useState("");
  const dispatch=useDispatch();
  const notes=useSelector(state=>state.notes);
  function writeUserData(id,date,title="ToDo notes",text,logggedIn=null){
    const db= getDatabase()
    const reference=ref(db,"user/"+notes.length)
  
    set(reference,{
      id,
      date,
      title,
       text,
       logggedIn
    });
  return dispatch(sendReadwrite({
      id,
      date,
      title,
       text,
       logggedIn
    }))
  }

  const handleAddInput=()=>{
    const date=new Date()
    const year=date.getFullYear()
    const month=date.getMonth() +1;
    const day =date.getDate()

      if(refInput){
        
        writeUserData(nanoid(),`${day}\\${month}\\${year}`,undefined,refInput,undefined)
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
      