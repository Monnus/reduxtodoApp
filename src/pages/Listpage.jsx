import React from 'react';
import { View, Text,InputText, StyleSheet,SafeAreaView,Button} from 'react-native';

export default function TodoPage() {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <InputText placeholder="inserttext"/>sxsxsxsxsxssd<Button>search</Button>
        </View>      
     </SafeAreaView>
  );
}


const styles=StyleSheet.create({
  container:{
flex:1,
backgroundColor:"lightBlue",
  }
})