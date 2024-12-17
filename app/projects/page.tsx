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
        className="flex items-center justify-between h-svh">
          <div className="flex flex-row justify-between items-center" >
          <div className="flex items-center grid lg:grid-cols-2 items-start mb-10">
          <div className=" flex flex-1 mr-12 items-center justify-center ">
            <Card className="bg-transparent border-none shadow-none">
              <CardBody>
                <h1 className={title({ size: "md" })}>
                      "Ideas once confined only to the imagination",
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
          </div>

      </section>
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="flex items-start gap-4 pb-10">
          <div className="flex flex-col justify-between items-start ">
            <div className="text-white">
            <h1 className={title({ size: "md" })}>Our projects</h1>
            <p className="text-xl">
            Explore our project gallery and witness the <br />
            power of our designs, development, and branding <br /> solutions in action.
            </p>
            </div>
            <div className="p-8 w-full flex justify-center items-center">
              {/* Hover effect */}
              <div className="images flex gap-3 mt-8">
                <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1733407915/Home_screen_project_display_yrskdz.png" className="w-[369px] h-auto" alt="" loading="lazy" />
                <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1733408259/Home_screen_project_display_1_pa3ypb.png" className="w-[369px] h-auto" alt="" loading="lazy" />
                <img src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1734006222/Rectangle_34624105_1_cjknl0.png" className="w-[369px] h-auto" alt="" loading="lazy" />
              </div>
            </div>
          </div>
      </section>

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
    

      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="flex items-start justify-center gap-4 pb-10">
     
      </section>
    </>
  );
}
