import React,{useState} from 'react'
import { StyleSheet,SafeAreaView,TextInput,TouchableOpacity, Text, View } from 'react-native'
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';

export default function Signin({navigation}) {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
     function handleSubmit(){
        const auth=getAuth();
    if(email && password){
        signInWithEmailAndPassword(auth,email,password)
        .then((res)=>{
            console.log(res,"logged in");
            navigation.navigation("Home")
    
        }).catch((err)=>{
            console.log(err);
        })
    }
     }





  return (
    <SafeAreaView style={styles.container}>
        <Text style={{fontSize:20,fontWeight:400,marginBottom:"70px"}}>Welcome user please Sign in</Text>
    <View style={styles.liginBox}>
       <TextInput placeholder='Email' value={email} onChangeText={setEmail}  style={styles.textInput}/> 
       <TextInput placeholder='password' value={password} onChangeText={setPassword} style={styles.textInput}/>
   <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}><Text style={{fontSize:20,fontWeight:500}}>Submit</Text></TouchableOpacity>
    </View>
    <Text onPress={()=>navigation.navigate("login")}>You already have account ...Go to login</Text>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({

containe:{
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