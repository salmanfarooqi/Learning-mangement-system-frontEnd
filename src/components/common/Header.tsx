import { useRouter } from "next/router";

const Navbar=()=>{
   const router=useRouter()
    return(
        <div className={`w-full py-3 !z-50 border  bg-white flex justify-between px-4 border-t-0 shadow-sm items-center !sticky  top-0 `}>
         
          <p className="cursor-pointer" onClick={()=>{router.push('/')}}>Logo</p>
      
                <input type="text" placeholder="Search" className="md:py-2 py-1 w-1/2 px-4 md:w-1/3 rounded-md border focus:outline-none" />
      

      <div className="flex justify-center items-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-400  text-white text-center font-bold pb-1 md:pb-2 text-base md:text-xl ">m</div>
        </div>
    )
}

export default Navbar;