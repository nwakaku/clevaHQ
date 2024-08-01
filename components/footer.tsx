import { Link } from "@nextui-org/link";
import Image from "next/image";
// import navLogo from "../img/cleva.svg";
import { Button } from "@nextui-org/button";

const Footer = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url('/limebg.svg')` }}
        className="py-20 text-black text-center flex flex-col items-center my-16">
        <div className="lg:w-1/3 flex flex-col space-y-8 items-center lg:px-0 px-4">
          <h3 className="font-semibold text-4xl lg:text-5xl">
            Let&apos;s build greatness!
          </h3>
          <Link
            href="mailto:ClevaHQ@gmail.com"
            className="underline text-black">
            ClevaHQ@gmail.com
          </Link>
          <p>
            At ClevaHQ Agency, we understand that every business is unique.
            That&apos;s why we offer tailored solutions that align with your
            goals.
          </p>
          <Button className="w-fit rounded-none bg-green-900 py-2">
            Contact Us
          </Button>
        </div>
      </div>
      <footer className="w-full flex flex-col items-center justify-center py-3 text-gray-500 container mx-auto max-w-7xl px-6 flex-grow">
        <div className="grid lg:grid-cols-4 items-stretch justify-stretch w-full">
          <div className="flex flex-col space-y-10 py-4  border-1 border-gray-700">
            <div className="flex items-center justify-center gap-3 border-gray-700 border-b-1 py-6 text-white font-bold">
              <Image src={"/cleva.svg"} alt="logo" width={25} height={25} />
              ClevaHQ
            </div>
            <ul className=" flex flex-col justify-center items-center gap-4">
              <li>Works</li>
              <li>Clients</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-10 p-4 border-1 border-gray-700">
            <div className="flex items-center pl-8 gap-3 border-gray-700 py-6">
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
          <div className="flex flex-col space-y-10 p-4 border-1 border-gray-700">
            <div className="flex items-center pl-8 gap-3 border-gray-700 py-6">
              LEGAL
            </div>
            <ul className="flex flex-col pl-8 gap-10">
              <li>Privacy Policies</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="border-1 border-gray-700">
            <div>
              <ul>
                <li className="py-3  border-b-1 border-gray-800 pl-8">
                  Twitter
                </li>
                <li className="py-3  border-b-1 border-gray-800 pl-8">
                  Instagram
                </li>
                <li className="py-3  border-b-1 border-gray-800 pl-8">
                  Linkedin
                </li>
                <li className="py-3  border-b-1 border-gray-800 pl-8">
                  Behance
                </li>
                <li className="py-3  border-b-1 border-gray-800 pl-8">
                  Dribble
                </li>
                <li className="py-3  border-b-1 border-gray-800 pl-8">
                  Facebook
                </li>
                <li className="py-3  border-b-1 border-gray-800 pl-8">
                  Thread
                </li>
                <li className="py-3  border-gray-800 pl-8">Whatsapp</li>
              </ul>
            </div>
          </div>
        </div>
        <Link
          isExternal
          className="flex w-full justify-center items-center gap-1 text-current mt-10 border-t-1 border-gray-800 py-2"
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
