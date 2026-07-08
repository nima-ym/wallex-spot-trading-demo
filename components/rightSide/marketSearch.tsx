import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import { useState } from "react";

const sales = [
  {
    id: 0,
    totalPrice: "INV001",
    amount: "Paid",
    price: "$250.00",
    star: false,
  },
  {
    id: 1,
    totalPrice: "INV002",
    amount: "Pending",
    price: "$150.00",
    star: false,
  },
  {
    id: 2,
    totalPrice: "INV003",
    amount: "Unpaid",
    price: "$350.00",
    star: false,
  },
  {
    id: 3,
    totalPrice: "INV004",
    amount: "Paid",
    price: "$450.00",
    star: false,
  },
  {
    id: 4,
    totalPrice: "INV005",
    amount: "Paid",
    price: "$550.00",
    star: false,
  },
  {
    id: 5,
    totalPrice: "INV006",
    amount: "Pending",
    price: "$200.00",
    star: false,
  },
  {
    id: 6,
    totalPrice: "INV007",
    amount: "Unpaid",
    price: "$300.00",
    star: false,
  },
  {
    id: 7,
    totalPrice: "INV008",
    amount: "Unpaid",
    price: "$300.00",
    star: false,
  },
  {
    id: 8,
    totalPrice: "INV009",
    amount: "Unpaid",
    price: "$300.00",
    star: false,
  },
  {
    id: 9,
    totalPrice: "INV010",
    amount: "Unpaid",
    price: "$300.00",
    star: false,
  },
  {
    id: 10,
    totalPrice: "INV011",
    amount: "Unpaid",
    price: "$300.00",
    star: false,
  },
  {
    id: 11,
    totalPrice: "INV012",
    amount: "Unpaid",
    price: "$300.00",
    star: false,
  },
  {
    id: 12,
    totalPrice: "INV013",
    amount: "Unpaid",
    price: "$300.00",
    star: false,
  },
];

interface marketSearchProps {
  darkMode: string;
}

export default function MarketSearch({ darkMode }: marketSearchProps) {
  const [tabs, setTabs] = useState<"all" | "star">("all");
  const [starList, setStarList] = useState(sales);

  function changeStarList(id: number) {
    setStarList((prevSale) =>
      prevSale.map((sale) =>
        sale.id === id ? { ...sale, star: !sale.star } : sale,
      ),
    );
  }

  const visibleSales =
    tabs === "all" ? starList : starList.filter((sale) => sale.star);

  return (
    <div className=" rightSide ">
      <div className=" w-full flex justify-center border-b-[3px] border-b-[#3395ff] ">
        <p className=" text-[#3395ff] py-2.5 ">Spot</p>
      </div>
      <div className=" my-2.5 ">
        <InputGroup
          className={darkMode == "dark" ? " bg-[#1d2430] " : " bg-[#f5f6f7] "}
        >
          <InputGroupInput placeholder="Market search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div
        className={`mb-3 flex items-center gap-2 rounded-full border p-1.5 shadow-sm ${
          darkMode === "dark"
            ? "border-[#2a3442] bg-[#11161D]"
            : "border-[#3395ff]/20 bg-[#f5f7fb]"
        }`}
      >
        <button
          onClick={() => setTabs("all")}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
            tabs === "all"
              ? "bg-[#3395ff] text-white shadow-sm"
              : darkMode === "dark"
                ? "text-[#ffffff99] hover:bg-[#1d2430]"
                : "text-[#3395ff] hover:bg-[#3395ff]/10"
          }`}
        >
          All sales
        </button>
        <button
          onClick={() => setTabs("star")}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
            tabs === "star"
              ? "bg-[#3395ff] text-white shadow-sm"
              : darkMode === "dark"
                ? "text-[#ffffff99] hover:bg-[#1d2430]"
                : "text-[#3395ff] hover:bg-[#3395ff]/10"
          }`}
        >
          Marked
        </button>
      </div>
      <div className="my-2.5 min-h-70">
        <Table>
          <TableHeader>
            <TableRow
              className={
                darkMode == "dark"
                  ? " border-none bg-[#11161D] "
                  : " border-none bg-white "
              }
            >
              <TableHead
                className={
                  darkMode == "dark"
                    ? " text-[12px] text-[#ffffff99] "
                    : " text-[12px] text-[#00000099] "
                }
              >
                24h change
              </TableHead>
              <TableHead
                className={
                  darkMode == "dark"
                    ? " text-[12px] text-[#ffffff99] text-right "
                    : " text-[12px] text-[#00000099] text-right "
                }
              >
                Unit price
              </TableHead>
              <TableHead
                className={
                  darkMode == "dark"
                    ? " text-[12px] text-[#ffffff99] text-right "
                    : " text-[12px] text-[#00000099] text-right "
                }
              >
                Market
              </TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleSales.length > 0 ? (
              visibleSales.map((sale) => (
                <TableRow key={sale.totalPrice} className="border-none">
                  <TableCell
                    className={
                      darkMode == "dark"
                        ? "font-medium text-white text-[12px] "
                        : "font-medium text-black text-[12px] "
                    }
                  >
                    {sale.totalPrice}
                  </TableCell>
                  <TableCell
                    className={
                      darkMode == "dark"
                        ? " text-right text-white text-[12px] "
                        : " text-right text-black text-[12px] "
                    }
                  >
                    {sale.amount}
                  </TableCell>
                  <TableCell className=" text-right text-[#f65555] text-[12px] ">
                    {sale.price}
                  </TableCell>
                  <TableCell className="text-right">
                    <button
                      onClick={() => changeStarList(sale.id)}
                      className={`rounded-full p-2 text-sm transition-all ${
                        sale.star
                          ? "bg-amber-400 text-white shadow-sm"
                          : darkMode === "dark"
                            ? "bg-[#1d2430] text-[#3395ff] hover:bg-[#243042]"
                            : "bg-[#f5f7fb] text-[#3395ff] hover:bg-[#3395ff]/10"
                      }`}
                      aria-label={
                        sale.star ? "Remove from marked" : "Mark sale"
                      }
                    >
                      {sale.star ? "★" : "☆"}
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="border-none">
                <TableCell colSpan={4} className="py-10 text-center">
                  <div
                    className={`rounded-xl border border-dashed px-4 py-6 text-sm ${
                      darkMode === "dark"
                        ? "border-[#2a3442] bg-[#11161D] text-[#aeb9c7]"
                        : "border-[#3395ff]/25 bg-[#f5f7fb] text-[#5b6b7a]"
                    }`}
                  >
                    There is no marked sale
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
