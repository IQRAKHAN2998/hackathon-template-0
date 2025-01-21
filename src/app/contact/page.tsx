// pages/contact.js
import { Clock2, MapPin, Phone } from "lucide-react";
import { Headersection } from "../layout/headersection";
import ContactForm from "@/components/contact-form";


export default function Contact() {
    const head = `For More Information About Our Product & Services, Please Feel Free To Drop Us \n
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!`
  return (

    <>
    <Headersection text="Contact" tittle="Contact"/>
    <div className="bg-[#F9F9F9] min-h-screen flex flex-col items-center py-10 px-6">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Get In Touch With Us</h1>
        <p className="text-gray-600 whitespace-pre-line">
          {head}
        </p>
      </div>

      
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <span className="text-xl"> <MapPin /></span>
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-600">
                235 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-start space-x-4">
            <span className="text-xl"><Phone /></span>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-600">Mobile: (+92) 3230207681</p>
              <p className="text-gray-600">Hotline: (+84) 456-6789</p>
            </div>
          </div>
          {/* Working Time */}
          <div className="flex items-start space-x-4">
            <span className="text-xl"><Clock2 /></span>
            <div>
              <h3 className="text-lg font-semibold">Working Time</h3>
              <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
         <ContactForm/>
        </div>
      </div>

       
    </div>
    </>
  );
}


