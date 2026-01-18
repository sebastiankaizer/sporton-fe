"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useCartStore } from "@/app/hooks/use-cart-store";

const Header = () => {
  const { items } = useCartStore();
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

  return (
    <header className="fixed w-full z-20 backdrop-blur-xl bg-white/50 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center gap-10 py-7">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="sporton logo"
            width={127}
            height={30}
          />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-24 font-medium">
          <Link
            href="/"
            className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1"
          >
            Home
          </Link>
          <Link href="#" className="hover:text-primary transition">Category</Link>
          <Link href="#" className="hover:text-primary transition">Explore Products</Link>
        </nav>

        {/* Actions */}
        <div className="relative flex gap-10 items-center">
          <button className="cursor-pointer hover:text-primary transition">
            <FiSearch size={24} />
          </button>

          <button
            className="relative cursor-pointer hover:text-primary transition"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
            <FiShoppingBag size={24} />
            
            {items.length > 0 && (
              <div className="bg-primary rounded-full min-w-4 h-4 absolute -top-1.5 -right-2 text-[10px] text-white flex items-center justify-center px-1 border-2 border-white">
                {items.length}
              </div>
            )}
          </button>

          {/* Cart Dropdown */}
          {isCartPopupOpen && <CartPopup />}
        </div>
      </div>
    </header>
  );
};

export default Header;