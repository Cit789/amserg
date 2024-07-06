import cl from './serverLink.module.css'

export default function ServerLink({ logotypeText, online,href }) {
    const serverArr = [cl.logotype]
    switch (logotypeText) {
			case 'AMSERG': 
				serverArr.push(cl.Amserg)
				break;
			
			case 'ALEX NOTFRIL': 
				serverArr.push(cl.AlexNotfril)
				break;
			
			case 'ONYX': 
				serverArr.push(cl.Onyx)
				break;
			
			
		}
	return (
		<a href={href} target='_blank'>
			<div className={cl.container}>
				<h3 className={serverArr.join(' ')}>{logotypeText}</h3>
				<p className={cl.online}>{online}</p>
			</div>
		</a>
	)
}
