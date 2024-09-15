import Image from "next/image"
import { ReactNode } from "react"
import { IoBookOutline } from "react-icons/io5"

interface props{
    imageUrl:string,
    name:string,
    chapters:number
}

const CourseCard=({imageUrl,name,chapters}:props)=>{
    return(
        <div className="bg-[#FFFFFF] border cursor-pointer     shadow-sm ">
            <Image src={imageUrl} className="rounded-md" width={340} height={320}
            alt="Course pic"
            />

           <div className="px-2 py-5">
           <h1>{name}</h1>
           <div className="flex items-center w-1/2 px-3 text-[#E6F6FD] py-[2px] rounded-md gap-1 bg-[#6597AF]">
           <IoBookOutline/>
           <p className="text-sm">{chapters} chapters</p>
           </div>
    
           </div>
           
        </div>
    )
}

export default CourseCard;