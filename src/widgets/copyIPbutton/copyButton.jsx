import { useState } from 'react'
import cl from './copyButton.module.css'
export default function CopyButton({ text_in, src,onClick }) {
	const [text,setText] = useState(text_in)
	const [btnClass,setBtnClass] = useState([cl.copyButton])
	return (
		<button className={btnClass.join(' ')} onClick={()=>onClick(setText,setBtnClass)}>
			<img src={src} className={cl.img} />
			{text}
		</button>
	)
}
