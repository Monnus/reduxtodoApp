import React from 'react';
import { View, Text,StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

export default function Todocontainer({refInput}) {
  const notes=useSelector(state=>state.notes);
  console.log(notes);
//   const renderToDos=notes.map(note=>{
//     <View style={styles.notesDesign}>
// < Text style={{fontSize:20,fontWeight:400,}}>note.title</Text>
// <Text style={{fontSize:15,}}>note.content</Text>
//     </View>
//   })
const renderPost=notes.map((note)=>{
  <View>
    <Text>{note.title}</Text>
  </View>
})
  return (
    <View style={styles.container}>
      <Text>hello</Text>
     </View>
  );
}

const styles=StyleSheet.create({
    container:{
      width:"90%",
        height:400,
        backgroundColor:"lightgray",
    
      },
      notesDesign:{
        height:200,
        width:300,
        backgroundColor:"rgba(10,10,200,0.4)"
      }
    
})