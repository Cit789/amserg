import cl from './logotypeMain.module.css'

export default function LogotypeMain({text}){
    return <h2 className={cl.logotype}>{text}</h2>
}