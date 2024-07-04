import cl from './button.module.css'

export default function Button({text}){
    return <button className={cl.button}>{text}</button>
}