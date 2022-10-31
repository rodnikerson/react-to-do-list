import garbage from '../garbage.svg';
import pen from '../edit.svg';
import arrow from '../arrow.svg'

export default function Task({ eachTask, taskDone, deleteTask, editTask, addPriority, reducePriority }) {



  return (
    <div className='task'>
      <div className={eachTask.done ? 'div--task--checkbox--done' : 'div--task--checkbox'}>

        <input type="checkbox" checked={eachTask.done} onChange={() => taskDone(eachTask)} />

        <li>{eachTask.task}</li>

      </div>
      <div className='div--btn'>

        <button className='btn--delete' onClick={() => deleteTask(eachTask)}>
          <img src={garbage} alt='thrash' />
        </button>

        <button className='btn--edit' onClick={() => editTask(eachTask)}>
          <img src={pen} alt='pen' />
        </button>

        <button className='btn--up' onClick={() => addPriority(eachTask)}>
          <img src={arrow} alt='arrow' />
        </button>

        <button className='btn--down' onClick={() => reducePriority(eachTask)}>
          <img src={arrow} alt='arrow' />
        </button>

      </div>
    </div>
  )
}