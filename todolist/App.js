import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, TouchableOpacity, Switch, Picker, ScrollView } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [category, setCategory] = useState('Personal');
  const [searchQuery, setSearchQuery] = useState('');

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { key: Math.random().toString(), value: task, completed: false, category }]);
    setTask('');
  };

  const toggleCompletion = (taskKey) => {
    setTasks(tasks.map(item => 
      item.key === taskKey ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteTask = (taskKey) => {
    setTasks(tasks.filter(item => item.key !== taskKey));
  };

  const filteredTasks = searchQuery.trim() === '' 
    ? tasks 
    : tasks.filter(t => t.value.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>TODO LIST</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Search tasks" 
        value={searchQuery} 
        onChangeText={setSearchQuery} 
      />
      <Picker
        selectedValue={category}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
      >
        <Picker.Item label="QUAN TRỌNG & KHẨN CẤP" value="QUANG TRỌNG & KHẨN CẤP" />
        <Picker.Item label="QUAN TRỌNG" value="QUAN TRỌNG" />
        <Picker.Item label="KHẨN CẤP" value="KHẨN CẤP" />
      </Picker>
      <TextInput 
        style={styles.input} 
        placeholder="Enter task" 
        value={task} 
        onChangeText={setTask} 
      />
      <Button title="Add" onPress={addTask} />
      <FlatList 
        data={filteredTasks}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={item.completed ? styles.completedTask : undefined}>
              {`[${item.category}] ${item.value}`}
            </Text>
            <View style={styles.actions}>
              <Switch 
                value={item.completed} 
                onValueChange={() => toggleCompletion(item.key)} 
              />
              <TouchableOpacity onPress={() => deleteTask(item.key)}>
                <Text style={styles.deleteButton}> Delete </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor:'#CCCCCC',
    borderRadius: 5
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor:'#FFCCFF',
    borderRadius: 5

  },
  picker: {height: 50,
    width: 150,
    marginBottom: 20,
    borderRadius: 5
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor:'#87CEEB'
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5
  },
  completedTask: {
    textDecorationLine: 'line-through',
    borderRadius: 5
  },
  deleteButton: {
    marginLeft: 10,
    color: 'red',
    borderRadius: 4,
   borderWidth: 1,
   borderColor:'red'
  },
});