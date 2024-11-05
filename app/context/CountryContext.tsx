"use client";
import { usePathname } from "next/navigation";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type CountryContextType = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};

const CountryContext = createContext<CountryContextType | null>(null);

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountryContext must be used within a CountryProvider");
  }
  return context;
};

export const CountryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [location, setLocation] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await fetch("http://ip-api.com/json");
      const data = await response.json();
      const countryCode = data.countryCode.toString().toLowerCase();

      if (
        pathname.startsWith("/ng") ||
        pathname.startsWith("/gh") ||
        pathname.startsWith("/gb")
      ) {
        setLocation(pathname.substring(1));
      } else if (
        countryCode !== "ng" &&
        countryCode !== "gb" &&
        countryCode !== "gh"
      ) {
      } else {
        setLocation(countryCode);
      }
    };

    fetchLocation();
  }, [pathname]);

  return (
    <CountryContext.Provider value={{ location, setLocation }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
