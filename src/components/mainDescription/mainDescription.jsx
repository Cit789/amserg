import BigButton from '../../widgets/bigButton/bigButton'
import LogotypeMain from '../../widgets/logotype/logotypeMain'
import cl from './mainDescription.module.css'
import discord from '../../svg/discord.svg'
import youtube from '../../svg/youtube.svg'
import cart from '../../svg/cart.svg'
import server from '../../svg/server.svg'
import StatButton from '../../widgets/statButton/statButton'
import user from '../../svg/user.svg'
export default function MainDescription() {
	const discord_url = 'https://discord.com/invite/amserg-games'
	const youtube_url = 'https://www.youtube.com/@AmSerg'
	return (
		<div className={cl.mainContainer}>
			<div className={cl.descriptionContainer}>
				<LogotypeMain text='AMSERG GAMES' />
				<div>
					<p className={cl.descriptionText}>
						Самый популярный мульти-проект по{' '}
						<span className={cl.spanSL}>SCP:SL</span>, состоящий сразу из группы
						известных игровых серверов! Здесь вы найдете все: адекватную
						администрацию, низкий пинг, прекрасное комьюнити, разные сервера и
						большой набор самых необычных плагинов!
					</p>
				</div>
				<div className={cl.buttonsContainer}>
					<BigButton text='ЛИЧНЫЙ КАБИНЕТ' src={cart} />
					<a href='#hook'>
						<BigButton text='СЕРВЕРЫ' src={server} />
					</a>
					<a href={discord_url} target='_blank'>
						<BigButton text='ДИСКОРД' src={discord} />
					</a>
					<a href={youtube_url} target='_blank'>
						<BigButton text='ЮТУБ' src={youtube} />
					</a>
					<StatButton text='ОНЛАЙН: 160' src={user} />
				</div>
			</div>
		</div>
	)
}
