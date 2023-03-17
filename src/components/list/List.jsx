import { useState } from 'react'
//import { findByAltText } from '@testing-library/react' 
//, useEffect
import { Link } from 'react-router-dom'
import { LIST_TYPES, LIST_COLORS } from '../../config'
import FormAdddNewTask from '../forms/FormAddNewTask'
import css from './List.module.css'
import classNames from 'classnames';


const List = props => {
	const { title, type, tasks, addNewTask,  previousTasks, allTasks, setTasksMain } = props
	const [isFormVisible, setFormVisible1] = useState(false)
	const [errorTrigered, setError] = useState(false)

	function addTaskClick() {
		setFormVisible1(!isFormVisible)
	}
	/*
	useEffect(()=>
	{
		console.log('page loaded')		
	}, [])*/
	//let test2 = eval(`css.{${LIST_COLORS[type]}}`)
	//let test = LIST_COLORS[type];
	//let classList = `${css.task} ${test2}`;		
	let btnGroupClasses;
	switch (LIST_COLORS[type]) {
		case 'BACKLOG':
			btnGroupClasses = classNames(
				css.task,
				css.BACKLOG
			);
			break;
		case 'READY':
			btnGroupClasses = classNames(
				css.task,
				css.READY
			);
			break;
		case 'IN_PROGRESS':
			btnGroupClasses = classNames(
				css.task,
				css.IN_PROGRESS
			);
			break;
		case 'DONE':
			btnGroupClasses = classNames(
				css.task,
				css.DONE
			);
			break;
		default:
			break;
	}

	//let test = allTasks.filter( task1 => task1.status === type)
	//console.log(test)
	function changeTaskCategory(e, taskId) {
		
		// allTasks, setTasksMain

		const updatedTasks = allTasks.map(task => {
			if (taskId === task.id) {
				return { ...task, status: type }
			}
			return task
		})
		console.log(updatedTasks)
		setTasksMain(updatedTasks)


		/*let curentType = e.target.parentElement.attributes.list_type.value
		let pastListType = e.target.parentElement.previousElementSibling.attributes.list_type.value
		let pastTasks = allTasks.filter(task => task.status === pastListType)
		let curentTasks = allTasks.filter(task => task.status === curentType)
		console.log(allTasks)
		console.log(`Текущий список: ${curentType} , Прошлый список: ${pastListType}`)
		console.log(`Задачи прошлого списка: `)
		console.log(pastTasks)
		console.log(`Задачи текущего списка: `)
		console.log(curentTasks)
		*/
		//, Задачи из которых брать: ${pastListType}`)

	}
	//(e) => changeTaskCategory(e)

	return (
		<div className={css.list} list_type={type} >
			<h2 className={css.listTitle}>{title}</h2>
			{
				//
				tasks.map(task => {
					//console.log(task)
					//background:LIST_COLORS[type]
					return (
						<Link key={task.title} to={`/tasks/${task.id}`}>
							<div className={btnGroupClasses}>{task.title}</div>
						</Link>
					)
				})
			}
			{type === LIST_TYPES.BACKLOG && (				
				<div className={classNames(css.addTaskBlock,isFormVisible?css.opened:'') }>
					<div className={css.addTaskButtonBlock} onClick={addTaskClick} >
						<button className={css.addButton} >Добавить новую задачу</button>
						<span className={css.taskAddArrow}> &or; </span>	
					</div>
				</div>
			)}
			{type !== LIST_TYPES.BACKLOG && (previousTasks.length > 0) && (
				<div className={classNames(css.addTaskBlock,isFormVisible?css.opened:'') }>
					<div className={css.addTaskButtonBlock} onClick={addTaskClick}>
						<button className={css.addButton} >Добавить новую задачу</button>
						<span className={css.taskAddArrow}> &or; </span>	
					</div>
					<div className={css.taskAddList}>
						{
							previousTasks.map(task =>
							{
								return (
									<div onClick={ (e) => changeTaskCategory(e, task.id)} className={css.addTaskItem}>{task.title}</div>
								)
							})
						}
					</div>
					
				</div>
			)}

			{type === LIST_TYPES.BACKLOG && isFormVisible === true && (
				<FormAdddNewTask addNewTask={addNewTask} setFormVisible1={setFormVisible1} setError={setError} />
			)}
			{type === LIST_TYPES.BACKLOG && errorTrigered === true && (
				<label className={css.errorLabel} htmlFor="">Введите имя задачи</label>
			)}

		</div>

	)

}

export default List
