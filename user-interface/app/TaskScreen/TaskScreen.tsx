import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, FlatList, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Task = () => {
    const [text, setText] = React.useState('');
    const [tasks, setTasks] = React.useState([]);
    const [editId, setEditId] = React.useState(null);

    const updateTask = async () => {
        try {
            const response = await fetch(`http://192.168.29.219:8080/api/tasks?id=${editId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: editId, name: text }),
            });

            if (!response.ok) throw new Error('Failed to update task');

            setText('');
            setEditId(null);
            fetchTasks();
        } catch (error) {
            console.error(error);
        }
    };

    const deleteTask = async (id: any) => {
        await fetch(`http://192.168.29.219:8080/api/tasks?id=${id}`, { method: 'DELETE' });
        fetchTasks();
    };

    const fetchTasks = async () => {
        try {
            const response = await fetch('http://192.168.29.219:8080/api/tasks');
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const buttonHandler = async () => {
        try {
            const response = await fetch('http://192.168.29.219:8080/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: text }),
            });

            if (!response.ok) throw new Error('Failed to submit task');

            setText('');
            fetchTasks();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Manage Your Tasks</Text>

            <TextInput
                value={text}
                onChangeText={setText}
                placeholder="Enter your task"
                style={styles.input}
                placeholderTextColor="#999"
            />

            <TouchableOpacity
                onPress={editId ? updateTask : buttonHandler}
                style={[styles.button, { backgroundColor: editId ? '#FFA500' : '#FFFFFF' }]}
            >
                <Text style={[styles.buttonText, { color: editId ? '#fff' : '#FF7F50' }]}>
                    {editId ? 'Update Task' : 'Add Task'}
                </Text>
            </TouchableOpacity>

            <FlatList
                style={{ marginTop: 30, width: '90%' }}
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.taskCard}>
                        <Text style={styles.taskText}>{item.name}</Text>
                        <View style={styles.actions}>
                            <TouchableOpacity onPress={() => {
                                setText(item.name);
                                setEditId(item.id);
                            }}>
                                <Text style={styles.edit}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteTask(item.id)}>
                                <Text style={styles.delete}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF7F50',
        alignItems: 'center',
        paddingTop: 60,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    input: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
    },
    button: {
        width: '60%',
        padding: 12,
        marginTop: 20,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 4,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    taskCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 2,
    },
    taskText: {
        fontSize: 16,
        color: '#333',
        maxWidth: '60%',
    },
    actions: {
        flexDirection: 'row',
        gap: 15,
    },
    edit: {
        color: '#FFA500',
        fontWeight: 'bold',
        marginRight: 10,
    },
    delete: {
        color: 'red',
        fontWeight: 'bold',
    },
});

export default Task;
