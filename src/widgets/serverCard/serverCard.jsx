import CopyButton from '../copyIPbutton/copyButton'
import cl from './serverCard.module.css'
import link from '../../svg/link.svg'

export default function ServerCard({ serverType ,online,type,onClick}) {
	const typeServerClasses = [cl.serverCard]
    switch (type) {
			case 'norules':
				typeServerClasses.push(cl.norules)
				break
			case 'classic':
				typeServerClasses.push(cl.classic)
				break
			case 'mediumrp':
				typeServerClasses.push(cl.mediumrp)
				break
			case 'hardrp':
				typeServerClasses.push(cl.hardrp)
				break
			case 'events':
				typeServerClasses.push(cl.events)
				break
		}
	return (
		<article className={typeServerClasses.join(' ')}>
			<CopyButton text_in='СКОПИРОВАТЬ IP' src={link} onClick={(setText,setBtnClass)=>onClick(setText,setBtnClass)} />
			<p className={cl.serverInfo}>
				<span>{serverType}</span>
				<span className={cl.online}>{online}</span>
			</p>
		</article>
	)
}
