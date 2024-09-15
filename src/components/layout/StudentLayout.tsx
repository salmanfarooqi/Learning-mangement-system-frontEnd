import Navbar from "../common/Header"
import Sidebar from "../common/Sidebart"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsBrowserSafari } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { useEffect, useState } from "react";

const StudentLayout = ({children}:any) => {
    const [sidebarData,setSidbarData]=useState([{
        name:"Dashboard",
        icon:<MdOutlineDashboardCustomize/>,
        url:"localhsot:300"
    },
    {
        name:"Browse",
        icon:<BsBrowserSafari/>,
        url:"localhsot:300"
    },

    
    {
        name:"WorkShops",
        icon:<GrCertificate/>,
        url:"localhsot:300"
    },

    {
        name:"Certificats",
        icon:<GrCertificate/>,
        url:"localhsot:300"
    },



])

    useEffect(()=>{
        const path = window.location.pathname;
        const courseIdPattern = /^\/course\/\d+$/; 
        
        if (courseIdPattern.test(path)) {
          // Your code here
     
            setSidbarData(
                [
    
                    {
                        name:"Certificats",
                        icon:<GrCertificate/>,
                        url:"localhsot:300"
                    },
    
                ]
            )

         
    
          }
        
          else if(window.location.pathname=='/teacher'){



            
            setSidbarData(
                [
    
                    {
                        name:"Analytics",
                        icon:<GrCertificate/>,
                        url:"localhsot:300"
                    },
    
                ]
            )

          }
        
    },[])
   
    return (
        <div className="w-full">
            <Navbar />

           

            <div className="flex w-full bg-[#F9FAFB]">

            <div className="w-[300px]">
                <Sidebar data={sidebarData as any} />
            </div>

            <div className=" px-6 py-6 w-full ">   {children}</div>
             

            
            </div>

        </div>
    )
}

export default StudentLayout;