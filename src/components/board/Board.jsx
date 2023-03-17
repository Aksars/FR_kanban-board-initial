import uniqid from 'uniqid'
import { LIST_TYPES, LIST_COPY } from '../../config'
import List from '../list/List'
import css from './Board.module.css'

const Board = props => {	
	const {tasks, setTasksMain} = props
	const allTasks = tasks


	function addNewTask(title,description){
		const newTask = {
			id:uniqid(),
			title:title,
			description:description,
			created: new Date().toISOString(),
			status : LIST_TYPES.BACKLOG
		}
		setTasksMain([...tasks, newTask])
	}
	
	let Lists = []
	const types = Object.values(LIST_TYPES);
				
	for(let i = 0; i< types.length; i++)
	{
		const curentType = types[i]

		if(curentType === LIST_TYPES.BACKLOG){			
			const listTasks = tasks.filter(task=>task.status === curentType)		
			Lists.push( <List title={LIST_COPY[curentType]} type={curentType} key={curentType} tasks={listTasks} allTasks = {allTasks}  addNewTask={addNewTask}/>)
		}
		else
		{			
			const prevType = types[i-1]
			const listTasks = tasks.filter(task=>task.status === curentType)	
			const previousTasks = tasks.filter(task=>task.status === prevType)
			Lists.push(<List title={LIST_COPY[curentType]} type={curentType} key={curentType} tasks={listTasks} allTasks = {allTasks} setTasksMain = {setTasksMain} previousTasks = {previousTasks}  addNewTask={addNewTask}/>)
			//console.log(pastTasks)
		}
	}
	/*Object.values(LIST_TYPES).reduce( (previousType, type ) => {
				
	})}
*/
	
	return (
		<div className={css.board} >		
				{Lists}			
		</div>
	)
}

export default Board
