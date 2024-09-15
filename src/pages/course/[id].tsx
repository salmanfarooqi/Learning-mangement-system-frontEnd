import MuxVideoPlayer from "@/components/common/VideoPlayer"
import StudentLayout from "@/components/layout/StudentLayout"

const Index=()=>{
    return(

        <StudentLayout>
        <div>
          
            <div className="w-[60%] rounded-md height-[550px]">
            <MuxVideoPlayer playbackId='EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs'/>
            </div>

            <div className="w-[60%] py-4">
                <h1>Introduction</h1>
                <p>In this 10 hour course you are going to learn how to create your very own LMS (Learning Management System) platform. We are going to use the latest tech such as Next 13 with the App Router, Prisma as an ORM, Stripe for payments, and many</p>
            </div>
           
        </div>

        </StudentLayout>
    )
}
export default Index