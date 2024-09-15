
import UpgradeCardPlan from "../student/cards/UpgradePlanCard";

interface props{
    data:[{
        icon:string
        name:string
        url:string
    }]
}

const Sidebar=({data}:props)=>{
  

    return(

        <div className=" w-full cursor-pointer border border-t-0 h-[calc(100vh-70px)] sticky top-[67px] scroll-y-auto  bg-white py-6">

            
                {
                    data?.map((item,index)=>(


                        <div className="flex items-center py-4 px-4 gap-2">
                        <p>{item?.icon}</p>
                        <p>{item?.name}</p>
                        {/* <p>{item?.url}</p> */}
                     </div>

                    ))
                }


                <div className="px-2 mt-10 ">
                    <UpgradeCardPlan/>
                </div>
                
            </div>
   

    )
}

export default Sidebar;