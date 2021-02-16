import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const AddTask = ({addTask}) =>{
    const [value,updateValue] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        if(value!==""){
            addTask(value);
            updateValue("");
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your Name" value={value} 
            onChange={e => updateValue(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}


const ToDoList = () =>{
    const addTask = text=>updateTask([...tasks,{text}]);

    const [tasks,updateTask]=useState([
        {
        text:"Wake Up",
        isCompleted:false
    },
    {
        text:"Brush Teeth",
        isCompleted:false
    },
    {
        text:"Breakfast",
        isCompleted:false
    }
    ])

    const toggerTask = index =>{
        const newTask = [...tasks];
        if(newTask[index].isCompleted){
            newTask[index].isCompleted=false;}
            else{
                newTask[index].isCompleted=true;
            }
            updateTask(newTask);
        }
    const removeTask = index =>{
        const newTask = [...tasks];
        newTask.splice(index,1);
        updateTask(newTask);
    }

return(
    <div className="list-of-tasks-todo">
        <h1>React Todo App</h1>
        {tasks.map((task,index) =>(
            <div className="task-status">
                <span onClick={()=>toggerTask(index)} className={task.isCompleted?"task-name completed-task":"task-name"}>
                {task.text}
                </span>
                <button onClick={()=>removeTask(index)}>Delete</button>
               
            </div>
            
        ))}
        <AddTask addTask={addTask} />
    </div>
)}
 ReactDOM.render(<ToDoList />,document.getElementById("root"));
export default ToDoList;
