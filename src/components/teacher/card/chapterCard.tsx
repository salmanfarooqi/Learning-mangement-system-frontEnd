import Button from "@/components/common/button";
import { FaPencil } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5"

const ChapterCard=()=>{
    return(
        <div className=" flex  items-center w-[90%] justify-between px-4 py-3 rounded-md bg-[#3587B4]">
            < IoReorderThree/>
            <p>introduction</p>


            <div className="flex  gap-2  items-center" >


            <Button className="bg-[#3587B4] py-0  px-1 rounded-full">
                <p className="text-sm"> published</p>
            </Button>

            <span className="pb-1">
            <FaPencil/>
            </span>
            
            </div>

           

        </div>
    )
}

export default ChapterCard;