"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useCountryContext } from "../context/CountryContext";

const CountrySelect = () => {
  const { location, setLocation } = useCountryContext();

  return (
    <Select
      value={location}
      onValueChange={(value: string) => {
        setLocation(value);
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
        <SelectItem value={"gb"}>🇬🇧 UK</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CountrySelect;
