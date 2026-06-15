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

const sales = [
  {
    totalPrice: "INV001",
    amount: "Paid",
    price: "$250.00",
    bg: "60%",
  },
  {
    totalPrice: "INV002",
    amount: "Pending",
    price: "$150.00",
    bg: "40%",
  },
  {
    totalPrice: "INV003",
    amount: "Unpaid",
    price: "$350.00",
    bg: "80%",
  },
  {
    totalPrice: "INV004",
    amount: "Paid",
    price: "$450.00",
    bg: "30%",
  },
  {
    totalPrice: "INV005",
    amount: "Paid",
    price: "$550.00",
    bg: "20%",
  },
  {
    totalPrice: "INV006",
    amount: "Pending",
    price: "$200.00",
    bg: "50%",
  },
  {
    totalPrice: "INV007",
    amount: "Unpaid",
    price: "$300.00",
    bg: "70%",
  },
  {
    totalPrice: "INV008",
    amount: "Unpaid",
    price: "$300.00",
    bg: "10%",
  },
  {
    totalPrice: "INV009",
    amount: "Unpaid",
    price: "$300.00",
    bg: "90%",
  },
  {
    totalPrice: "INV010",
    amount: "Unpaid",
    price: "$300.00",
    bg: "60%",
  },
  {
    totalPrice: "INV011",
    amount: "Unpaid",
    price: "$300.00",
    bg: "80%",
  },
  {
    totalPrice: "INV012",
    amount: "Unpaid",
    price: "$300.00",
    bg: "40%",
  },
  {
    totalPrice: "INV013",
    amount: "Unpaid",
    price: "$300.00",
    bg: "30%",
  },
];

export default function MarketSearch() {
  return (
    <div className=" rightSide ">
      <div className=" w-full flex justify-center border-b-[3px] border-b-[#3395ff] ">
        <p className=" text-[#3395ff] py-2.5 ">Spot</p>
      </div>
      <div className=" my-2.5 ">
        <InputGroup  className=" bg-[#1d2430] ">
          <InputGroupInput placeholder="Market search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className=" my-2.5 ">
        <Table>
          <TableHeader>
            <TableRow className=" border-none ">
              <TableHead className=" text-[12px] text-[#ffffff99] ">
                24h change
              </TableHead>
              <TableHead className=" text-[12px] text-[#ffffff99] text-right ">
                Unit price
              </TableHead>
              <TableHead className=" text-[12px] text-[#ffffff99] text-right ">
                Market
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sales.map((sale) => (
              <TableRow
                key={sale.totalPrice}
                className="border-none"
              >
                <TableCell className="font-medium text-white text-[12px] ">
                  {sale.totalPrice}
                </TableCell>
                <TableCell className=" text-right text-white text-[12px] ">
                  {sale.amount}
                </TableCell>
                <TableCell className=" text-right text-[#f65555] text-[12px] ">
                  {sale.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
