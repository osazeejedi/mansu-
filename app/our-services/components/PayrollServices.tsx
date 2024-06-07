import AssemblyClusterIcon from "@/app/components/Icons/AssemblyClusterIcon";
import Image from "next/image";
import React from "react";

const PayrollServices = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(/assets/images/services/payroll-services.png`,
        }}
        className="min-h-[450px] bg-black mt-14 text-white flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat"
      >
        <div className="container mx-auto p-4 text-center">
          <h4 className="text-2xl md:text-5xl font-semibold mb-3">
            Payroll Services
          </h4>
          <p className="w-full md:w-4/5 mx-auto">
            Our payroll services are designed to help businesses manage their
            payroll and compliance obligations. We provide end-to-end payroll
            processing services, including payroll calculations, tax
            withholdings, and payments. Our team of payroll experts stays
            up-to-date on the latest payroll laws and regulations, ensuring that
            our clients remain compliant with all relevant requirements.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 mt-10">
        <div className="bg-grey-medium rounded-xl flex flex-col justify-between mr-4 md:mr-0">
          <Image
            src="/assets/images/services/vector-bg.png"
            alt="vector-bg"
            width={150}
            height={150}
          />

          <div className="p-8">
            <h3 className="text-2xl md:text-5xl font-semibold mb-4">
              Human Resources Consulting
            </h3>
            <p>
              Our human resources consulting services are designed to help
              businesses attract and retain top talent. We work with our clients
              to develop effective recruitment strategies, develop compensation
              plans, and create employee policies and procedures. Our goal is to
              help our clients build a strong, motivated team that supports
              their business objectives.
            </p>
          </div>
        </div>
        <div className="bg-grey-medium rounded-xl flex flex-col justify-between gap-10 min-h-[450px] ml-4 md:ml-0 overflow-hidden">
          <div className="relative flex justify-end">
            <Image
              src="/assets/images/services/vector-bg.png"
              alt="vector-bg"
              width={150}
              height={200}
              className="rotate-90 absolute -top-6"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl md:text-5xl font-semibold mb-4">
              FX and Payment Processing Consultancy Services
            </h3>
            <p>
              Mansu provides a bespoke consultancy service to help bridge the
              gap for businesses by introducing and partnering our clients with
              Banks, Foreign Exchange Brokers, Payment Solutions and Electronic
              Money Institutions.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:items-center p-4 mt-14 md:mt-20 space-y-5 mb-24">
        <AssemblyClusterIcon />
        <h3 className="text-2xl md:text-5xl font-semibold">
          Procurement Services
        </h3>
        <p className="md:text-center">
          At Mansu, we offer comprehensive procurement services to streamline
          your supply chain and optimize sourcing processes. Our experienced
          team specializes in sourcing high-quality materials, negotiating
          favorable terms with suppliers, and ensuring timely delivery of goods.
          Whether you&apos;re looking to reduce costs, mitigate risks, or
          improve operational efficiency, our tailored procurement solutions are
          designed to meet your unique needs. Partner with Mansu for seamless
          procurement management and achieve your business objectives with
          confidence.
        </p>
      </div>
    </div>
  );
};

export default PayrollServices;