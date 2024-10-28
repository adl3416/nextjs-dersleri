import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import { categories } from "@/constans";

const CartMenu = () => {
  return (
   
      <Sheet>
        <SheetTrigger>
        <ShoppingBagIcon/>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col mt-8 space-y-6">
           Empty Card
          </div>
        </SheetContent>
      </Sheet>
    
  );
};

export default CartMenu;
