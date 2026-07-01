interface orderHistoryProps{
    darkMode:string
}

export default function OrderHistory({darkMode}:orderHistoryProps) {
  return (
    <div className=" orderHistory ">
        <div className=" flex py-5 gap-2.5 ">
            <p className={darkMode == "dark" ? " p-2 px-3 rounded-2xl bg-[#11161d] hover:bg-[#1e242c] duration-200 text-[#ffffff99] border border-[#ffffff0d] cursor-pointer leading-none " : " p-2 px-3 rounded-2xl bg-white hover:bg-[#e4e4e499] duration-200 text-[#00000099] border border-[#0000000d] cursor-pointer leading-none "}>
                Open orders
            </p>
            <p className={darkMode == "dark" ? " p-2 px-3 rounded-2xl bg-[#11161d] hover:bg-[#1e242c] duration-200 text-[#ffffff99] border border-[#ffffff0d] cursor-pointer leading-none " : " p-2 px-3 rounded-2xl bg-white hover:bg-[#e4e4e499] duration-200 text-[#00000099] border border-[#0000000d] cursor-pointer leading-none "}>
                Stop orders
            </p>
            <p className={darkMode == "dark" ? " p-2 px-3 rounded-2xl bg-[#11161d] hover:bg-[#1e242c] duration-200 text-[#ffffff99] border border-[#ffffff0d] cursor-pointer leading-none " : " p-2 px-3 rounded-2xl bg-white hover:bg-[#e4e4e499] duration-200 text-[#00000099] border border-[#0000000d] cursor-pointer leading-none "}>
                Order history
            </p>
            <p className={darkMode == "dark" ? " p-2 px-3 rounded-2xl bg-[#11161d] hover:bg-[#1e242c] duration-200 text-[#ffffff99] border border-[#ffffff0d] cursor-pointer leading-none " : " p-2 px-3 rounded-2xl bg-white hover:bg-[#e4e4e499] duration-200 text-[#00000099] border border-[#0000000d] cursor-pointer leading-none "}>
                Transaction history
            </p>
        </div>
        <div></div>
    </div>
  )
}
