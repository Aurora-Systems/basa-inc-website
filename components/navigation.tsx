"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, HardHat, Shield, Hospital, FlaskConical, ChevronDown, ChevronUp } from "lucide-react";


const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "https://basainc.substack.com/", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const industries = [
  { name: "Mining Equipment", href: "/industries/mining", icon:HardHat },
  { name: "Personal Protective Equipment", href: "/industries/ppe", icon:Shield},
  { name: "Medical & Pharmaceautical Equipment & Consumables", href: "/industries/medical", icon: Hospital },
  { name: "Chemicals and Adhesives", href: "/industries/chemicals", icon: FlaskConical }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 text-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex justify-center align-center align-middle text-center font-bold">
          <div>
            <img src="https://cdn.clipond.com/basainc/logo.png" alt="logo" width={"50"}/>
          </div>
          <div className="pt-2">
            <small >The World Is Yours</small>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:underline"
            >
              <span className="flex items-center">Industries {dropdownOpen?<ChevronUp size={15}/>:<ChevronDown size={15}/>}</span>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full mt-2 right-0 bg-white text-black rounded shadow-lg p-3 " style={{minWidth:"25vw"}}>
                {industries.map((ind) => (
                  <Link
                    key={ind.href}
                    href={ind.href}
                    className=" hover:text-primary-blue py-1 flex items-center  gap-2"
                  >
                    <div className=" p-2 bg-gradient-to-br from-primary-blue/30 to-primary-red/30 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <ind.icon className="h-6 w-6 text-primary-blue"/>

                    </div>
                    <div>
                    <span>{ind.name}</span>

                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Get Quote
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
           <Menu/>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/10 backdrop-blur-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block p-1">
              {item.label}
            </Link>
          ))}
          <div >
            <span className="block font-semibold mb-1">Industries</span>
            {industries.map((ind) => (
              <Link
                    key={ind.href}
                    href={ind.href}
                    className=" hover:text-primary-blue py-1 flex items-center  gap-2"
                  >
                    <div className=" p-2 bg-gradient-to-br from-primary-blue/30 to-primary-red/30 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <ind.icon className="h-6 w-6 text-primary-blue"/>

                    </div>
                    <div>
                    <span>{ind.name}</span>

                    </div>
                  </Link>
            ))}
          </div>
          <Link href="/contact">
          <button className="bg-primary-blue w-full text-white py-2 rounded mt-2">
            Get Quote
          </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
