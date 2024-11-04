"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Reveal } from "../components/ui/Reveal";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const navItems = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "About",
    path: "about",
  },
  {
    text: "Partnership",
    path: "partnership",
  },
  {
    text: "Our Services",
    path: "our-services",
  },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("ng");
  const pathname = usePathname();

  useEffect(() => {
    const countryFromPath = pathname.split("/")[1];
    if (countryFromPath) {
      setSelectedCountry(countryFromPath);
    }
  }, [pathname]);

  const getIsSelected = (path: string) => {
    if (pathname.includes(`/${path}`) || pathname === path) return true;
  };
  return (
    <div className="container mx-auto p-4 font-semibold">
      <div className="flex items-center justify-between">
        <Link href="/" className="relative ">
          <Image
            quality={100}
            src={"/mansu-logo.png"}
            alt="logo"
            className="object-cover"
            width={55}
            height={55}
          />
        </Link>

        <Reveal position="top">
          <div
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden cursor-pointer text-primary"
          >
            {!navOpen ? (
              <Menu className="w-8 h-8" />
            ) : (
              <X className="w-8 h-8" />
            )}
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map(({ text, path }, index) => (
              <Link
                className={`hover:border-b-2 hover:border-primary ${
                  getIsSelected(path) ? " border-b-2 border-primary" : ""
                }`}
                href={path}
                key={index}
              >
                {text}
              </Link>
            ))}
            <Link
              href={"contact-us"}
              className="bg-primary text-white p-2 rounded-lg hover:bg-primary/50"
            >
              Contact Us
            </Link>

            <Select
              value={selectedCountry}
              onValueChange={(value: string) => {
                setSelectedCountry(value);
                if (typeof window !== "undefined") {
                  window.location.href = `/${value}`;
                }
              }}
            >
              <SelectTrigger className="rounded-lg border bg-white">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent className="rounded-lg border-white border-opacity-10 bg-white">
                <SelectItem value={"ng"}>🇳🇬 NG</SelectItem>
                <SelectItem value={"uk"}>🇬🇧 UK</SelectItem>
                <SelectItem value={"gh"}>🇬🇭 GH</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Reveal>
      </div>

      {navOpen && (
        <div className="md:hidden flex flex-col justify-center w-full gap-5 pt-4">
          {navItems.map(({ text, path }, index) => (
            <Link
              className={` w-full ${
                getIsSelected(path) ? " border-b-2 border-primary" : ""
              }`}
              onClick={() => setNavOpen(!navOpen)}
              href={path}
              key={index}
            >
              {text}
            </Link>
          ))}
          <Link
            onClick={() => setNavOpen(!navOpen)}
            href={"contact-us"}
            className="bg-primary text-white p-2 rounded-lg w-fit"
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
