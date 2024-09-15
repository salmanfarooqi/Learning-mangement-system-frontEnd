import Button from "@/components/common/button"

const UpgradeCardPlan=()=>{
    return(
        <div className="w-full px-3 py-3 rounded-md border">
            <h1>upgrade to Pro</h1>
            <p className="py-2">Unlock all courses, get access to source code, and more</p>
            <Button className="bg-black text-center mt-1 text-white text-bold w-[90%] rounded-md py-2">
                
                    Upgrade
              
            </Button>

        </div>
    )
}

export default UpgradeCardPlan;