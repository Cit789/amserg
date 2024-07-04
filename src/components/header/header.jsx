import cl from './header.module.css'
import sergLogotype from '../../img/AGlogotype.avif'
import Button from '../../widgets/button/button'
import YellowBtn from '../../widgets/yellowButton/yellowButton'
export default function Header() {
	const support_url =
		'https://discord.com/channels/610151414555082783/924958748957638707'
	const discord_url = 'https://discord.com/invite/amserg-games'

	return (
		<header className={cl.mainHeader}>
			<nav className={cl.mainNav}>
				<a href='/main'>
					<div className={cl.logotypeContainer}>
						<img src={sergLogotype} alt='логотип' className={cl.sergLogotype} />
					</div>
				</a>
				<div className={cl.buttonsContainer}>
					<a href={support_url} target='_blank'>
						<Button text='ПОМОЩЬ' />
					</a>

					<a href='#'>
						<Button text='СЕРВЕРЫ' />
					</a>
					<a href={discord_url} target='_blank'>
						<Button text='DISCORD' />
					</a>

					<Button text='ПРАВИЛА' />
					<YellowBtn text='ДОНАТ -25%' />
				</div>
			</nav>
		</header>
	)
}
