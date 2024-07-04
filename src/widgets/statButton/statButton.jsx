import cl from './statButton.module.css'

export default function StatButton({ text, src }) {
	return (
		<button className={cl.statButton}>
			<img src={src} className={cl.img} />
			{text}
		</button>
	)
}
