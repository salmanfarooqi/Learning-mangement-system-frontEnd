import { ReactNode } from "react";
import { FaPencil } from "react-icons/fa6";
interface props{
    children?:ReactNode
    name:string
}

const Card=({children,name}:props)=>{
    return(
        <div className="w-full bg-[#F1F5F9] ">

            <div className="px-4 py-3 ">
                   <div className="flex  cursor-pointer justify-between">

                    <p>course {name}</p>

                    <div className="flex  items-center gap-2">
                     <FaPencil/>
                     <p>Edit {name}</p>
                    </div>
                   </div>

                  <div>{children}</div>
            </div>

        </div>
    )
}


export default  Card;