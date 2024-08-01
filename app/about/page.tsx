"use client";

import React from "react";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem } from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";

export default function AboutPage() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["1"])
  );
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="flex items-end justify-center gap-4 h-svh pb-36">
        <div className="grid lg:grid-cols-2 items-start">
          <div className=" max-w-lg justify-center flex-1">
            <h1 className={title({ size: "md" })}>About Us</h1>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <div>
              <p>
                We are Fostering Intuitive products, Promoting Equality, Equity,
                and Growth through Design.
              </p>
            </div>

            <Button className="w-fit rounded-none bg-[#DBFB8E] text-black">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="flex items-start justify-center pb-10">
        <div className="grid lg:grid-cols-2 items-start gap-4">
          <div className="inline-block max-w-lg justify-center flex-1">
            <h1 className={title({ size: "sm" })}>ClevaHQ</h1>
          </div>

          <div className="flex flex-col gap-6 flex-1">
            <p>
              ClevaHQ is a digital agency empowering visionary entrepreneurs,
              startups, small businesses, and medium enterprises to launch,
              grow, and scale their businesses from ideation to launch, and
              ultimately market success.
            </p>

            <p>
              Our strength is in understanding the unique challenges faced by
              businesses in today&apos;s fast-paced digital environment and
              providing tailored and innovative strategies to help you thrive in
              a fiercely competitive market. {" "}
            </p>
            <p>
              Working closely with our clients, we&apos;re committed to
              delivering measurable results. We offer comprehensive services
              including branding, product development, cybersecurity, and
              digital marketing.  In essence, we&apos;re your one-stop vision
              partner, transforming your business ideas into successful digital
              realities.
            </p>

            {/* <Button className="w-fit rounded-none bg-[#DBFB8E] text-black">
              Contact Us
            </Button> */}
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="flex items-start justify-center gap-4 pb-10">
        <div className="grid lg:grid-cols-2 items-start gap-4 w-full">
          <div className="inline-block max-w-lg justify-center flex-1">
            <h1 className={title({ size: "sm" })}>Our Objective</h1>
          </div>

          <div className="flex flex-col gap-6 flex-1 w-full justify-stretch">
            <Accordion
              className="w-full"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Client-Centric Approach">
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Innovative Solutions">
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Exceptional Quality">
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Continuous Improvement">
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="Agility and Adaptability">
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section
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

      {/*  capacities  */}
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="flex flex-col items-start my-12 justify-center gap-6 pb-10">
        <div className="inline-block max-w-lg  justify-center flex-1">
          <h1 className={title({ size: "sm" })}>Capabilities</h1>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 justify-stretch w-full">
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Branding</p>
            <ul className="list-disc px-4 text-gray-600">
              <li>Brand Strategy</li>
              <li>Brand Architecture</li>
              <li>Verbal Identity</li>
              <li>Visual Identity</li>
              <li>Brand Guidelines</li>
              <li>Brand Experiences</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Product design</p>
            <ul className="list-disc px-4 text-gray-600">
              <li>Consumer & Enterprise Software</li>
              <li>User Research & Testing</li>
              <li>CX. UX & Interaction Design</li>
              <li>UI Design</li>
              <li>Motion Design</li>
              <li>Design Systems</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Web & Mobile development</p>
            <ul className="list-disc px-4 text-gray-600">
              <li>Technology Consulting</li>
              <li>Architecture Planning</li>
              <li>Mobile App Development</li>
              <li>Frontend Web Development</li>
              <li>Backend Development</li>
              <li>API Integration</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="font-bold">Cybersecurity</p>
            <ul className="list-disc px-4 text-gray-600">
              <li>Content Strategy</li>
              <li>Web Design</li>
              <li>Interaction Experience</li>
              <li>Content Production</li>
              <li>Frontend & Backend Development</li>
              <li>CMS Implementation</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
