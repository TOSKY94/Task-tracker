import {FaTimes, FaBell}  from 'react-icons/fa';

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder? 'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>onDelete(task.id)}/></h3>
            <p>{task.day}</p>
            <FaBell style={{display:`${task.reminder? '':'none'}`,color:'green'}}/>
            
        </div>
    )
}
 
export default Task
