import { ReactNode } from "react"

interface props{
    className?:string,
    children:ReactNode
    onClick?:()=>void
}

const Button=({children,className,onClick}:props)=>{
    return(
        <button className={` px-3 py-2 rounded-md ${className}`}  onClick={onClick}>
        {/* <p className="text-green-300">testing</p> */}
        {children}
        </button>
    )
}

export default Button;