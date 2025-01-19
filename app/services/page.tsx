"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";
import React, { useEffect } from "react";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Aos from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/navigation";
import Video from "@/components/Video";

export default function AboutPage() {
  useEffect(() => {
    Aos.init({
      disable: false,
    });
  }, []);

  const router = useRouter();

  return (
    <>
    <Video/>
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="flex items-end justify-center gap-4 h-svh pb-36">
        <div className="grid lg:grid-cols-2 items-start mb-10">
          <div className=" justify-center ">
            <Card className="bg-transparent border-none shadow-none">
              <CardBody>
                <h1 className={title({ size: "md" })}>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      "What We Offer",
                      1000,
                      "Services We Offer",
                      1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </h1>
              </CardBody>
            </Card>
          </div>

          <div className="flex flex-col gap-3 text-white">
            <Card className="bg-transparent border-none shadow-none">
              <CardBody>
                <p>
                  Our extensive knowledge in design and technology enables us to
                  create high-quality brands and digital interactions.
                </p>
              </CardBody>
            </Card>

            <Button className="w-fit rounded-md bg-[#DBFB8E] text-black">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <section className="flex items-start justify-center gap-4 p-4 lg:mt-[100px] bg-[#0A0A0A]">
        <div className="grid lg:grid-cols-2 items-center justify-between gap-10 w-full  pb-10">
          <div className="flex flex-col gap-6 w-full justify-stretch">
            <div className="flex flex-col gap-6 w-full justify-stretch">
              <div className="inline-block max-w-lg justify-center">
                <h1 className={title({ size: "sm" })}>Branding</h1>
              </div>
              <p>
                At the core of our approach, we maintain that brand and UX are
                closely connected and work together. Our team specializes in
                creating and representing digital brand identities across
                channels, providing strategy assistance and guidelines to ensure
                consistency.
              </p>
              <ul className="flex flex-col list-disc px-4 gap-2">
                <li>Brand Strategy</li>
                <li>Brand Architecture</li>
                <li>Verbal Identity</li>
                <li>Visual Identity </li>
                <li>Brand Guidelines </li>
                <li>Brand Experiences</li>
              </ul>
            </div>
          </div>
          <Image
            className="rounded-sm  p-2"
            src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1734119184/branding_tcvyhs.jpg"
            alt="img"
            width={600}
          />
        </div>
      </section>
      <section className="flex items-start justify-center gap-4 p-4 mt-[100px] bg-[#0A0A0A]">
        <div className="grid lg:grid-cols-2 items-center justify-between gap-10 w-full  pb-10">
          <div className="flex flex-col gap-6 w-full justify-stretch">
            <div className="flex flex-col gap-6 w-full justify-stretch">
              <div className="inline-block max-w-lg justify-center">
                <h1 className={title({ size: "sm" })}>UI/UX Design</h1>
              </div>
              <p>
                At Cyark, we are committed to ensuring that everyone experiences
                an exceptional user journey, whether engaged in work or leisure.
                We specialize in crafting memorable enterprise and consumer
                products, offering comprehensive design systems to facilitate
                effortless product iteration.
              </p>
              <ul className="flex flex-col list-disc px-4 gap-2">
                <li>Consumer & Enterprise Design </li>
                <li> Software User</li>
                <li>Research & Testing</li>
                <li>CX, UX & Interaction Design </li>
                <li>UI Design Motion </li>
                <li>Design Systems</li>
              </ul>
            </div>
          </div>
          <Image
            alt="img"
            className="rounded-sm p-2"
            src={
              "https://res.cloudinary.com/ddxcd04ok/image/upload/v1734119839/Uxphone_kelbdu.jpg"
            }
            width={600}
          />
        </div>
      </section>
      <section className="flex items-start justify-center gap-4 p-4 mt-[100px] bg-[#0A0A0A]">
        <div className="grid lg:grid-cols-2 items-center justify-between gap-10 w-full  pb-10">
          <div className="flex flex-col gap-6 w-full justify-stretch">
            <div className="flex flex-col gap-6 w-full justify-stretch">
              <div className="inline-block max-w-lg justify-center">
                <h1 className={title({ size: "sm" })}>
                  Mobile app & Web development
                </h1>
              </div>
              <p>
                Our designers and developers collaborate to create websites and
                products that provide exceptional user experiences and
                functionality. We optimize search engine visibility, ensure
                accessibility, and maximize performance.
              </p>
              <ul className="flex flex-col list-disc px-4 gap-2">
                <li>Technology Consulting</li>
                <li>Architecture Planning</li>
                <li>Mobile App Development</li>
                <li>Frontend Web Development</li>
                <li> Backend Development & API Integration</li>
                <li>Emerging Tech (Web3)</li>
              </ul>
            </div>
          </div>
          <Image
            className="rounded-sm p-2"
            src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1734312578/Rectangle_10_bojkgc.jpg"
            alt="img"
            width={600}
          />
        </div>
      </section>
      {/* <section className="flex items-start justify-center gap-4 p-4 mt-[100px] bg-[#0A0A0A]">
        <div className="grid lg:grid-cols-2 items-center justify-between gap-10 w-full  pb-10">
          <div className="flex flex-col gap-6 w-full justify-stretch">
            <div className="flex flex-col gap-6 w-full justify-stretch">
              <div className="inline-block max-w-lg justify-center">
                <h1 className={title({ size: "sm" })}>Cybersecurity</h1>
              </div>
              <p>
                A website is the most important channel to showcase your brand
                to customers. Our portfolio features award-winning websites
                designed to give users the best experience possible while also
                meeting business goals.
              </p>
              <ul className="flex flex-col list-disc px-4 gap-2">
                <li>Content Strategy</li>
                <li>Web Design</li>
                <li> Interactive Experiences</li>
                <li>Content Production</li>
                <li> Frontend & Backend Development </li>
                <li>CMS Implementation</li>
              </ul>
            </div>
          </div>
          <Image
            className="rounded-none p-2"
            src={"/cybers.svg"}
            alt="img"
            width={600}
            height={600}
          />
        </div>
      </section> */}

      {/* <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="flex items-start justify-center gap-4 pb-10">
        <div className="grid lg:grid-cols-2 items-start gap-4 w-full">
          <div className="inline-block max-w-lg justify-center flex-1">
            <h1 className={title({ size: "sm" })}>
              Curious Minds Want to Know
            </h1>
          </div>

          <div className="flex flex-col gap-6 flex-1 w-full justify-stretch">
            <Accordion
              showDivider={false}
              hideIndicator={true}
              selectedKeys={selectedKeys}
              className="w-full"
              onSelectionChange={(keys) =>
                handleSelectionChange(new Set(keys))
              }>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title={
                  <h2 className="text-2xl font-semibold" style={{ color: titleColors["1"] }}>
                    What are your core services as an Agency
                  </h2>
                }>
                <p>
                  {
                    "Our seasoned team of senior UI/UX designers is dedicated to curating immersive digital experiences that empower brands to flourish in the contemporary landscape."
                  }
                </p>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title={
                  <h2 className="text-2xl font-semibold" style={{ color: titleColors["2"] }}>
                    Do you work with startups
                  </h2>
                }>
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title={
                  <h2 className="text-2xl font-semibold" style={{ color: titleColors["3"] }}>
                    How much do you charge for a project
                  </h2>
                }>
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title={
                  <h2 className="text-2xl font-semibold" style={{ color: titleColors["4"] }}>
                    Do you accept redesign projects
                  </h2>
                }>
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title={
                  <h2 className="text-2xl font-semibold" style={{ color: titleColors["5"] }}>
                    What is your process for working with clients
                  </h2>
                }>
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section> */}


      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        style={{ backgroundImage: `url('/bgImg.svg')` }}
        className="relative py-10 text-white flex mt-[100px] justify-center items-center">
        {/* Dim Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 p-4 flex flex-col gap-4 justify-center text-center lg:w-1/2">
          <h2 className="font-semibold text-4xl lg:text-5xl">
            Your one-stop vision partner
          </h2>
          <p className="text-[#848484]">
            ClevaHQ is a digital agency empowering visionary entrepreneurs,
            startups, small businesses, and medium enterprises to launch, grow,
            and scale their businesses from ideation to launch, and ultimately
            market success.
          </p>
          <div>
            <Button
              onPress={() => router.push("/about")}
              className="bg-[#DBFB8E] text-black rounded-md">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
