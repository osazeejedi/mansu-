import { Reveal } from "@/app/components/ui/Reveal";
import Image from "next/image";
import React from "react";

const MarketingProductDesign = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 mt-10">
      <div className="bg-gradient-to-br from-primary  to-[#5F0F2E] rounded-xl text-white flex flex-col justify-between h-full">
        <Image
          src="/assets/images/services/business-strategy-bg.png"
          alt=""
          width={1000}
          height={200}
          className="mb-20 mix-blend-multiply lg:mb-24 "
        />
        <Reveal className="p-8">
          <h4 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-5">
            FX Consulting
          </h4>
          <p>
            We connect clients with reliable foreign exchange providers and
            payment solutions, enabling them to secure competitive rates and
            facilitate smooth transactions. While we facilitate these
            connections, all payments are processed directly{" "}
            <strong>by the financial partners</strong>, ensuring a seamless
            experience. This approach allows businesses to concentrate on their
            core operations with confidence
          </p>
        </Reveal>
      </div>

      <div className="bg-grey-medium rounded-xl h-full flex flex-col justify-between">
        <Image
          src="/assets/images/services/business-strategy-bg.png"
          alt=""
          width={1000}
          height={300}
          className="mb-20 lg:mb-24"
        />
        <Reveal className="p-8">
          <h4 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-5">
            Human Resource Management and Payroll Services
          </h4>
          <p>
            Our payroll services are designed to help businesses manage their
            payroll and compliance obligations. We provide end-to-end payroll
            processing services, including payroll calculations, tax
            withholdings, and payments. Our team of payroll experts stays
            up-to-date on the latest payroll laws and regulations, ensuring that
            our clients remain compliant with all relevant requirements.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default MarketingProductDesign;
