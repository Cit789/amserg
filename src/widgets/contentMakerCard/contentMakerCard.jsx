import cl from './contentMakerCard.module.css'

export default function ContentMakerCard({logotype,text,contentMaker,href}){
    const contentMakersIcon = [cl.logotype]
    switch (contentMaker) {
			case 'amserg':
				contentMakersIcon.push(cl.amserg)
				break
			case 'alexNotfril':
				contentMakersIcon.push(cl.alexNotfril)
				break
			case 'eclipse':
				contentMakersIcon.push(cl.eclipse)
				break
		}
    return (
			
				<article className={cl.card}>
                    <a href={href} target='_blank' className={cl.link}>
					<h3 className={contentMakersIcon.join(' ')}>{logotype}</h3>
					<p className={cl.text}>{text}</p>
                    </a>
				</article>
			
		)
}