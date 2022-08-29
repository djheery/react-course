import { useState } from 'react';
import useHTTP from '../../hooks/use-http';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const {isLoading, error, sendRequests: sendTask} = useHTTP();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; 
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    sendTask(
      {
        url:'https://react-http-bf88b-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: { text: taskText }
      }, 
      createTask.bind(null, taskText)
    )
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
