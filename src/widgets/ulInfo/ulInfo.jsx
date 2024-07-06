import cl from './ulInfo.module.css'
export default function UlInfo({children}){
    return(
        <ul className={cl.ul}>
            {children}
        </ul>
    )
}