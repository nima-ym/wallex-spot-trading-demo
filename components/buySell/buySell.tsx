"use client";

import * as React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Slider } from "@/components/ui/slider";

interface buySellProps{
  darkMode:string
}

export default function BuySell({darkMode}:buySellProps) {
  const [sell, setSell] = React.useState([0]);
  const [buy, setBuy] = React.useState([0]);

  return (
    <div className=" buy&sell ">
      <div className=" header flex justify-between ">
        <div className={darkMode == "dark" ? "bg-[#1d2430] hover:bg-[#1e232ba3] duration-300 cursor-pointer rounded-[5px] p-1.5" : "bg-[#f6f7f8] hover:bg-[#dedfe1] duration-300 cursor-pointer rounded-[5px] p-1.5"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              fill={darkMode == "dark" ? "#ffffff99" : "#00000099"}
              d="M12 10.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75M11.995 7a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
            ></path>
            <path
              fill={darkMode == "dark" ? "#ffffff99" : "#00000099"}
              d="M1.25 12C1.25 6.086 6.086 1.25 12 1.25S22.75 6.086 22.75 12 17.914 22.75 12 22.75 1.25 17.914 1.25 12M12 2.75c-5.086 0-9.25 4.164-9.25 9.25s4.164 9.25 9.25 9.25 9.25-4.164 9.25-9.25S17.086 2.75 12 2.75"
            ></path>
          </svg>
        </div>
        <div className=" w-fit border-b-[3px] border-b-[#3395ff] px-2.5 ">
          <span className=" text-[#3395ff] ">Spot</span>
        </div>
      </div>
      <div>
        <div className=" flex gap-2.5 my-2.5 ">
          <p className={darkMode == "dark" ? " p-1.5 rounded-2xl bg-[#11161d] hover:bg-[#1e242c] duration-200 text-[#ffffff99] border border-[#ffffff0d] cursor-pointer text-[12px] leading-none " : " p-1.5 rounded-2xl bg-white hover:bg-[#e4e4e499] duration-200 text-[#00000099] border border-[#0000000d] cursor-pointer text-[12px] leading-none "}>
            {" "}
            Fixed price{" "}
          </p>
          <p className={darkMode == "dark" ? " p-1.5 rounded-2xl bg-[#11161d] hover:bg-[#1e242c] duration-200 text-[#ffffff99] border border-[#ffffff0d] cursor-pointer text-[12px] leading-none " : " p-1.5 rounded-2xl bg-white hover:bg-[#e4e4e499] duration-200 text-[#00000099] border border-[#0000000d] cursor-pointer text-[12px] leading-none "}>
            {" "}
            Market price{" "}
          </p>
          <p className={darkMode == "dark" ? " p-1.5 rounded-2xl bg-[#11161d] hover:bg-[#1e242c] duration-200 text-[#ffffff99] border border-[#ffffff0d] cursor-pointer text-[12px] leading-none " : " p-1.5 rounded-2xl bg-white hover:bg-[#e4e4e499] duration-200 text-[#00000099] border border-[#0000000d] cursor-pointer text-[12px] leading-none "}>
            {" "}
            Stop limit{" "}
          </p>
          <p className={darkMode == "dark" ? " p-1.5 rounded-2xl bg-[#11161d] hover:bg-[#1e242c] duration-200 text-[#ffffff99] border border-[#ffffff0d] cursor-pointer text-[12px] leading-none " : " p-1.5 rounded-2xl bg-white hover:bg-[#e4e4e499] duration-200 text-[#00000099] border border-[#0000000d] cursor-pointer text-[12px] leading-none "}>
            {" "}
            Stop Loss at Market Price
          </p>
        </div>
        <div className=" flex flex-row gap-6 ">
          <div className=" basis-1/2 ">
            <div>
              <InputGroup className={darkMode == "dark" ? " bg-[#1d2430] " : " bg-[#f5f6f7] "}>
                <InputGroupInput />
                <InputGroupAddon className=" text-[12px] ">TMN</InputGroupAddon>
                <InputGroupAddon
                  align="inline-end"
                  className={darkMode == "dark" ? " text-[12px] border-l border-[#ffffff0d] pl-2.5 h-fit w-16 " : " text-[12px] border-l border-[#8282822d] pl-2.5 h-fit w-16 "}
                >
                  Price
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className=" mt-2.5 ">
              <InputGroup className={darkMode == "dark" ? " bg-[#1d2430] " : " bg-[#f5f6f7] "}>
                <InputGroupInput />
                <InputGroupAddon className=" text-[12px] ">BTC</InputGroupAddon>
                <InputGroupAddon
                  align="inline-end"
                  className={darkMode == "dark" ? " text-[12px] border-l border-[#ffffff0d] pl-2.5 h-fit w-16 " : " text-[12px] border-l border-[#8282822d] pl-2.5 h-fit w-16 "}
                >
                  Amount
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className=" mt-8 ">
              <div className="mx-auto grid w-full max-w-xs gap-3">
                <div className="flex items-center justify-between gap-2">
                    <div className=" flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#007aff"
                          d="M3.668 3.668C5.366 1.97 8.098 1.5 12 1.5s6.634.47 8.332 2.168S22.5 8.098 22.5 12s-.47 6.634-2.168 8.332S15.902 22.5 12 22.5s-6.634-.47-8.332-2.168S1.5 15.902 1.5 12s.47-6.634 2.168-8.332"
                          opacity="0.1"
                        ></path>
                        <path
                          fill="#007aff"
                          d="M12 6.563c.518 0 .938.42.938.937v3.563H16.5a.937.937 0 1 1 0 1.874h-3.562V16.5a.937.937 0 1 1-1.876 0v-3.562H7.5a.937.937 0 1 1 0-1.876h3.563V7.5c0-.518.42-.937.937-.937"
                        ></path>
                      </svg>
                      <p className={darkMode == "dark" ? " text-[#ffffff66] text-[12px] " : " text-[#00000066] text-[12px] "}><span>{sell.join(", ")}</span> BTC</p>
                    </div>
                    <div className={darkMode == "dark" ? " text-[#ffffff66] text-[12px] " : " text-[#00000099] text-[12px] "}>
                      Available
                    </div>
                </div>
                <Slider
                  defaultValue={[0]}
                  value={sell}
                  onValueChange={setSell}
                  min={0}
                  max={100}
                  step={1}
                  className={darkMode == "dark" ? "mx-auto w-full max-w-xs bg-[#1d2430]" : "mx-auto w-full max-w-xs bg-[#f5f6f7]"}
                />
              </div>
            </div>
            <div className=" mt-6 ">
              <InputGroup className={darkMode == "dark" ? " bg-[#1d2430] " : " bg-[#f5f6f7] "}>
                <InputGroupInput />
                <InputGroupAddon className=" text-[12px] ">TMN</InputGroupAddon>
                <InputGroupAddon
                  align="inline-end"
                  className={darkMode == "dark" ? " text-[12px] border-l border-[#ffffff0d] pl-2.5 h-fit w-16 " : " text-[12px] border-l border-[#8282822d] pl-2.5 h-fit w-16 "}
                >
                  Total
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className=" mt-2.5 flex justify-between items-center ">
              <p className=" text-[12px] text-[#ffffff66] ">0 TMN</p>
              <p className=" text-[12px] text-[#ffffff66] ">Your receipt</p>
            </div>
            <div className=" mt-2.5 ">
              <div className={darkMode == "dark" ? " flex justify-center items-center rounded-[10px] bg-[#1d2430] py-1 text-[#6D7074] font-bold text-[14px] " : " flex justify-center items-center rounded-[10px] bg-[#d7dadf] py-1 text-[#6D7074] font-bold text-[14px] "}> SELL </div>
            </div>
          </div>
          <div className=" basis-1/2 ">
            <div>
              <InputGroup className={darkMode == "dark" ? " bg-[#1d2430] " : " bg-[#f5f6f7] "}>
                <InputGroupInput />
                <InputGroupAddon className=" text-[12px] ">TMN</InputGroupAddon>
                <InputGroupAddon
                  align="inline-end"
                  className={darkMode == "dark" ? " text-[12px] border-l border-[#ffffff0d] pl-2.5 h-fit w-16 " : " text-[12px] border-l border-[#8282822d] pl-2.5 h-fit w-16 "}
                >
                  Price
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className=" mt-2.5 ">
              <InputGroup className={darkMode == "dark" ? " bg-[#1d2430] " : " bg-[#f5f6f7] "}>
                <InputGroupInput />
                <InputGroupAddon className=" text-[12px] ">BTC</InputGroupAddon>
                <InputGroupAddon
                  align="inline-end"
                  className={darkMode == "dark" ? " text-[12px] border-l border-[#ffffff0d] pl-2.5 h-fit w-16 " : " text-[12px] border-l border-[#8282822d] pl-2.5 h-fit w-16 "}
                >
                  Amount
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className=" mt-8 ">
              <div className="mx-auto grid w-full max-w-xs gap-3">
                <div className="flex items-center justify-between gap-2">
                    <div className=" flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#007aff"
                          d="M3.668 3.668C5.366 1.97 8.098 1.5 12 1.5s6.634.47 8.332 2.168S22.5 8.098 22.5 12s-.47 6.634-2.168 8.332S15.902 22.5 12 22.5s-6.634-.47-8.332-2.168S1.5 15.902 1.5 12s.47-6.634 2.168-8.332"
                          opacity="0.1"
                        ></path>
                        <path
                          fill="#007aff"
                          d="M12 6.563c.518 0 .938.42.938.937v3.563H16.5a.937.937 0 1 1 0 1.874h-3.562V16.5a.937.937 0 1 1-1.876 0v-3.562H7.5a.937.937 0 1 1 0-1.876h3.563V7.5c0-.518.42-.937.937-.937"
                        ></path>
                      </svg>
                      <p className={darkMode == "dark" ? " text-[#ffffff66] text-[12px] " : " text-[#00000066] text-[12px] "}><span>{buy.join(", ")}</span> TMN</p>
                    </div>
                    <div className={darkMode == "dark" ? " text-[#ffffff66] text-[12px] " : " text-[#00000099] text-[12px] "}>
                      Available
                    </div>
                </div>
                <Slider
                  defaultValue={[0]}
                  value={buy}
                  onValueChange={setBuy}
                  min={0}
                  max={100}
                  step={1}
                  className={darkMode == "dark" ? "mx-auto w-full max-w-xs bg-[#1d2430]" : "mx-auto w-full max-w-xs bg-[#f5f6f7]"}
                />
              </div>
            </div>
            <div className=" mt-6 ">
              <InputGroup className={darkMode == "dark" ? " bg-[#1d2430] " : " bg-[#f5f6f7] "}>
                <InputGroupInput />
                <InputGroupAddon className=" text-[12px] ">TMN</InputGroupAddon>
                <InputGroupAddon
                  align="inline-end"
                  className={darkMode == "dark" ? " text-[12px] border-l border-[#ffffff0d] pl-2.5 h-fit w-16 " : " text-[12px] border-l border-[#8282822d] pl-2.5 h-fit w-16 "}
                >
                  Total
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className=" mt-2.5 flex justify-between items-center ">
              <p className=" text-[12px] text-[#ffffff66] ">0 BTC</p>
              <p className=" text-[12px] text-[#ffffff66] ">Your receipt</p>
            </div>
            <div className=" mt-2.5 ">
              <div className={darkMode == "dark" ? " flex justify-center items-center rounded-[10px] bg-[#1d2430] py-1 text-[#6D7074] font-bold text-[14px] " : " flex justify-center items-center rounded-[10px] bg-[#d7dadf] py-1 text-[#6D7074] font-bold text-[14px] "}> BUY </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
