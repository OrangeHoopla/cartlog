'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


export default function GroceryTable({data}: any) {

    // console.log(data);
    var cumilative = data.reduce((accumulator: any, currentItem: { total: any; }) => {
  return accumulator + currentItem.total;
  }, 0);
  return (
      <Table>
        <TableCaption>Recent Grocery Trips</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">Store</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data: {
              _id: Key | null | undefined; location: string | null | undefined; foo: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; items: string | any[]; transaction_date: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; total: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; 
}) => (
            <TableRow key={data._id}>
              <TableCell className="font-medium">{data.location}</TableCell>
              <TableCell>{data.items.length}</TableCell>
              <TableCell>{data.transaction_date}</TableCell>
              <TableCell className="text-right">{data.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">{ cumilative }</TableCell>
          </TableRow>
        </TableFooter>
        </Table>
  )
}
