"use client";

import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { usePathname } from "next/navigation";

const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState("ng");
  const pathname = usePathname();

  useEffect(() => {
    const countryFromPath = pathname.split("/")[1];
    if (countryFromPath) {
      setSelectedCountry(countryFromPath);
    }
  }, [pathname]);
  return (
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
        <SelectItem value={"gh"}>🇬🇭 GH</SelectItem>
        <SelectItem value={"uk"}>🇬🇧 UK</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CountrySelect;
