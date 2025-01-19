"use client";

import React from "react";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/card";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/navigation";
import { LuArrowUpRight } from "react-icons/lu";

export default function Projects() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["1"])
  );

  const router = useRouter();
  const [titleColors, setTitleColors] = React.useState<Record<string, string>>({
    "1": "#DBFB8E",
    "2": "#FFFFFF",
  });

  const images = [
    {
      src: "https://res.cloudinary.com/ddxcd04ok/image/upload/v1733407915/Home_screen_project_display_yrskdz.png",
      topText: "Project Display",
      bottomText: "Syreos",
      bottomText2: "Business Banking App For Merchants Of All Sizes",
    },
    {
      src: "https://res.cloudinary.com/ddxcd04ok/image/upload/v1733408259/Home_screen_project_display_1_pa3ypb.png",
      topText: "Modern Layout",
      bottomText: "Qwikserve",
      bottomText2: "Mobile delivery application and services",
    },
    {
      src: "https://res.cloudinary.com/ddxcd04ok/image/upload/v1734006222/Rectangle_34624105_1_cjknl0.png",
      topText: "Visual Elements",
      bottomText: "Reacher",
      bottomText2: "A freemium Instant Messaging (IM) and Proprietary app",
    },
  ];

  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="min-h-[66vh] flex flex-col justify-around py-12">
        <div className="flex flex-row justify-between items-start">
          <div className="relative z-10 grid lg:grid-cols-2 gap-x-24">
            <div className="flex items-start">
              <Card className="bg-transparent border-none shadow-none">
                <CardBody>
                  <h1 className={title({ size: "md" })}>
                    Ideas once confined only to the imagination,
                  </h1>
                </CardBody>
              </Card>
            </div>

            <div className="flex flex-col gap-3 text-white">
              <Card className="bg-transparent border-none shadow-none">
                <CardBody>
                  <p className="text-xl">
                    Now skilfully conjured into tangible products, through
                    meticulous, dedicated craft.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center mt-8">
          <Button
            color="default"
            variant="shadow"
            radius="full"
            className="border-white hover:bg-[#DBFB8E]">
            All works
          </Button>
          <Button
            color="default"
            variant="ghost"
            radius="full"
            className="border-white hover:bg-[#DBFB8E]">
            Branding
          </Button>
          <Button
            color="default"
            variant="ghost"
            radius="full"
            className="border-white hover:bg-[#DBFB8E]">
            UI/UX Design
          </Button>
          <Button
            color="default"
            variant="ghost"
            radius="full"
            className="border-white hover:bg-[#DBFB8E]">
            Development
          </Button>
          <Button
            color="default"
            variant="ghost"
            radius="full"
            className="border-white hover:bg-[#DBFB8E]">
            Cyber Security
          </Button>
        </div>
      </section>
      {/* Projects Gallery Section */}
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="flex items-start gap-4 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-between items-start mb-12">
            <div className="text-white">
              <h1 className={title({ size: "md" })}>Our projects</h1>
              <p className="text-xl max-w-2xl">
                Explore our project gallery and witness the power of our
                designs, development, and branding solutions in action.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {images.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="relative overflow-hidden rounded-lg">
                    {/* Top overlay - always visible */}
                    <div className="absolute w-full text-center p-4 bg-black/75 text-white top-0 z-20">
                      <div className="flex justify-between">
                        <div className="flex gap-2">
                          <p className="p-2 text-sm border border-white/50 rounded-full">
                            Business Banking
                          </p>
                          <p className="p-2 text-sm border border-white/50 rounded-full">
                            UI/UX Design
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          isIconOnly
                          className="border border-white/50 rounded-full">
                          <LuArrowUpRight />
                        </Button>
                      </div>
                    </div>

                    <Image
                      src={image.src}
                      alt={`${image.bottomText} project`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      isZoomed
                    />

                    {/* Bottom text overlay */}
                    <div className="absolute w-full p-4 bg-black/75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 bottom-0 z-20">
                      <div className="flex flex-col space-y-2">
                        <h2 className="text-2xl font-semibold">
                          {image.bottomText}
                        </h2>
                        <p className="text-sm font-normal">
                          {image.bottomText2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
        className="flex items-start justify-center gap-4 pb-10"></section>
    </>
  );
}
