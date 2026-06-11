import "@/app/globals.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator"

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

export default function LeftSide() {
  return (
    <div>
      <div className=" head mb-2.5 ">
        <div className=" flex justify-between ">
          <div className=" left flex w-fit gap-2.5 items-center ">
            <div className=" px-2.5 flex bg-[#3f2328] rounded-[5px] gap-0.5 items-center ">
              <p className=" text-[#f65555] text-[12px] ">Sale</p>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#00B88A"
                  d="M22.423 6.708a1 1 0 0 0-.923-.618h-4.909a1 1 0 1 0 0 2h2.494l-5.358 5.356-3.383-3.384c-.375-.375-1.038-.375-1.414 0l-6.138 6.14a1 1 0 0 0 1.415 1.415l5.43-5.433 3.382 3.383a1 1 0 0 0 1.415 0L20.5 9.503V12a1 1 0 1 0 2 0V7.09c0-.13-.027-.26-.077-.382"
                ></path>
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#f65555"
                  d="M22.424 17.29a1 1 0 0 0 .076-.38V12a1 1 0 0 0-2 0v2.496l-6.067-6.063a1 1 0 0 0-1.414 0l-3.383 3.383-5.429-5.433a.999.999 0 1 0-1.414 1.414l6.136 6.14a1 1 0 0 0 1.414 0l3.383-3.383 5.36 5.356H16.59a1 1 0 1 0 0 2h4.91a1 1 0 0 0 .707-.293c.094-.094.167-.206.217-.327"
                ></path>
              </svg>
            </div>
            <p className=" text-[#f65555] text-[12px] ">35%</p>
          </div>
          <div className=" right flex w-fit gap-2.5 items-center ">
            <p className=" text-[#00B88A] text-[12px] ">65%</p>
            <div className=" px-2.5 flex bg-[#0e3633] rounded-[5px] gap-0.5 items-center ">
              <p className=" text-[#00B88A] text-[12px] ">shopping</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#00B88A"
                  d="M22.423 6.708a1 1 0 0 0-.923-.618h-4.909a1 1 0 1 0 0 2h2.494l-5.358 5.356-3.383-3.384c-.375-.375-1.038-.375-1.414 0l-6.138 6.14a1 1 0 0 0 1.415 1.415l5.43-5.433 3.382 3.383a1 1 0 0 0 1.415 0L20.5 9.503V12a1 1 0 1 0 2 0V7.09c0-.13-.027-.26-.077-.382"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className=" bar mt-1.5 ">
          <div className=" flex w-full h-1.5 gap-0.5 ">
            <div className=" w-[35%] h-full bggradient02 rounded-l-2xl "></div>
            <div className=" w-[65%] h-full bggradient01 rounded-r-2xl "></div>
          </div>
        </div>
      </div>
      <Separator/>
      <div className=" table01 my-2.5 ">
        <Table>
          <TableHeader>
            <TableRow className=" border-none ">
              <TableHead className=" text-[12px] text-[#ffffff99] ">
                Total price (TMN)
              </TableHead>
              <TableHead className=" text-[12px] text-[#ffffff99] text-right ">
                Amount (BTC)
              </TableHead>
              <TableHead className=" text-[12px] text-[#ffffff99] text-right ">
                Price (TMN)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sales.map((sale) => (
              <TableRow
                key={sale.totalPrice}
                className="border-none bggradient03"
                style={{ backgroundSize: `${sale.bg} 100%` , backgroundPosition: "100% 0" , backgroundRepeat:"no-repeat" }}
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
      <Separator/>
      <div className=" flex justify-between items-center my-3 ">
        <p className=" text-[0.75rem] text-[#ffffff99] ">62,989.69 USDT ≈</p>
        <p className=" text-[#00b88a] text-[16px] ">11,368,632,065</p>
      </div>
      <Separator/>
      <div className=" table02 my-2.5 ">
        <Table>
          <TableBody>
            {sales.map((sale) => (
              <TableRow
                key={sale.totalPrice}
                className="border-none bggradient04"
                style={{ backgroundSize: `${sale.bg} 100%` , backgroundPosition: "100% 0" , backgroundRepeat:"no-repeat" }}
              >
                <TableCell className="font-medium text-white text-[12px] ">
                  {sale.totalPrice}
                </TableCell>
                <TableCell className=" text-right text-white text-[12px] ">
                  {sale.amount}
                </TableCell>
                <TableCell className=" text-right text-[#00b88a] text-[12px] ">
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
