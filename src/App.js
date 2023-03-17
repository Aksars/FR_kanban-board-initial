import { useState ,useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import data from './mock.json'

function App() {
	const initialState =JSON.parse(window.localStorage.getItem('tasks')) || data
	const [tasks, setTasks] = useState(initialState)
	useEffect(()=>{
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])
	//console.log(tasks)
	let test = 10;
  return (
	<BrowserRouter>
		<div className='wrapper'>
			<Header />
			<Main tasks = {tasks} setTasksMain={setTasks}/>
			<Footer tasks= {tasks} test={test}/>
		</div>
	</BrowserRouter>
  )
}

export default App
