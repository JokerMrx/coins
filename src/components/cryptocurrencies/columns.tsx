"use client";

import { ICryptocurrency } from "@/interfaces/cryptocurrencies";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import { COIN_MARKET_CAP_URL } from "@/constants";

export const columns: ColumnDef<ICryptocurrency>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const cryptocurrency: ICryptocurrency = row.original;

      return (
        <div>
          {Object.entries(cryptocurrency.quote).map(([currency, quote]) => {
            return (
              <p key={currency}>
                {currency}: {quote.price}
              </p>
            );
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "market_cap",
    header: "Market cap",
    cell: ({ row }) => {
      const cryptocurrency: ICryptocurrency = row.original;

      return (
        <div>
          {Object.entries(cryptocurrency.quote).map(([currency, quote]) => {
            return (
              <p key={currency}>
                {currency}: {quote.market_cap}
              </p>
            );
          })}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const cryptocurrency: ICryptocurrency = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                window.location.replace(
                  `${COIN_MARKET_CAP_URL}/currencies/${cryptocurrency.slug}`
                )
              }
            >
              View details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
