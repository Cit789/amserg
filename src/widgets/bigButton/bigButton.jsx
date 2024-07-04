import cl from './bigButton.module.css'
export default function BigButton({text,src}){
    return (
			<button className={cl.bigButton}>
				<img src={src} className={cl.img} />
				{text}
			</button>
		)
}