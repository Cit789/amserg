
import ContentMakers from '../components/contentMakers/contentMakers'
import Footer from '../components/footer/footer'
import MainDescription from '../components/mainDescription/mainDescription'
import ServerDescription from '../components/serversDescription/serverDescription'
import ServerCard from '../widgets/serverCard/serverCard'
import cl from '../widgets/copyIPbutton/copyButton.module.css'
import { useState } from 'react'
function Main() {
	const [amsergCards, setAmsergCards] = useState([
		{ serverType: '#1 NORULES', type: 'norules', online: '20/40', id: 1 ,serverIP:'sl.amserg.com:7777'},
		{ serverType: '#2 MEDIUM RP', type: 'mediumrp', online: '20/40', id: 2,serverIP:'sl.amserg.com:7778'},
		{ serverType: '#3 EVENTS', type: 'events', online: '20/40', id: 3,serverIP:'sl.amserg.com:7779' },
		{ serverType: '#4 HARD RP', type: 'hardrp', online: '20/40', id: 4,serverIP:'sl.amserg.com:7780' },
	])
	const [AlexNotfrilCards, setAlexNotfrilCards] = useState([
		{ serverType: '#1 NORULES', type: 'norules', online: '20/40', id: 1,serverIP:'193.164.17.182:7777' },
		{ serverType: '#2 MEDIUM RP', type: 'mediumrp', online: '20/40', id: 2,serverIP:'193.164.17.182:7778' },
		{ serverType: '#3 ClASSIC', type: 'classic', online: '20/40', id: 3,serverIP:'193.164.17.182:7781' },
	])
	const [OnyxCards, setOnyxCards] = useState([
		{ serverType: '#1 HARD RP', type: 'hardrp', online: '20/40', id: 1,serverIP:'193.164.17.182:7780' },
		{ serverType: '#2 ClASSIC', type: 'classic', online: '20/40', id: 2,serverIP:'193.164.17.182:7779' },
	])
	const amserg_url = 'https://discord.com/invite/amserg-games'
	const AlexNotfril_url = 'https://discord.com/invite/Tg3XjrJtBg'
	const onyx_url = 'https://discord.gg/jVuEPnS8cs'


	const copyTextToClipboard = async (text,setText,setBtnClass) => {
		try {
			await navigator.clipboard.writeText(text)
			setText('СКОПИРОВАНО')
			setBtnClass([cl.copyButton,cl.animation,cl.noneSelect])
			setTimeout(()=>{
				setText('СКОПИРОВАТЬ IP')
				setBtnClass([cl.copyButton])
			},1200)
			
		} catch (err) {
			console.error('Ошибка:', err)
		}
	}
	return (
		<>
			<MainDescription />
			<ServerDescription
				id='hook'
				logotypeText='AMSERG'
				sumOnline='80/160'
				href={amserg_url}
			>
				{amsergCards.map(item => (
					<ServerCard
						onClick={(setText, setBtnClass) =>
							copyTextToClipboard(item.serverIP, setText, setBtnClass)
						}
						key={item.id}
						serverType={item.serverType}
						type={item.type}
						online={item.online}
					/>
				))}
			</ServerDescription>
			<ServerDescription
				logotypeText='ALEX NOTFRIL'
				sumOnline='60/120'
				href={AlexNotfril_url}
			>
				{AlexNotfrilCards.map(item => (
					<ServerCard
						onClick={(setText, setBtnClass) =>
							copyTextToClipboard(item.serverIP, setText, setBtnClass)
						}
						key={item.id}
						serverType={item.serverType}
						type={item.type}
						online={item.online}
					/>
				))}
			</ServerDescription>
			<ServerDescription logotypeText='ONYX' sumOnline='40/80' href={onyx_url}>
				{OnyxCards.map(item => (
					<ServerCard
						onClick={(setText, setBtnClass) =>
							copyTextToClipboard(item.serverIP, setText, setBtnClass)
						}
						key={item.id}
						serverType={item.serverType}
						type={item.type}
						online={item.online}
					/>
				))}
			</ServerDescription>
			<ContentMakers />
			<Footer />
		</>
	)
}

export default Main
