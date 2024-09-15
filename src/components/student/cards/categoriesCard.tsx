import { MdOfflineShare } from "react-icons/md"
interface props{
    name:String
}
const CategoriesCard=({name}:props)=>{
    return(
        <div className="border  cursor-pointer flex  gap-2 items-center  bg-white p-2 rounded-md">

            <MdOfflineShare/>
            <h1>{name}</h1>

        </div>
    )
}

export  default CategoriesCard;