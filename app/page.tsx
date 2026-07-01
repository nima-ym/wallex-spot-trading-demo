"use client";

import TopBar from "@/components/topBar/topBar";
import LeftSide from "@/components/leftSide/leftSide";
import TradingViewWidget from "@/components/chart/chart";
import MarketSearch from "@/components/rightSide/marketSearch";
import Transactions from "@/components/rightSide/transactions";
import BuySell from "@/components/buySell/buySell";
import OrderHistory from "@/components/orderHistory/orderHistory";
import "@/app/globals.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState("");
  

  return (
    <main className={darkMode == "dark" ? "bggradient05 px-3" : "bggradient06 px-3"}>
      <div className="topBar flex items-center">
        <TopBar darkMode={darkMode} />
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                {darkMode == "dark" ? (
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all dark:scale-100 dark:rotate-0" />
                ) : (
                  <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setDarkMode("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDarkMode("light")}>
                Light
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="mainContent h-fit flex gap-2">
        <div className={darkMode == "dark" ? "w-1/4  bg-[#11161D] p-3" : "w-1/4  bg-white p-3"}>
          <LeftSide darkMode={darkMode} />
        </div>
        <div className=" w-2/4 ">
          <div className={darkMode == "dark" ? "w-full h-100  bg-[#11161D] p-3 mb-1.5" : "w-full h-100  bg-white p-3 mb-1.5"}>
            <TradingViewWidget darkMode={darkMode} />
          </div>
          <div className={darkMode == "dark" ? "w-full bg-[#11161D] p-3" : "w-full bg-white p-3 "}>
            <BuySell darkMode={darkMode} />
          </div>
        </div>
        <div className=" w-1/4 ">
          <div className={darkMode == "dark" ? "w-full h-fit  bg-[#11161D] px-3" : "w-full h-fit  bg-white px-3 "}>
            <MarketSearch darkMode={darkMode} />
          </div>
          <div className={darkMode == "dark" ? "w-full h-fit  bg-[#11161D] px-3" : "w-full h-fit  bg-white px-3 "}>
            <Transactions darkMode={darkMode} />
          </div>
        </div>
      </div>
      <div className={darkMode == "dark" ? "w-full h-50 bg-[#11161D] px-3 mt-1.5" : "w-full h-50 bg-white px-3 mt-1.5"}>
        <OrderHistory darkMode={darkMode} />
      </div>
    </main>
  );
}