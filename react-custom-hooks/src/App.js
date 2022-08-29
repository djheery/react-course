import React, { useEffect, useState, useCallback } from "react";
import useHTTP from "./hooks/use-http";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);
  
  const {isLoading, error, sendRequests: fetchTasks } = useHTTP();

  useEffect(() => {

    const transformTasks = tasksObj => {
      const loadedTasks = [];
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }
      
      setTasks(loadedTasks);
    }

    fetchTasks(
      {url: "https://react-http-bf88b-default-rtdb.firebaseio.com/tasks.json"}, transformTasks
    );
    
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
