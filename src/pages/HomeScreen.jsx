
import React,{useState,useEffect} from 'react';
import { View,TouchableOpacity, Text,StyleSheet,SafeAreaView,Button,TextInput } from 'react-native';
import Todocontainer from './components/TodoBox';
import { useDispatch } from 'react-redux';
import {nanoid} from "@reduxjs/toolkit"
import {bringBackReads, sendReadwrite} from "../ListSlice"
import { logggedIn } from './login';
import {getDatabase,set,ref, onValue,remove,} from "firebase/database"
import { useSelector } from 'react-redux';
import { getAuth,signOut } from 'firebase/auth';

export default function HomeScreen({navigation}) {
const auth=getAuth();
 function handlesignout(){
  signOut(auth).then((res)=>{
    console.log(res,"seccssfully logged out");

  }).catch((err)=>{console.log(err)})
 }
  const [refInput,setRefInput]=useState("");

  const dispatch=useDispatch();
  const notes=useSelector(state=>state.notes);
const funDispatch=(arr)=>{
 return arr.forEach(data=>dispatch(bringBackReads(data)))
}
  useEffect(()=>{
    (()=>{
  const db=getDatabase();
  const reference=ref(db,"user")
  onValue(reference,(snapshot)=>{
    const dataArr=snapshot.val();
    if(dataArr==null)return;
    let dataArr2=[]
    snapshot.forEach(data=>dataArr2.push(data.val()))
    funDispatch(dataArr)
  console.log(dataArr2,dataArr);

// snapshot.forEach((childSnapshot)=>{
//   const childKey=childSnapshot.key;
//   const childData=childSnapshot.val()
})
})();
 
  },[])

 
  // function removeData(){
  //   const db= getDatabase();
  //   const reference= ref(db,"user");
  //   remove(reference).then((res)=>{
  //     console.log(res)
  //   }).catch((err)=>console.log(err))
  // }
  // removeData()

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
         <TouchableOpacity style={styles.btn} onPress={handlesignout}>
      <Text style={{fontSize:15,fontWeight:"500"}}>logout</Text>
      </TouchableOpacity>
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
      