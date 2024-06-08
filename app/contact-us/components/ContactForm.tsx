import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/ui/Reveal";
import TextInput from "@/app/components/ui/TextInput";
import React from "react";

const ContactForm = () => {
  return (
    <Reveal className="container mx-auto p-4 mt-14 mb-24">
      <div className="text-center">
        <h3 className="text-2xl md:text-5xl lg:text-6xl w-11/12 lg:10/12 font-semibold mb-4 mx-auto">
          Leave your message and we&apos;ll get back to you shortly.
        </h3>
        <p className="md:text-xl w-10/12 mx-auto">
          You can also send us an email at{" "}
          <a className="text-primary" href="mailto@mansu.io">
            info@mansu.io
          </a>
        </p>
      </div>

      <div className="mt-14 space-y-12">
        <TextInput placeholder="Name" />
        <TextInput placeholder="Email" type="email" />
        <TextInput placeholder="Subject" />
        <TextInput placeholder="Message" />
        <Button className="w-full">Send your Message</Button>
      </div>
    </Reveal>
  );
};

export default ContactForm;
