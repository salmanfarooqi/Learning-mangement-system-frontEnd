import Button from "@/components/common/button";
import StudentLayout from "@/components/layout/StudentLayout"
import CourseCard from "@/components/student/cards/CourseCard";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import Card from '@/components/teacher/card/CourseCard'
import { IoReorderThree } from "react-icons/io5";
import ChapterCard from "@/components/teacher/card/chapterCard";
import Input from "@/components/common/input";
import { FiFileText } from "react-icons/fi";
import { ImCoinDollar } from "react-icons/im";

const Index = () => {
    return (
        <StudentLayout>
            <div className="!w-full  ">
                <div className="flex  items-center justify-between">

                    <div>
                        <h1 className="text-xl font-bold py-1">course setup</h1>
                        <h1 className="text-sm ">Complete All Fields(1/6)</h1>
                    </div>

                    <div className="flex gap-2 items-center">
                        <Button className="flex px-2 text-sm bg-black text-white">
                            Publish
                        </Button>


                        <Button className="flex items-center px-2 py-1 bg-black text-white">
                            <AiFillDelete />
                        </Button>
                    </div>





                </div>

                <div className="flex ">
                    <div className="w-full items-center py-12 ">

                        <div className="flex gap-1">
                            <div className="p-2 rounded-md bg-[#E6F6FD]">

                                <MdOutlineDashboardCustomize />
                            </div>

                            <p className="text-sm pt-2">Customize your course</p>

                        </div>
                             
                        <div className=" w-[90%] space-y-4  py-2">
                            
                        <Card name="title">

                        <Input type="text" className="py-3 w-full rounded-md bg-white-200 focus:outline-none px-6 "  handleChange={()=>{}}/>
                            </Card>

                        <Card name="description">
                        
                        <Input type="text" className="py-3 w-full rounded-md bg-white-200 focus:outline-none px-6 "  handleChange={()=>{}}/>
                        </Card>
                        <Card name="image">
                            
                        <Input type="text" className="py-24 w-full rounded-md bg-white-200 focus:outline-none px-6 "  handleChange={()=>{}}/>
                        </Card>
                        <Card name="category">
                            
                        <Input type="text" className="py-3 w-full rounded-md bg-white-200 focus:outline-none px-6 "  handleChange={()=>{}}/>
                        </Card>


                        
                      </div>


                    </div>
                    

                    <div className="w-full items-center py-12 ">

                        <div className="flex gap-1">
                            <div className="p-2 rounded-md bg-[#E6F6FD]">

                                <MdOutlineDashboardCustomize />
                            </div>

                            <p className="text-sm pt-2">course chapters</p>

                        </div>
                        

                      <div className="py-4 space-y-2">
                        <Card name="chapter">
                            <div className="py-4 space-y-4">

                            <ChapterCard/>

                            <ChapterCard/>


                            <ChapterCard/>
                            </div>
                       
                        </Card>
                      
                      </div>

                      <div className="flex items-center gap-1 py-4">
                        <div className="p-2 rounded-full bg-[#E6F6FD]"> <ImCoinDollar/></div>
                     
                        <p>Sell Your Course</p>
                      
                      </div>


                      <div>
                      <Card name="price">
                            
                            <Input type="text" className="py-3 w-full rounded-md bg-white-200 focus:outline-none px-6 "  handleChange={()=>{}}/>
                            </Card>
                      </div>




                      <div className="flex items-center gap-1 py-4">
                        <div className="p-2 rounded-full bg-[#E6F6FD]"> <FiFileText /></div>
                      
                        <p>Resources And Attachement</p>
                      
                      </div>


                      <div>
                      <Card name="attachment">
                            
                            <Input type="text" className="py-3 w-full rounded-md bg-white-200 focus:outline-none px-6 "  handleChange={()=>{}}/>
                            </Card>
                      </div>

                    </div>

              
                </div>

            </div>
        </StudentLayout>
    )
}


export default Index;