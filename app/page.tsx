import TopBar from "@/components/topBar/topBar";
import LeftSide from "@/components/leftSide/leftSide";
import TradingViewWidget from "@/components/chart/chart";

export default function Home() {
  return (
    <main className=" bg-[#10141B] ">
      <div className="topBar">
        <TopBar />
      </div>
      <div className="mainContent flex px-3 gap-2">
        <div className=" w-1/4 shadow-2xl bg-[#11161D] p-3 ">
          <LeftSide />
        </div>
        <div className=" w-2/4 h-100 shadow-2xl bg-[#11161D] p-3 ">
          <TradingViewWidget />
        </div>
        <div className=" w-1/4 h-75 "></div>
      </div>
    </main>
  );
}
