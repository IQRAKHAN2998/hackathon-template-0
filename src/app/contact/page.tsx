// pages/contact.js
import { Clock2, MapPin, Phone } from "lucide-react";
import { Headersection } from "../layout/headersection";


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

      {/* Main Content */}
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Left Section */}
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
              <p className="text-gray-600">Mobile: (+84) 546-6789</p>
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

        {/* Right Section - Contact Form */}
        <div>
          <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Abc"
                className="mt-1 block w-full border py-3 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Abc@def.com"
                className="mt-1 block w-full rounded-md border py-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="This is an optional"
                className="mt-1 block w-full rounded-md border py-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hi! I'd like to ask about"
                className="mt-1 block w-full rounded-md border py-3 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-5 text-black py-2 border  rounded-md font-semibold hover:bg-indigo-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

       
    </div>
    </>
  );
}
