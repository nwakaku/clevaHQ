"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Accordion, AccordionItem } from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";
import React from "react";

export default function Home() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["1"])
  );

  const [currentImage, setCurrentImage] = React.useState("/fintech.svg");
  const [whyImage, setWhyImage] = React.useState("/whychoos.svg");

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys);
    const key = Array.from(keys).pop();

    switch (key) {
      case "1":
        setCurrentImage("/fintech.svg");
        break;
      case "2":
        setCurrentImage("/edtech.svg");
        break;
      case "3":
        setCurrentImage("/ecommerce.svg");
        break;
      case "4":
        setCurrentImage("/health.svg");
        break;
      case "5":
        setCurrentImage("/logistics.svg");
        break;
      default:
        setCurrentImage("/fintech.svg");
    }

    switch (key) {
      case "1":
        setWhyImage("/whychoos.svg");
        break;
      case "2":
        setWhyImage("/innov.svg");
        break;
      case "3":
        setWhyImage("/qual.svg");
        break;
      case "4":
        setWhyImage("/improv.svg");
        break;
      case "5":
        setWhyImage("/agil.svg");
        break;
      default:
        setWhyImage("/whychoos.svg");
    }
  };
  
  return (
    <>
      <section className="flex items-end justify-center gap-4 h-svh pb-10">
        <div className="grid lg:grid-cols-2 items-start mb-10">
          <div className=" justify-center ">
            <h1 className={title({ size: "md" })}>
              Empower & secure Your Digital Presence
            </h1>
          </div>

          <div className="flex flex-col gap-3 ">
            <div>
              <p>
                Unlock the true potential of your brand at ClevaHQ. We
                specialize in crafting enduring brand identities, designing
                immersive UI/UX experiences, and seamlessly transforming ideas
                into powerful digital solutions.
              </p>
            </div>

            <Button className="w-fit rounded-none bg-[#DBFB8E] text-black">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      <section className="flex my-8 lg:h-screen items-center justify-center bg-black ">
        <Image src={"/videobg.svg"} alt="smt" width={1500} height={1500} />
      </section>
      <section className="flex flex-col items-end justify-center gap-4 min-h-svh mb-12 ">
        <div>
          <div className="flex justify-between  w-full">
            <h2 className={title({ size: "sm" })}>Reimagining Possibilities</h2>

            <Button className="w-fit hidden lg:block rounded-none bg-[#DBFB8E] text-black">
              Contact Us
            </Button>
          </div>

          <p className="mt-6">
            At ClevaHQ, we’re more than a global UI/UX Design Agency. We’re
            technology pioneers, constantly exploring new frontiers like AI to
            redefine what’s achievable in design. Our diverse team of designers,
            strategists, and developers shares a passion for innovation and a
            commitment to driving change. We delve deep into our clients’ unique
            needs and their target audience, then leverage the power of
            technology and data to create digital experiences that are not only
            customized but also transformative.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full border-t-2 border-b-2 border-gray-800 p-4 mt-8">
          <div className="flex flex-col gap-4">
            <h2>8+ </h2>
            <p>Years of Expertise</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2>50+ </h2>
            <p>Creative Pros</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2>150+ </h2>
            <p>Projects Delivered</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2>20+ </h2>
            <p>Industries Serviced</p>
          </div>
        </div>
        <Button className="w-full lg:hidden block rounded-none bg-[#DBFB8E] my-4 text-black">
          Learn About Us
        </Button>
        <div className="w-full flex flex-col ">
          <h2 className="font-semibold text-2xl my-6">Services We Offer</h2>
          <div className="w-full flex justify-between border-t-1 border-b-1 border-gray-700 p-3">
            <div className="flex gap-10 items-center">
              <p className="text-lime-300">01</p>
              <p className="text-3xl">Branding</p>
            </div>

            <Image
              className="hidden lg:block"
              src={"/dummy.svg"}
              alt="ltv"
              width={50}
              height={50}
            />
          </div>
          <div className="w-full flex justify-between border-t-1 border-b-1 border-gray-700 p-3">
            <div className="flex gap-10 items-center">
              <p className="text-lime-300">02</p>
              <p className="text-3xl">UI/UX Design</p>
            </div>

            <Image
              className="hidden lg:block"
              src={"/dummy.svg"}
              alt="ltv"
              width={50}
              height={50}
            />
          </div>
          <div className="w-full flex justify-between border-t-1 border-b-1 border-gray-700  p-3">
            <div className="flex gap-10 items-center">
              <p className="text-lime-300">03</p>
              <p className="text-3xl">Development</p>
            </div>

            <Image
              className="hidden lg:block"
              src={"/dummy.svg"}
              alt="ltv"
              width={50}
              height={50}
            />
          </div>
          <div className="w-full flex justify-between border-t-1 border-b-1 border-gray-700  p-3">
            <div className="flex gap-10 items-center">
              <p className="text-lime-300">04</p>
              <p className="text-3xl">Cybersecurity</p>
            </div>

            <Image
              className="hidden lg:block"
              src={"/dummy.svg"}
              alt="ltv"
              width={50}
              height={50}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 mb-12 p-4 ">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col gap-4 pb-10">
            <h2 className={title({ size: "sm" })}>
              Our Expertise Extends Across Industries
            </h2>
            <p className="text-sm hidden lg:block">
              The intersection of finance and innovation. It encompasses digital
              solutions transforming money management, payments, and
              investments. From mobile apps to blockchain, FinTech shapes the
              future of financial services. ClevaHQ, we craft user-centric
              experiences for this dynamic industry. Let s innovate together!
            </p>
            <p className="text-sm lg:hidden block">
              A full-service creative agency designing and building inventive
              digital experiences across all platforms and brand touchpoints.
            </p>
          </div>
          <div></div>
        </div>

        <div className="grid lg:grid-cols-2 items-start gap-4 w-full  pb-10">
          <div className="flex flex-col gap-6 flex-1 w-full justify-stretch">
            <Accordion
              selectedKeys={selectedKeys}
              className="w-full"
              onSelectionChange={handleSelectionChange}>
              <AccordionItem key="1" aria-label="Accordion 1" title="FinTech">
                <p className="text-sm">{defaultContent}</p>
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="EdTech">
                <p className="text-sm">{defaultContent}</p>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="E-commerce">
                <p className="text-sm">{defaultContent}</p>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Healthcare">
                <p className="text-sm">{defaultContent}</p>
              </AccordionItem>
              <AccordionItem key="5" aria-label="Accordion 5" title="Logistics">
                <p className="text-sm">{defaultContent}</p>
              </AccordionItem>
            </Accordion>
          </div>
          <Image src={currentImage} alt="img" width={600} height={600} />
        </div>
      </section>
      <section
        style={{ backgroundImage: `url('/limebg.svg')` }}
        className="py-10 text-black  grid lg:grid-cols-2 my-16">
        <div className="p-4 flex flex-col gap-4 justify-center text-center lg:text-left">
          <h2 className="font-semibold text-4xl lg:text-5xl">
            Your one-stop vision partner
          </h2>
          <p>
            ClevaHQ is a digital agency empowering visionary entrepreneurs,
            startups, small businesses, and medium enterprises to launch, grow,
            and scale their businesses from ideation to launch, and ultimately
            market success.
          </p>
          <div>
            <Link href="/about" className="underline-offset-1 text-center">
              Get to know Us
            </Link>
          </div>
        </div>
        <div></div>
      </section>
      <section className="flex flex-col gap-6 mb-12 p-4 ">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col gap-4 pb-10">
            <h2 className={title({ size: "sm" })}>Why choose ClevaHQ</h2>
            <p className="text-sm hidden lg:block">
              At ClevaHQ, we understand that running a business is more than
              just managing tasks; it&apos;s about driving growth, fostering
              innovation, and maintaining seamless operations. Here&apos;s why
              ClevaHQ stands out as your ultimate business solution.
            </p>
            <p className="text-sm block lg:hidden">
              we aim to fulfill our mission and realize our vision, becoming the
              go-to digital partner for businesses seeking to thrive in
              today&apos;s dynamic business landscape.
            </p>
          </div>
          <div></div>
        </div>

        <div className="grid lg:grid-cols-2 items-center justify-between gap-8 w-full  pb-10">
          <div className="flex flex-col gap-6 flex-1 w-full justify-stretch">
            <Accordion
              selectedKeys={selectedKeys}
              className="w-full"
              onSelectionChange={handleSelectionChange}>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Client-Centric Approach">
                <p className="text-sm">{defaultContent}</p>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Innovative Solutions">
                <p className="text-sm">{defaultContent}</p>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Exceptional Quality">
                <p className="text-sm">{defaultContent}</p>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Continuous Improvement">
                <p className="text-sm">{defaultContent}</p>
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="Agility and Adaptability">
                <p className="text-sm">{defaultContent}</p>
              </AccordionItem>
            </Accordion>
          </div>
          <Image src={whyImage} alt="img" width={600} height={600} />
        </div>
      </section>
      <section className="flex items-start justify-center gap-4 pb-10">
        <div className="grid lg:grid-cols-2 items-start gap-4 w-full">
          <div className="inline-block max-w-lg justify-center flex-1">
            <h1 className={title({ size: "sm" })}>
              Curious Minds Want to Know
            </h1>
          </div>

          <div className="flex flex-col gap-6 flex-1 w-full justify-stretch">
            <Accordion
              selectedKeys={selectedKeys}
              className="w-full"
              onSelectionChange={setSelectedKeys}>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="What are your core services as an Agency">
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Do you work with startups">
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="How much do you charge for a project">
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Do you accept redesign projects">
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="What is your process for working with clients">
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10">
        <div className="inline-block max-w-lg justify-center ">
          <h1 className={title({ size: "sm" })}>Latest Articles</h1>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-3 gap-10">
          {siteConfig.dummyFounders.map((item, index) => (
            <Card shadow="sm" key={index} className="rounded-none bg-inherit">
              <CardBody className="overflow-visible p-3 ">
                <Image
                  height={10}
                  width={10}
                  className="w-fit"
                  alt={item.title}
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="flex flex-col items-start text-left space-y-3">
                <p className="font-bold">{item.title}</p>
                <p className="font-thin"> {item.piece}</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={item.profilePic}
                    className="rounded-full"
                    alt="card"
                    width={50}
                    height={50}
                  />
                  <p className="text-default-500">{item.name}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className=""></div>
      </section>
    </>
  );
}
