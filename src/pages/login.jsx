import React, {useState}from 'react'
import { View, Text ,TextInput, TouchableOpacity, SafeAreaView, StyleSheet,Alert} from 'react-native'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import app from '../../firebaseconfig';
const auth=getAuth();
console.log(auth);
export default function Login({navigation}) {
    const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")

  function handleSignUp(){
    const auth=getAuth();
   if(email && password){
    signInWithEmailAndPassword(auth,email,password).then((res)=>{
      console.log(res,Alert.alert("seccessfull you have created a user"));
          navigation.navigate("Home")
    }).catch((err)=>console.log(err))
   }
}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:30,fontWeight:400,marginBottom:10}}>welcome please sign up to the <Text style={{color:"navy"}}>TodoApp</Text></Text>
     <View style={styles.liginBox}>
        <TextInput placeholder='Email' value={email} onChangeText={setEmail}  style={styles.textInput}/> 
        <TextInput placeholder='password' value={password} onChangeText={setPassword} style={styles.textInput}/>
    <TouchableOpacity style={styles.submitBtn} onPress={handleSignUp}><Text style={{fontSize:20,fontWeight:500}}>Submit</Text></TouchableOpacity>
     </View>
     <Text onPress={()=>navigation.navigate("Signup")} style={{color:"navy"}}>Go to Sign Up </Text>
    </SafeAreaView>
  )
}    


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"lightgray",
        justifyContent:"center",
        alignItems:"center"
    },
    liginBox:{
        height:"auto",
        width:300,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center"
    },
    textInput:{
        height:50,
        width:'100%',
        marginBottom:"15px", 
        backgroundColor:"skyblue"
    },
    submitBtn:{
        width:100,
        borderRadius:"5px",
        alignItems:"center",
        justifyContent:"center",
        height:50,
        backgroundColor:"rgba(255,200,0,0.7)"

    }
})