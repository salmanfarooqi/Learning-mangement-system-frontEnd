import Button from "@/components/common/button"
import StudentLayout from "@/components/layout/StudentLayout"
import { useRouter } from "next/router"

const Index=()=>{

  const router=useRouter()
    return(

        <StudentLayout>
        <div className="flex !w-[1000px]     justify-between items-center px-6">
        <input type="text" placeholder="Search" className="md:py-2  py-1 w-[50%] px-8  rounded-md border"/>

        <Button className="bg-sky-500 text-white px-4 text-sm" onClick={()=>router.push('/teacher/addcourse')}>
          Add Course
        </Button>
        </div>
        </StudentLayout>
    )
}


export default Index