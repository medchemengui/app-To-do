
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, } from 'react-native';
import Task from './component/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask =()=>{
   Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
  }
  const completeTask =(index)=>{
    let itemsCopy =[...taskItems];
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
        {
          taskItems.map((e,index)=>{
            return(
              <TouchableOpacity key={index} onPress={ () => completeTask(index)} >
                <Task  text={e} />
              </TouchableOpacity>
              
            ) 
          })
        }
         
        </View>
       </View>
       <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.writerTasks}>
        <TextInput style={styles.input} placeholder={"write a task"} value={task} onChangeText={text => setTask(text)} />
      <TouchableOpacity onPress={()=> handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  task:{
paddingTop:80,
paddingHorizontal:20,
  },
  sectionTitle:{
    fontWeight: 'bold',
    fontSize: 24,
  },
  items:{
marginTop:30,
  },
  writerTasks:{
position: 'absolute',
bottom:60,
width: '100%',
flexDirection:'row',
justifyContent:'space-around',
alignItems:'center',

  },
  input:{
paddingVertical:15,
paddingHorizontal:15,
backgroundColor: '#FFF',
width:250,
borderRadius: 60,
borderColor:'#C0C0C0',
borderWidth:1,

  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor: '#FFFFFF',
    borderRadius: 60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
borderWidth:1,

  },
  addText:{},
});
