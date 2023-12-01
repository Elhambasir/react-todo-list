import React from 'react'
import { Checkbox } from './Checkbox'

export const List = (props) => {
  // console.log(props.tasks)
  return (
    <div className='w-full px-3'>
      {props.tasks.map((task) => (
        <Checkbox key={task.id}
        id={task.id} name={task.name}
        completed={task.completed}
        editTask={props.editTask}
        removeTodo={props.removeTodo}
        />
      ))}
    </div>
  )
}
