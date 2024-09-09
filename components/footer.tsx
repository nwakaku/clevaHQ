"use client";

import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";

const Footer = () => {
  return (
    <>
      {/* <div
        style={{ backgroundImage: `url('/bgImg.svg')` }}
        className="py-20 text-white text-center flex flex-col items-center mt-[100px]">
        <div className="lg:w-1/3 flex flex-col space-y-8 items-center lg:px-0 px-4">
          <h3 className="font-semibold text-4xl lg:text-5xl">
            Let&apos;s build greatness!
          </h3>
          <Link
            href="mailto:ClevaHQ@gmail.com"
            className="underline text-[#DBFB8E]">
            ClevaHQ@gmail.com
          </Link>
          <p>
            At ClevaHQ Agency, we understand that every business is unique.
            That&apos;s why we offer tailored solutions that align with your
            goals.
          </p>
          <Button className="w-fit rounded-none bg-[#DBFB8E] py-2 text-black">
            Contact Us
          </Button>
        </div>
      </div> */}
      <footer className="w-full mt-[100px] flex flex-col items-center justify-center py-3 text-gray-500 container mx-auto max-w-7xl px-6 flex-grow">
        <div className="grid lg:grid-cols-4 items-stretch justify-stretch w-full">
          <div className="flex flex-col space-y-10 py-4  border-1 border-[#252525]">
            <div className="flex items-center justify-center  border-[#252525] border-b-1 py-6 ">
              <Image src={"/clevaLogo.svg"} alt="logo" width={120} />
            </div>
            <ul className=" flex flex-col justify-center items-center gap-4">
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-10 p-4 border-1 border-[#252525]">
            <div className="flex items-center pl-8 gap-3 border-[#252525] py-6">
              CONNECT
            </div>
            <div>
              <ul className="flex flex-col pl-8 gap-10">
                <li>ClevaHQ@gmail.com</li>
                <li>
                  No 4. St Elizbeth catholic church road, Kogo 1, Bwari, Abuja
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-10 p-4 border-1 border-[#252525]">
            <div className="flex items-center pl-8 gap-3 border-[#252525] py-6">
              LEGAL
            </div>
            <ul className="flex flex-col pl-8 gap-10">
              <li>Privacy Policies</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="border-1 border-[#252525]">
            <div>
              <ul className="cursor-pointer">
                <li className="py-3 border-b-1 border-[#252525] pl-8">
                  <a
                    href="https://x.com/ClevaHQofficial"
                    target="_blank"
                    rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
                <li className="py-3 border-b-1 border-[#252525] pl-8">
                  <a
                    href="https://www.instagram.com/cleva.hq/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li className="py-3 border-b-1 border-[#252525] pl-8">
                  <a
                    href="https://www.linkedin.com/company/clevahq"
                    target="_blank"
                    rel="noopener noreferrer">
                    Linkedin
                  </a>
                </li>
                <li className="py-3 border-b-1 border-[#252525] pl-8">
                  <a
                    href="https://www.behance.net/clevahqdigital/editor"
                    target="_blank"
                    rel="noopener noreferrer">
                    Behance
                  </a>
                </li>
                <li className="py-3 border-b-1 border-[#252525] pl-8">
                  <a
                    href="https://dribbble.com/ClevaHQ?onboarding=true&designer=true"
                    target="_blank"
                    rel="noopener noreferrer">
                    Dribble
                  </a>
                </li>
                <li className="py-3 border-[#252525] pl-8">
                  <a
                    href="https://www.facebook.com/clevahq"
                    target="_blank"
                    rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Link
          isExternal
          className="flex w-full justify-center items-center gap-1 text-current mt-10 border-t-1 border-[#252525] py-2"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
          title="nextui.org homepage">
          <span className="text-default-600">
            © All Rights Reserved. 2024,{" "}
          </span>
          <p className="text-default-600">ClevaHQ tech</p>
        </Link>
      </footer>
    </>
  );
};

export default Footer;
