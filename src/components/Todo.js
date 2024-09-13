import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className="Todo">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>

      <button disabled={task.completed} style={{backgroundColor: 'transparent', borderColor: 'transparent'}}  onClick={() => editTodo(task.id)}>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} style={{ color: task.completed ? 'grey' : 'white'}}/>
      </button>
      <button disabled={task.completed} style={{backgroundColor: 'transparent', borderColor: 'transparent'}}  onClick={() => deleteTodo(task.id)}>
        <FontAwesomeIcon className="delete-icon" icon={faTrash}  disabled={true}  style={{ color:task.completed ? 'grey ' : 'white'}}/>
      </button>
      </div>
    </div>
  )
}
