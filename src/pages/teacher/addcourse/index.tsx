import Button from "@/components/common/button";
import StudentLayout from "@/components/layout/StudentLayout"
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter()
    return (

        <StudentLayout>
            <div className="flex  flex-col  absolute left-[40%]    ">
                <h1 className=" font-bold text-xl py-4">Name Your Course</h1>
                <p className=" text-sm">what would you like to name to your course ? Don't worry , you change change this later</p>


                <div className="py-3 flex flex-col space-y-1 ">
                    <label>Course title</label>

                    <input type="text" className="py-3 w-full rounded-md bg-white-200 focus:outline-none px-6 " />

                </div>

                <div className=" flex gap-4  py-4 items-center">
                    <Button className="bg-sky-500 text-white px-4 text-sm" onClick={() => router.push('/teacher/addcourse')}>
                        cancel
                    </Button>

                    <Button className="bg-sky-500 text-white px-4 text-sm" onClick={() => router.push('/teacher/addcourse/id')}>
                        continue
                    </Button>
                </div>
            </div>
        </StudentLayout>
    )
}


export default Index;