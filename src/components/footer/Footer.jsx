import css from './Footer.module.css'
import { LIST_TYPES } from '../../config'

const Footer = props => {
	const { tasks } = props
	
	let doneTasks = 0;
	let inProgressTasks = 0;
	console.log(tasks)
	tasks.map( (task) => {	
		if( task.status === LIST_TYPES.IN_PROGRESS || task.status === LIST_TYPES.READY ){
			inProgressTasks++
		}
		if(task.status === LIST_TYPES.DONE){
			doneTasks++
		}		
		return null
	})
	return (
		
		<footer className={css.footer}>
			<div className={css.counts} >				
				<span className=''>Активные задачи:  	&nbsp;  </span>	<span>	&lt;{inProgressTasks}&gt;</span>
				<span className=''>;&nbsp;&nbsp;&nbsp;&nbsp;Завершенные задачи:&nbsp; </span>	<span> &lt;{doneTasks}&gt; </span> <span>. </span>

			</div>
			<div className={css.copy}>
				Kanban board by &lt;Anastasia&gt;,&lt;2023&gt;
			</div>
		</footer>
		
	)
}

export default Footer
