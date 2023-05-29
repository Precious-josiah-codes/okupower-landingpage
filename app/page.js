"use client";

import Image from "next/image";
import ServiceAudience from "./components/ServiceAudience";
import SideBar from "./components/SideBar";
import { useState } from "react";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  // toggle sidebar for mobile
  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <main className="relative">
      <SideBar toggleSideBar={toggleSideBar} showSidebar={showSidebar} />
      <main className="relative ">
        {/* start navbar */}
        <nav className="flex items-center justify-between w-full py-6 px-6 lg:px-[5rem] sticky top-0 z-[999] bg-[#F2F2F2]">
          {/* logo */}
          <h1 className="text-[#0A8C55] font-bold">
            <Image src="/logo.svg" alt="logo" width={70} height={70} priority />
          </h1>

          {/* links */}
          {/* <div className="hidden sm:flex justify-between w-[30rem] ">
            <span>Home</span>
            <span>Product</span>
            <span>Dashboard</span>
            <span>About</span>
          </div> */}

          {/* signin */}
          {/* <button className="hidden sm:flex">Sign In</button> */}

          {/* hamburger menu */}
          {/* <div className="flex sm:hidden" onClick={toggleSideBar}>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="text-black h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </div> */}
        </nav>
        {/* end navbar */}

        {/* start hero section */}
        <section className="flex flex-col sm:flex-row px-6 lg:px-[5rem] bg-[#F2F2F2] h-[90vh] sm:h-screen">
          {/* left section */}
          <section className="h-full flex flex-col justify-center">
            <h5 className="capitalize text-[#AF4FA2]">
              become a power distributor yourself
            </h5>
            <h1 className="text-4xl capitalize mt-3">
              {"power "}
              <span className="inline-flex relative">
                <Image
                  src="/line1.svg"
                  alt="Line"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-500/60"
                  width={40}
                  height={40}
                  priority
                />
                <span className="relative">meter </span>
              </span>
              {" made easy just for you with"}
              <span className="text-[#F2B123] font-bold">{" okuPower"}</span>
            </h1>
            <p className="mt-6">
              OkuPower is a smart digital power meter that records data such as
              electric energy consumption, voltage levels, current, and power
              factor.
            </p>
            {/* <button className="w-fit py-4 px-6 mt-6 bg-[#0A8C55] text-white rounded-md">
              Get Started
            </button> */}
            <div className="flex items-center w-fit mt-6">
              {/* images */}
              <div className="-space-x-4">
                <Image
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=650&h=940&dpr=1"
                  alt="Vercel Logo"
                  className="relative z-30 inline object-cover w-10 h-10 border-2 border-white rounded-full"
                  width={40}
                  height={40}
                  priority
                />
                <Image
                  src="https://images.pexels.com/photos/6999225/pexels-photo-6999225.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Vercel Logo"
                  className="relative z-30 inline object-cover w-10 h-10 border-2 border-white rounded-full"
                  width={600}
                  height={600}
                  priority
                />
                <Image
                  src="https://images.pexels.com/photos/6311124/pexels-photo-6311124.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="Vercel Logo"
                  className="relative z-30 inline object-cover w-10 h-10 border-2 border-white rounded-full"
                  width={600}
                  height={600}
                  priority
                />
              </div>
              {/* text content */}
              <div className="pl-6 text-[#AF4FA2]">
                <h5>10,000+ </h5>
                <h5>Join our many users</h5>
              </div>
            </div>
          </section>

          {/* right section */}
          <section className="block my-9 sm:my-0 sm:w-[70rem] overflow-hidden sm:px-6">
            <Image
              src="https://res.cloudinary.com/dszhzezvt/image/upload/v1683565325/amihub/okupower_kbilri.png"
              alt="Girl"
              className="relative z-30 inline object-cover h-full w-full"
              width={1260}
              height={750}
              priority
            />
          </section>
        </section>
        {/* end hero section */}

        {/* start service section */}
        <section className="px-6 lg:px-[5rem] h-[90rem] sm:h-[40rem]  flex flex-col justify-center ">
          <div className="mx-auto text-center">
            <h1 className="text-4xl">Our Service Audience</h1>
            <p className="sm:w-[60rem] text-center mx-auto mt-6">
              OkuPower is a solution for power distribution companies, estate
              managers (who wants to resell power) and end (users who want to
              know exactly what they’re consuming), Telecom Base Transmission
              Managers (who want to monitor the power consumed by the station),
              and individuals (who wants to make sure that what the consume is
              what they pay for, and properly manage the power bills). This
              product is a game changer in the world of electricity
              distribution.
            </p>
          </div>

          {/* service cards */}
          <div className="flex flex-col sm:flex-row items-center space-y-12 sm:space-y-0 sm:space-x-6 mt-[5rem]">
            <ServiceAudience
              audienceType="Individuals"
              audienceContent="get an individual power meter for just your apartment"
              audienceColor="bg-[#B4A10A1A]"
              audienceImage="https://images.pexels.com/photos/2379429/pexels-photo-2379429.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <ServiceAudience
              audienceType="Estates"
              audienceContent="get the package for estate owners to have accurate data"
              audienceColor="bg-[#0A8C551A]"
              audienceImage="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <ServiceAudience
              audienceType="Companies"
              audienceContent="Profit with Okupower by becoming a power distribution company. "
              audienceColor="bg-[#AF4FA21A]"
              audienceImage="https://images.pexels.com/photos/233698/pexels-photo-233698.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </section>
        {/* end service section */}

        {/* start buyout */}
        <section className="px-6 lg:px-[5rem] h-[20rem] sm:h-[40rem] relative">
          {/* left section */}
          <div className="sm:w-[30rem]">
            <h1 className="text-4xl capitalize">
              <span className="inline-flex relative">
                <Image
                  src="/line2.svg"
                  alt="Line"
                  className="absolute top-[88.444444%] right-[20%] h-[0.58em] w-full"
                  width={40}
                  height={40}
                  priority
                />
                <span className="relative w-[20rem]">
                  {" "}
                  designed to work in real time.
                </span>
              </span>
            </h1>
            <p className="mt-6">
              OkuPower offers several incredibly intriguing characteristics that
              set it apart from the competition, as well as useful aspects that
              will benefit its users. and one of it is our unique software
              apllication.
            </p>
            {/* <button className="text-[#AF4FA2] mt-3">Buy Okupower</button> */}
          </div>

          {/* right section */}
          <div className="hidden sm:block absolute right-[5rem] top-0 ">
            <Image
              src="/device_mockup.png"
              alt="Vercel Logo"
              className="relative z-30 inline  w-[650px] h-[650px]"
              width={650}
              height={650}
              priority
            />
          </div>
        </section>
        {/* end buyout */}

        {/* start banner */}
        <section className="lg:px-[5rem] bg-[#F2F2F2] h-[52rem] sm:h-[25rem] sm:flex items-center ">
          <div className="sm:flex items-center justify-between bg-[#0A8C55] pl-6 sm:rounded-2xl w-full h-full sm:h-fit space-y-9 sm:space-y-0 py-6 sm:py-0">
            {/* left section */}
            <div className="w-[20rem] sm:w-[43rem]">
              <h1 className="text-4xl capitalize text-[#F2B123]">
                ready to enjoy the best power services in Nigeria at affordable
                prices and very fast
              </h1>
              <p className="mt-6 text-white">
                Rather than dials, the device has an electronic display on the
                face of the meter that you or a service person can read manually
              </p>

              {/* <div>
                <button className="w-fit py-4 px-6 mt-6 bg-white text-black rounded-md">
                  Get Started
                </button>
                <button className="w-fit py-4 px-6 mt-6 text-[#BCB3B3] rounded-md">
                  Get Started
                </button>
              </div> */}
            </div>

            {/* right section */}
            <div>
              <Image
                src="/bannerImage.png"
                alt="Banner Image"
                className="relative inline w-[300px] sm:w-[300px] h-[300px]"
                width={300}
                height={300}
                priority
              />
            </div>
          </div>
        </section>
        {/* end banner */}

        {/* start product features */}
        <section className="block lg:px-[5rem] bg-[#F2F2F2] h-[50rem] pt-9 sm:pt-0">
          <h1 className="text-4xl text-center">
            <span className="inline-flex relative">
              <Image
                src="/line3.svg"
                alt="Line"
                className="absolute top-[88.444444%] left-0 h-[0.58em] w-full"
                width={40}
                height={40}
                priority
              />
              <span className="relative">
                {" "}
                Product <span className="text-[#AF4FA2]">Features</span>
              </span>
            </span>
          </h1>

          {/* start feature list and images */}
          <div className="flex justify-between mt-[4rem]">
            {/* left section */}
            <div className="w-full px-6 sm:px-0">
              <ul className="capitalize list-disc space-y-9 ml-6">
                <li>Surge protection</li>
                <li>Over voltage protection</li>
                <li>Load-line current detector</li>
                <li>Bypass detection</li>
                <li>App for user to view consumption level</li>
                <li>
                  run-time (up time) calculation based on load and credit units
                  left
                </li>
                <li>Low credit unit notification</li>
                <li className="sm:w-[35rem]">
                  it can be used to drive the sales of reacharge cards, as it
                  can interact with an API that enables aitime to be converted
                  to legal tender (NGN) and use the money value to purchase
                  power units automatically.{" "}
                </li>
              </ul>
            </div>

            {/* right section */}
            <div className="space-y-6 hidden sm:block">
              <div className="h-[18rem] w-[20rem] bg-green-400">
                <Image
                  src="/mockup1.jpeg"
                  alt="Line"
                  className=" h-[288px] w-[320px] object-cover"
                  width={320}
                  height={288}
                  priority
                />
              </div>
              <div className="h-[18rem] w-[20rem] bg-red-400">
                <Image
                  src="/mockup2.jpeg"
                  alt="Line"
                  className="h-[288px] w-[320px] object-cover"
                  width={320}
                  height={288}
                  priority
                />
              </div>
            </div>
          </div>
          {/* end feature list and images */}
        </section>
        {/* end product features */}

        {/* start footer */}
        <footer className="bg-[#01180E] px-6 lg:px-[5rem] h-[28rem] sm:h-[20rem] flex flex-col justify-between py-9">
          {/* first section */}
          <div className="flex flex-col sm:flex-row justify-between ">
            {/* first column */}
            <div className="sm:space-y-8 flex items-center justify-between sm:block">
              {/* logo */}
              <div>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  className=""
                  width={70}
                  height={70}
                  priority
                />
              </div>

              {/* email */}
              <div className="flex items-center text-white space-x-3">
                <div>
                  <Image
                    src="/email.svg"
                    alt="email"
                    className=""
                    width={25}
                    height={25}
                    priority
                  />
                </div>
                <div>hi@amihub.africa</div>
              </div>
            </div>

            {/* second column */}
            <div className="space-y-8 mt-5 sm:mt-0">
              <h1 className="text-2xl sm:text-3xl text-white capitalize">
                buy power directly and fast
              </h1>
              {/* <div className="flex flex-col sm:flex-row sm:space-x-3">
                <h1 className="text-[#F2B123]">Subscrbe to our newsletter</h1>
                <input
                  type="text"
                  className="bg-transparent border border-[#F2B123] mt-3 sm:mt-0"
                />
              </div> */}
            </div>

            {/* third column */}
            <div className="flex sm:flex-col sm:space-y-3 sm:space-x-0 space-x-4 mt-6 sm:mt-0">
              <div>
                <a
                  href="https://www.instagram.com/tronixafrica/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/instagram.svg"
                    alt="instagram"
                    className=""
                    width={35}
                    height={35}
                    priority
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/TronixAfrica"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/twitter.svg"
                    alt="twitter"
                    className=""
                    width={35}
                    height={35}
                    priority
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://web.facebook.com/TronixAfrica"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/facebook.svg"
                    alt="facebook"
                    className=""
                    width={35}
                    height={35}
                    priority
                  />
                </a>
              </div>
            </div>
          </div>

          {/* second section */}
          <div className="flex flex-col sm:flex-row space-y-2 justify-between border-t border-[#515151] pt-6">
            {/* <div className="text-[#AF4FA2]">Check our more of our products</div> */}
            <div className="text-[#A5A2A2] flex items-center space-x-3">
              <div className="border rounded-full w-5 h-5 flex items-center justify-center p-2">
                C
              </div>
              <div>all copy rights reserved</div>
            </div>
          </div>
        </footer>
        {/* end footer */}
      </main>
    </main>
  );
}
