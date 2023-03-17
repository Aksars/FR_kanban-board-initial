import Logo from '../../assets/logo.avif'
import css from './Header.module.css'
import { useState } from 'react'
import classNames from 'classnames'

const Header = () => {
	const [windowOpened, setWindowState] = useState(false)
	function switchProfileWindow(){
		setWindowState(!windowOpened)
	}
	return (
		<header className={css.header}>
			
			<h1 className={css.title}>Доска для задач</h1>
			
			<div className={css.logoBlock}> 
				<p className={css.userName}>Username</p>
				<div  className={css.logoImageblock} onClick={switchProfileWindow} >
					<img className={css.logo} src={Logo} alt='' />
					<span className={classNames(css.logoArrow, windowOpened?css.reverted:'')}>&or; </span>
				</div>				
				<div className={classNames(css.userActions, windowOpened?css.opened:'')}>					
					<div className={classNames(css.profile, css.userActionItem)}>Профиль</div>
					<div className={classNames(css.logout, css.userActionItem)}>Выйти</div>
				</div>				
			</div>
			
			
			

		</header>
	)
}
export default Header
