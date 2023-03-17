import clsx from 'clsx'
import css from './Forms.module.css'
import { useState } from 'react'

const FormAddNewTask = props => {
	const {addNewTask, setFormVisible1, setError} = props
	const [values, setValues] = useState({
		title: '',
		description: ''
	})
	function handleSubmit(event){
		event.preventDefault()
		if(values.title){
			addNewTask(values.title, values.description)
			setFormVisible1(false)
		}
		else
		{
			setError(true)
			
		}
		
	}
	
	function handleChange(event){
		setError(false)
		const fieldName = event.target.name
		setValues({...values, [fieldName]: event.target.value})
	}
	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<input
				className={css.input}
				id='taskTitle'
				name='title'
				type='text'
				placeholder='Название задачи'
				value={values.title}
				onChange={handleChange}
			/>
			<textarea
				className={clsx(css.input, css.textarea)}
				id='taskDescription'
				name='description'
				placeholder='Описание задачи'
				value={values.description}
				onChange={handleChange}
			/>
			<button className={css.submit} type='submit'>Добавить</button>
		</form>
	)
}

export default FormAddNewTask
