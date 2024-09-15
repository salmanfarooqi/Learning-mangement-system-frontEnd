  import { useState } from "react";
import {OpenEyeIcon,CloseEyeIcon} from '@/components/icon/icon'

interface props{
    type:string,
    placeholder?:string,
    className?:string
    handleChange:()=>void
}
const Input=({type,placeholder,className,handleChange}:props)=>{
    const [showPassword,setShowPassword]=useState(false)
    const handleTogle=()=>{
        setShowPassword(!showPassword)
    }
    return(
      
        <div>
            {
                type==="password"?(

                    <div>
                  <input type={showPassword ? "text":"password"} placeholder={placeholder} className={className} onChange={handleChange} />  
                  <div onClick={handleTogle}>
                    {showPassword ? <OpenEyeIcon/>:<CloseEyeIcon/>}
                    </div>
   
                  </div>
                  
                ):(

                    
                  <input type={type} placeholder={placeholder} className={className} onChange={handleChange} /> 

                )
            }
        </div>
      
    )
}


export default Input;





