
import React,{useState} from 'react';
import { View,TouchableOpacity, Text,StyleSheet,SafeAreaView,Button,TextInput } from 'react-native';
import Todocontainer from './components/TodoBox';

export default function HomeScreen({navigation}) {
  const [refInput,setRefInput]=useState("")
  return (
    <SafeAreaView style={{flex:1}} >
    <View style={styles.container}>
      <View style={{flexDirection:"row",marginBottom:"20px"}}>
    <TextInput value={refInput} onChangeText={setRefInput} style={styles.inputtxt}/>
    <TouchableOpacity style={styles.btn}>
      <Text style={{fontSize:15,fontWeight:"500"}}>Add</Text>
      </TouchableOpacity>
      </View>
      <Todocontainer/>
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
      