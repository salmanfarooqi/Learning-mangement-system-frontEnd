import CourseCard from "@/components/student/cards/CourseCard";
import StudentLayout from "@/components/layout/StudentLayout";
import CategoriesCard from "@/components/student/cards/categoriesCard";
import { useRouter } from "next/router";

export default function Home() {
  const router=useRouter()

  const handleChange=(e: { target: { value: any; }; })=>{

    console.log(e.target.value);
   
  

  }


  const data=[
    {
      name:"React for Begainer",
      imageUrl:"/images/student/courseCardBanner.webp",
      chapters:20
    },

    {
      name:"React for Begainer",
      imageUrl:"/images/student/courseCardBanner.webp",
      chapters:20
    },

    {
      name:"React for Begainer",
      imageUrl:"/images/student/courseCardBanner.webp",
      chapters:20
    },
    {
      name:"React for Begainer",
      imageUrl:"/images/student/courseCardBanner.webp",
      chapters:20
    },

    {
      name:"React for Begainer",
      imageUrl:"/images/student/courseCardBanner.webp",
      chapters:20
    },

    {
      name:"React for Begainer",
      imageUrl:"/images/student/courseCardBanner.webp",
      chapters:20
    },

    {
      name:"React for Begainer",
      imageUrl:"/images/student/courseCardBanner.webp",
      chapters:20
    }
  ]
  return (
   
      <StudentLayout>


<div className="flex  px-4 gap-4  mb-8 ">
  <CategoriesCard name={'Accounting'}/>
  <CategoriesCard  name={'Web Development'}/>
  <CategoriesCard  name={'App Development'}/>

  <CategoriesCard  name={'BlockChain'}/>
  <CategoriesCard  name={'Ui/Ux Design'}/>
  <CategoriesCard  name={'Devops'}/>
</div>
    <div className="flex  gap-y-4 gap-3 mx-auto flex-wrap">
      {data?.map((item,index)=>(
        <div key={index} onClick={()=>router.push('/course/1')}><CourseCard chapters={item?.chapters} imageUrl={item?.imageUrl} name={item?.name}/></div>
     
      ))}
   
    </div>
    
      
    </StudentLayout>

  );
}
