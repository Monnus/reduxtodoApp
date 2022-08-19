
import React from 'react';
import { View,TouchableOpacity, Text,StyleSheet,SafeAreaView,Button } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex:1}} >
    <View style={styles.container}>
    <TouchableOpacity  style={styles.btn} onPress={()=>navigation.navigate("todoscreen")}><Text style={{fontSize:20,fontWeight:700}}>Click to go create todo</Text></TouchableOpacity>
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
          height:"100px",
          width:"500px",
 justifyContent:"center",
 alignItems:"center"
        }
      });
      