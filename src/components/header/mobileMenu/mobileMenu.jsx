import cl from './mobileMenu.module.css'
import Button from '../../../widgets/button/button'
import YellowBtn from '../../../widgets/yellowButton/yellowButton'
const support_url =
	'https://discord.com/channels/610151414555082783/924958748957638707'
const discord_url = 'https://discord.com/invite/amserg-games'

export default function MobileMenu({isOpen}){
    const styleArray = [cl.mobileMenu,cl.open]
    return (
			<div className={isOpen ? styleArray.join(' ') : cl.mobileMenu}>
				<a href={support_url} target='_blank'>
					<Button text='ПОМОЩЬ' />
				</a>

				<a href='#hook'>
					<Button text='СЕРВЕРЫ' />
				</a>
				<a href={discord_url} target='_blank'>
					<Button text='DISCORD' />
				</a>
				<a>
					<Button text='ПРАВИЛА' />
				</a>
				<a style={{order:'-1'}}>
					<YellowBtn text='ДОНАТ -25%' />
				</a>
			</div>
		)
}