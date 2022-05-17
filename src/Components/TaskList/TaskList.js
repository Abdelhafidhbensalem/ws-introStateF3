import React from 'react'
import SingleTask from '../SingleTask/SingleTask'

const TaskList = ({list}) => {
  return (
    <div>
        <h1>TaskList</h1>
        {list.map((el , i)  => <SingleTask elp ={el} nbr ={i+1} key={el.id}/> )}
    </div>

  )
}

export default TaskList