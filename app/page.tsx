import TopBar from "@/components/topBar/topBar";
import TradingViewWidget from "@/components/chart/chart";

export default function Home() {
  return (
    <main className=" bg-[#10141B] ">
      <div className="topBar">
        <TopBar/>
      </div>
      <div className="mainContent flex">
        <div className=" w-1/4 h-75 "></div>
        <div className=" w-2/4 h-75 ">
          <TradingViewWidget />
        </div>
        <div className=" w-1/4 h-75 "></div>
      </div>
    </main>
    
  );
}
