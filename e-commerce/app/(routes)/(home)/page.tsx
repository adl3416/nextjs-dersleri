
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react";
import Hero from "../components/Hero";
import ProductList from "../components/Product/ProductList";

export default function Home() {
  return (
 <div>

  <Hero/>
  <ProductList/>
 
 </div>
  );
}
