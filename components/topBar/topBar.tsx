import Image from "next/image"
import btc from "@/public/BTC.svg"
import "@/app/globals.css"

export default function TopBar(){
    return(
        <div className=" w-full h-20 flex gap-6 items-center px-5 ">
            <div className=" h-fit ">
                <Image src={btc} alt="btc icon" width={35} height={35}/>
            </div>
            <div className=" h-fit ">
                <div className=" text-white font-bold ">BTC<span className=" text-gray-500 ">/TMN</span></div>
                <div className=" text-white text-[12px] ">Bitcoin<span className=" text-gray-500 ">/Toman</span></div>
            </div>
            <div className=" h-fit ">
                <div className=" text-red-500 w-fit mx-auto "> 11,288,959,731 </div>
                <div className=" text-gray-500 text-[12px] "> ≈ 63,478.22 USDT </div>
            </div>
            <div className=" h-fit ">
                <div className=" text-gray-500 text-[12px] font-bold "> 24h changes </div>
                <div className=" text-green-500 text-[14px] "> + 1.7% </div>
            </div>
            <div className=" h-fit ">
                <div className=" text-gray-500 text-[12px] font-bold "> Highest price 24h </div>
                <div className=" text-white text-[14px] "> 11,336,002,511 </div>
            </div>
            <div className=" h-fit ">
                <div className=" text-gray-500 text-[12px] font-bold "> Lowest price 24h </div>
                <div className=" text-white text-[14px] "> 10,855,000,001 </div>
            </div>
            <div className=" h-fit ">
                <div className=" text-gray-500 text-[12px] font-bold "> 24h trading volume (BTC) </div>
                <div className=" text-white text-[14px] "> 7.699 </div>
            </div>
            <div className=" h-fit ">
                <div className=" text-gray-500 text-[12px] font-bold "> 24h trading volume (TMN) </div>
                <div className=" text-white text-[14px] "> 85,496,465,895 </div>
            </div>
            <div className=" h-fit ">
                <div className=" text-gray-500 text-[12px] font-bold flex items-center gap-1 ">
                    <div className=" topbaranimation w-3 h-3 rounded-full bg-[#00b88a] border-[3px] border-solid border-[#07775e] "></div>
                     Index Price (TMN) </div>
                <div className=" text-white text-[14px] "> 11,236,043,177 </div>
            </div>
        </div>
    )
}