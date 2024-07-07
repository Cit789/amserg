import cl from './header.module.css'
import sergLogotype from '../../img/AGlogotype.avif'
import Button from '../../widgets/button/button'
import YellowBtn from '../../widgets/yellowButton/yellowButton'
import MenuButton from '../../widgets/menuButton/menuButton'
import MobileMenu from './mobileMenu/mobileMenu'
import { useState } from 'react'
export default function Header() {
	const support_url =
		'https://discord.com/channels/610151414555082783/924958748957638707'
	const discord_url = 'https://discord.com/invite/amserg-games'
	const [menuOpen,setMenuOpen] = useState(false)
	function openModal() {
		menuOpen ? setMenuOpen(false) : setMenuOpen(true)
		
	}
	return (
		<header className={cl.mainHeader}>
			<nav className={cl.mainNav}>
				<a href='#toUp'>
					<div className={cl.logotypeContainer}>
						<img src={sergLogotype} alt='логотип' className={cl.sergLogotype} />
					</div>
				</a>
				<MobileMenu isOpen={menuOpen}/>
				<MenuButton
					menuOpen={menuOpen}
					onClick={openModal}
				/>
				<div className={cl.buttonsContainer}>
					<a href={support_url} target='_blank'>
						<Button text='ПОМОЩЬ' />
					</a>

					<a href='#hook'>
						<Button text='СЕРВЕРЫ' />
					</a>
					<a href={discord_url} target='_blank'>
						<Button text='DISCORD' />
					</a>
					<a>
						<Button text='ПРАВИЛА' />
					</a>
					<YellowBtn text='ДОНАТ -25%' />
				</div>
			</nav>
		</header>
	)
}
