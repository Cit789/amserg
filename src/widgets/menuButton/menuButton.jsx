import cl from './menuButton.module.css'
export default function MenuButton({onClick,menuOpen}){
	const styleArray = [cl.menuButton,cl.closeImg]
    return (
			<button
				className={menuOpen ?   styleArray.join(' '):cl.menuButton}
				onClick={onClick}
			></button>
		)
}