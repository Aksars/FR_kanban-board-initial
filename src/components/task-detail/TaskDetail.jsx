import css1 from './TaskDetail.module.css'
import css2 from '../../assets/css/Colors.module.css'
import { LIST_COPY, LIST_COLORS, LIST_TYPES } from '../../config'
import { useRouteMatch } from 'react-router-dom'
import { formatDate } from '../../utils'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
// import { createRef } from 'react'

const css = {...css1, ...css2 }

const TaskDetail = props => {
	const { tasks, setTasksMain } = props
	const url = useRouteMatch()
	const { taskId } = url.params
	console.log(tasks)
	const task = tasks.find(task => task.id === taskId)

	function handleStatusChange(event) {
		const updatedTasks = tasks.map(task => {
			if (taskId === task.id) {
				return { ...task, status: event.target.value }
			}
			return task
		})
		setTasksMain(updatedTasks)
	}
	function deleteTask(event) {

		console.log(tasks)
		//const newTasks = []
		/*tasks.map(task1=>{
			if(taskId !== task1.id)			
				newTasks.push(task1)				
		})*/

		const newTasks = tasks.filter(task1 => taskId !== task1.id)
		console.log(newTasks)
		setTasksMain(newTasks)

	}

	function handleDescriptionChange(event) {
		//alert('Сработало изменение описания');
		//console.log(this.textarea)
		console.log(tasks)
		let newTasks = []
		tasks.map(task1 => {
			if (taskId !== task1.id)
				newTasks.push(task1)
			else {
				task1.description = 'hi'
				console.log(event.target)
				task1.description = event.target.value
				console.log(event.target.value)
				newTasks.push(task1)
			}
			return null
		})
		console.log(newTasks)
		setTasksMain(newTasks)
	}
	//this.myRef = createRef("test")
	//ref={this.myRef} 
	let btnGroupClasses;
	switch (LIST_COLORS[task.status]) {
		case 'BACKLOG':
			btnGroupClasses = classNames(
				css.status,
				css.BACKLOG
			);
			break;
		case 'READY':
			btnGroupClasses = classNames(
				css.status,
				css.READY
			);
			break;
		case 'IN_PROGRESS':
			btnGroupClasses = classNames(
				css.status,
				css.IN_PROGRESS
			);
			break;
		case 'DONE':
			btnGroupClasses = classNames(
				css.status,
				css.DONE
			);
			break;
		default:
			break;
	}
	
	return (
		<>
		<div className={css.statusRow}>
				<Link to='/' className={css.homeLink}> &#8592; Назад</Link>
				{typeof task !== 'undefined' && ( 
				<div className={btnGroupClasses} style={{ }}>{LIST_COPY[task.status]}</div> 
				)}
			</div>
		<div className={css.wrapper}>
			
			{typeof task !== 'undefined' && (
				<>
					<div className={css.header}>
						<h2 className={css.title}>{task.title}</h2>
					
					</div>
					<div className={css.createdAt}>{formatDate(task.created)}</div>
					<div className={css.descriptionCont}>
						<span className={css.staticDescr}> Описание задачи: </span>
						<textarea className={css.editableDescr} onBlur={handleDescriptionChange} >{task.description || "не заполнено"}</textarea>
					</div>
					<p className={css.label}>Изменить статус</p>
					<select onChange={handleStatusChange} className={css.select} value={task.status} name="" id="">
						{Object.values(LIST_TYPES).map(type => {
							return <option key={type} value={type}>{type}</option>
						})}

					</select>
					<button onClick={deleteTask} className={css.deleteBtn}>Удалить задачу</button>
				</>
			)}
			{typeof task === 'undefined' && (
				<h2>
					Задача с ИД = {taskId} не найдена
				</h2>
			)}


		</div>
		</>
	)
}



/*

			<div className={css.header}>
				<h2 className={css.title}>Свединья о задаче <br/> {task.title}</h2>
				<div className={css.status} style={{background:LIST_COLORS[task.status]}}>{LIST_COPY[task.status]}</div>
			</div>
			<div className={css.createdAt}>{formatDate(task.created)}</div>
			<p>Описание задачи: {task.description || "не заполнено"}</p>
			<p className={css.label}>Изменить статус</p>
			<select onChange={handleStatusChange} className={css.select} value={task.status} name="" id="">
				{Object.values(LIST_TYPES).map(type=>{
					return <option  value={type}>{type}</option>					
				})}

			</select>


*/
export default TaskDetail
