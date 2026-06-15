import TopBar from "@/components/topBar/topBar";
import LeftSide from "@/components/leftSide/leftSide";
import TradingViewWidget from "@/components/chart/chart";
import MarketSearch from "@/components/rightSide/marketSearch";
import Transactions from "@/components/rightSide/transactions";
import BuySell from "@/components/buySell/buySell";

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
        <div className=" w-2/4 ">
          <div className=" w-full h-100 shadow-2xl bg-[#11161D] p-3 mb-1.5 ">
          <TradingViewWidget />
          </div>
          <div className=" w-full shadow-2xl bg-[#11161D] p-3 ">
            <BuySell/>
          </div>
        </div>
        <div className=" w-1/4 ">
          <div className=" w-full h-fit shadow-2xl bg-[#11161D] px-3 ">
            <MarketSearch />
          </div>
          <div className=" w-full h-fit shadow-2xl bg-[#11161D] px-3 ">
            <Transactions/>
          </div>
        </div>
      </div>
      <div className=" w-full h-52 bg-red-500 "></div>
    </main>
  );
}
