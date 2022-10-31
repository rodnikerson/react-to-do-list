import './App.css';
import { useState } from 'react';
import logo from './my-logo.jpg'
import Footer from './components/Footer';
import Task from './components/Task';

function App() {

  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const [edit, setEdit] = useState(false)
  const [taskHolder, setTaskHolder] = useState([])

  const addTask = () => {
    if (task.length < 1) return
    const taskObj = {
      id: taskList.length || 0,
      task: task,
      done: false
    }
    setTaskList([taskObj, ...taskList])
    setTask('')
  }

  const deleteTask = (eachTask) => {
    setTaskList(taskList.filter(task => {
      return task.id !== eachTask.id
    }))
  }

  const addPriority = (eachTask) => {
    const index = taskList.indexOf(eachTask)
    if (index === 0) return
    setTaskList(prevTaskList => {
      return (
        [
          ...prevTaskList.slice(0, index - 1),
          ...prevTaskList.slice(index, index + 1),
          ...prevTaskList.slice(index - 1, index),
          ...prevTaskList.slice(index + 1)
        ]
      )
    })
  }

  const reducePriority = (eachTask) => {
    const index = taskList.indexOf(eachTask)
    if (index === taskList.length) return
    setTaskList(prevTaskList => {
      return (
        [
          ...prevTaskList.slice(0, index),
          ...prevTaskList.slice(index + 1, index + 2),
          ...prevTaskList.slice(index, index + 1),
          ...prevTaskList.slice(index + 2)
        ]
      )
    })
  }

  const editTask = (eachTask) => {
    setTask(eachTask.task)
    const index = taskList.indexOf(eachTask)
    setTaskHolder([index, eachTask])
    deleteTask(eachTask)
    setEdit(true)
  }

  const reAddTask = () => {
    setTaskList(prevTaskList => {
      return (
        [
          ...prevTaskList.slice(0, taskHolder[0]),
          taskHolder[1],
          ...prevTaskList.slice(taskHolder[0])
        ]
      )
    })
    setEdit(false)
    setTask('')
  }

  const taskDone = (eachTask) => {
    console.log('eachTask: ', eachTask)
    console.log('taskList: ', taskList[0])

    const newTaskList = taskList.map(task => {

      if (eachTask.id === task.id) {
        return { ...eachTask, done: !eachTask.done }
      } else {
        return task
      }
    })
    setTaskList(newTaskList)
  }

  const mappedTaskList = taskList.map((eachTask, index) => 
    <Task 
      key={index}
      eachTask={eachTask} 
      deleteTask={deleteTask} 
      editTask={editTask} 
      addPriority={addPriority} 
      reducePriority={reducePriority}
      taskDone={taskDone}
    /> 
  )

  return (
    <div className="App">

      <img className='logo' src={logo} alt='my logo' />

      <div className='input--btn'>

        <input onChange={(e) => setTask(e.target.value)} value={task} />
        {edit ?
          <button onClick={reAddTask} className="btn--re--add">Re-add Task</button>
          :
          <button onClick={addTask} className="btn--add">Add Task</button>}

      </div>

      <hr />

      <div>

        {mappedTaskList}

      </div>

      <Footer />

    </div>
  );
}

export default App;
