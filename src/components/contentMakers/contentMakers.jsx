import ContentMakerCard from '../../widgets/contentMakerCard/contentMakerCard'
import cl from './contentMakers.module.css'
export default function ContentMakers() {
	const textAmserg =
		'Старожил SCP:SL, сделавший более 100 видео, а также один из основателей Amserg Games. Создатель ракового мема: "Легушка"'
	const textAlexNotfril =
		'Главный поставщик самого креативного контента по SCP:SL, давно переживший однообразные нарезки.'
	const textEclipse =
		'Молодой контентмейкер, делающий самые разные обзоры, гайды и топы по SCP:SL.'
	const amserg_href = 'https://www.youtube.com/@AmSerg'
	const eclipse_href = 'https://www.youtube.com/@eclipseSCP'
	const alexNotfril_href = 'https://www.youtube.com/@AlexNotfril'
	return (
		<div className={cl.mainContainer}>
			<h3 className={cl.logotype}>НАШИ КОНТЕНТМЕЙКЕРЫ</h3>
			<div className={cl.flexContainer}>
				<ContentMakerCard
					text={textAmserg}
					logotype='AmSerg | 167 тыс.'
					contentMaker='amserg'
					href={amserg_href}
				/>
				<ContentMakerCard
					text={textAlexNotfril}
					logotype='Alex Notfril | 32 тыс.'
					contentMaker='alexNotfril'
					href={alexNotfril_href}
				/>
				<ContentMakerCard
					text={textEclipse}
					logotype='EclipsE | 3 тыс.'
					contentMaker='eclipse'
					href={eclipse_href}
                    
				/>
			</div>
		</div>
	)
}
