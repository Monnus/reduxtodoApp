import React from 'react';
import { View, Text,StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

export default function Todocontainer({setRefInput}) {
  const notes=useSelector(state=>state.notes);
  console.log(notes);
//   const renderToDos=notes.map(note=>{
//     <View style={styles.notesDesign}>
// < Text style={{fontSize:20,fontWeight:400,}}>note.title</Text>
// <Text style={{fontSize:15,}}>note.content</Text>
//     </View>
//   })
const renderPost=notes.map((note,i)=>{
  if(i%2==0){
return(
      <View style={styles.notesDesign} key={note.id}>
        <Text>{note.title}</Text> 
    <Text>Date:{note.date}: <Text style={styles.todotext}>{note.text}</Text></Text> 
  </View>
    )
  }else{
    return(

      <View style={styles.notesDesign2} key={note.id}>
        <Text>{note.title}</Text>  
    <Text>Date:{note.date}:  <Text style={styles.todotext}>{note.text}</Text></Text> 
  </View>
      )
  }
  setRefInput("")
})
  return (
    <View style={styles.container}>
     {renderPost}
     </View>
  );
}

const styles=StyleSheet.create({
    container:{
      width:"90%",
        height:400,
        backgroundColor:"lightgray",
      paddingTop:"10px",
      },
      notesDesign:{
        height:50,
        width:"100%",
    
        backgroundColor:"rgba(10,10,200,0.4)",
        marginBottom:"10px",
      },  notesDesign2:{
        height:50,
        width:"100%",
        backgroundColor:"rgba(10,210,200,0.4)"
      },
      todotext:{
        fontSize:20,
        fontWeight:400,

      }
    
})