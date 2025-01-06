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
import { Link } from "@nextui-org/link";
import Video from "@/components/Video";

export default function Projects() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["1"])
  );

  const router = useRouter()
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
      link:"/syre"
    },
    {
      src: "https://res.cloudinary.com/ddxcd04ok/image/upload/v1733408259/Home_screen_project_display_1_pa3ypb.png",
      topText: "Modern Layout",
      bottomText: "Qwikserve",
      bottomText2: "Mobile delivery application and services",
      link:"/qwik"
    },
    {
      src: "https://res.cloudinary.com/ddxcd04ok/image/upload/v1734006222/Rectangle_34624105_1_cjknl0.png",
      topText: "Visual Elements",
      bottomText: "Reacher",
      bottomText2: "A freemium Instant Messaging (IM) and Proprietary app",
      link:"/reacher"
    },
  ];

  return (
    <>
    {/* <Video/> */}
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="flex items-center justify-between h-svh">
        <div className="flex flex-row justify-between items-center" >
          <div className="  grid lg:grid-cols-2 items-start mb-10">
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
          <div className="flex flex-wrap gap-3 mt-8">
            {images.map((image, index) => (
              <div key={index} className="relative group cursor-pointer">
                {/* Wrapper for the hover effects */}
                <div className="relative">
                  {/* Top text overlay */}
                  <div className="absolute w-full text-center p-4 bg-black/75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 top-0 z-20">
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <p
                          color="default"
                          className="p-2 text-sm border-1 border-white/50 rounded-full">
                          Business Banking
                        </p>
                        <p
                          color="default"
                          className="p-2 text-sm border-1 border-white/50 rounded-full">
                          UI/UX Design
                        </p>
                      </div>

                      <Link href={image.link}
                        className="border-1 p-4 border-white/50 rounded-full bg-transparent ">
                        <LuArrowUpRight />
                      </Link>
                    </div>
                  </div>

                  {/* NextUI Image */}
                  <Link href={image.link} >
                  <Image
                    src={image.src}
                    alt="Project image"
                    className="w-[369px] h-auto"
                    loading="lazy"
                    isZoomed
                  />
                  </Link>

                  {/* Bottom text overlay */}
                  <div className="absolute w-full p-4 bg-black/75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 bottom-0 z-20">
                    <div className="flex flex-col space-y-2">
                      <h2 className="text-2xl font-semibold">
                        {image.bottomText}
                      </h2>
                      <p className="text-sm font-normal">{image.bottomText2}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
  )
};