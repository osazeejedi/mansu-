import Image from "next/image";
import Link from "next/link";
import React from "react";

const quickLinksItems = [
  { id: 1, text: "Company", href: "/" },
  { id: 2, text: "Partnership", href: "partnership" },
  { id: 3, text: "Our Services", href: "our-services" },
  { id: 4, text: "Contact Us", href: "contact-us" },
];
const homeItems = [
  { id: 1, text: "Terms and Condition", href: "#" },
  { id: 2, text: "Privacy Policy", href: "#" },
  { id: 3, text: "Partnership", href: "partnership" },
  { id: 4, text: "Info@mansu.io", href: "mailto:Info@mansu.io" },
];

const Footer = () => {
  return (
    <div className="bg-black p-4 text-white">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="flex flex-col col-span-1 md:col-span-3">
            <div className="mb-5">
              <Image src="/logo-white.png" alt="logo" width={60} height={60} />
            </div>

            <p className="text-grey text-xl md:pr-8 w-full md:w-4/5">
              Mansu is a consultancy business that provides expert guidance and
              resources to help tech start-ups succeed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 mt-10 md:mt-0">
            <div className="space-y-3 flex flex-col">
              <h6 className="font-medium">Quick Links</h6>
              {quickLinksItems.map(({ id, text, href }) => (
                <Link className="text-grey text-sm" key={id} href={href}>
                  {text}
                </Link>
              ))}
            </div>

            <div className="space-y-3 flex flex-col">
              <h6 className="font-medium">Home</h6>
              {homeItems.map(({ id, text, href }) => (
                <Link className="text-grey text-sm" key={id} href={href}>
                  {text}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-10 md:mt-0">
              <h6 className="font-medium">Locations</h6>
              <p className="text-sm text-grey">
                5-7 Turnbull Road, Ikoyi Lagos, Nigeria
              </p>
              <p className="text-sm text-grey">
                Building 3 North London Business Park Oakleigh Road South London
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center gap-2 mt-14 md:mt-28">
          <p className="text-lg text-grey">2024</p>
          <p className="text-lg text-grey">Mansu Company All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
