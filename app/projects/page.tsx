"use client";

import React from "react";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem } from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/card";
import { TypeAnimation } from "react-type-animation";

export default function Projects() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["1"])
  );

  const [titleColors, setTitleColors] = React.useState<Record<string, string>>({
    "1": "#DBFB8E",
    "2": "#FFFFFF",
    "3": "#FFFFFF",
    "4": "#FFFFFF",
    "5": "#FFFFFF",
  });

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys);

    const newTitleColors: Record<string, string> = {
      "1": "#FFFFFF",
      "2": "#FFFFFF",
      "3": "#FFFFFF",
      "4": "#FFFFFF",
      "5": "#FFFFFF",
    };

    // Check if keys is a Set before iterating
    if (keys instanceof Set) {
      Array.from(keys).forEach((key) => {
        newTitleColors[key as string] = "#DBFB8E"; // Active color (lemon)
      });
    }

    setTitleColors(newTitleColors);
  };

  return (
    <>
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
                      "Ideas once confined only to the imagination",
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
                <p className="text-xl">
                Now skilfully conjured into tangible products, through meticulous, dedicated craft.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        {/* <div className="grid lg:grid-cols-2 items-start">
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
        </div> */}
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
              hideIndicator={true}
              selectedKeys={selectedKeys}
              showDivider={false}
              onSelectionChange={(keys) =>
                handleSelectionChange(new Set(keys))
              }>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title={
                  <h2 className="text-2xl font-semibold" style={{ color: titleColors["1"] }}>
                    Client-Centric Approach
                  </h2>
                }>
                <p>
                  {
                    "Continuously prioritize understanding and meeting the needs of our clients, fostering long-term partnerships built on trust and mutual success."
                  }
                </p>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title={
                  <h2 className="text-2xl font-semibold" style={{ color: titleColors["2"] }}>
                    Innovative Solutions
                  </h2>
                }>
                <p>
                  {
                    "At ClevaHQ, our clients are at the heart of everything we do. We tailor our solutions to meet your specific needs and ensure your satisfaction every step of the way."
                  }
                </p>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title={
                  <h2 className="text-2xl font-semibold" style={{ color: titleColors["3"] }}>
                    Exceptional Quality
                  </h2>
                }>
                <p>
                  {
                    "At ClevaHQ, our clients are at the heart of everything we do. We tailor our solutions to meet your specific needs and ensure your satisfaction every step of the way."
                  }
                </p>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title={
                  <h2 className="text-2xl font-semibold" style={{ color: titleColors["4"] }}>
                    Continuous Improvement
                  </h2>
                }>
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title={
                  <h2 className="text-2xl font-semibold" style={{ color: titleColors["5"] }}>
                    Agility and Adaptability
                  </h2>
                }>
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
