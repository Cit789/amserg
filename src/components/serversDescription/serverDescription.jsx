import ServerCard from '../../widgets/serverCard/serverCard'
import ServerLink from '../../widgets/serverLink/serverLink'
import cl from './serverDescription.module.css'
export default function ServerDescription({
	logotypeText,
	sumOnline,
	children,
	id,
	href
}) {
	return (
		<div className={cl.container} id={id}>
			<ServerLink logotypeText={logotypeText} online={sumOnline} href={href} />
			<div className={cl.flexContainer}>{children}</div>
		</div>
	)
}
