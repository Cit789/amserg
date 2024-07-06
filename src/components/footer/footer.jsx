import UlInfo from '../../widgets/ulInfo/ulInfo'
import cl from './footer.module.css'

export default function Footer() {
    const discord_url = 'https://discord.com/invite/amserg-games'
    const youtube_url = 'https://www.youtube.com/@AmSerg'
    const vk_url = 'https://vk.com/amserg'


	return (
		<footer className={cl.footer}>
			<div className={cl.info}>
				<UlInfo>
					<li>Документы</li>
					<li>Политика конфиденциальности</li>
					<li>Пользовательское соглашение</li>
					<li>Договор оферты</li>
				</UlInfo>
				<UlInfo>
					<li>Контакты</li>
					<li>amsergad@gmail.com</li>
					<li>Discord: amserg</li>
				</UlInfo>
				<UlInfo>
					<li>Социальные сети</li>

					<li>
						<a href={discord_url} target='_blank'>
							Discord
						</a>
					</li>

					<li>
						<a href={youtube_url} target='_blank'>
							YouTube
						</a>
					</li>
					<li>
						<a href={vk_url} target='_blank'>
							VK
						</a>
					</li>
				</UlInfo>
			</div>
			<div className={cl.otherInfo}>
				<ul className={cl.otherInfoText}>
					<li>
						GAMETTI LTD, Registration No. 14348659, 2nd Floor, College House, 17
					</li>
					<li>King Edwards Road, Ruislip, London</li>
					<li>© Amserg Games 2018 - 2024</li>
				</ul>
			</div>
		</footer>
	)
}
