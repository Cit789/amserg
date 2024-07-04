import cl from './yellowButton.module.css'

export default function YellowBtn({text,bigText}){
    return <button  className={cl.YellowBtn}>{text}</button>
}