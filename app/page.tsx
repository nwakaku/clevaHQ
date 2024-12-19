"use client";

import { siteConfig } from "@/config/site";

import type { Selection } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Accordion, AccordionItem, Chip, Image } from "@nextui-org/react";
import { LuArrowUpRight } from "react-icons/lu";

import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";

// import CountUp from "react-countup";
import { useRouter } from "next/navigation";
import CountUp from "react-countup";

import { title } from "@/components/primitives";

export default function Home() {
  useEffect(() => {
    Aos.init({
      disable: false,
    });
  }, []);

  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["1"])
  );
  const [currentImage, setCurrentImage] = React.useState("/fintech.svg");
  const [whyImage, setWhyImage] = React.useState("/Coner.png");
  const [titleColors, setTitleColors] = React.useState({
    "1": "#DBFB8E",
    "2": "#FFFFFF",
    "3": "#FFFFFF",
    "4": "#FFFFFF",
    "5": "#FFFFFF",
  });

  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys);
    const key = Array.from(keys).pop() || "1";

    // Update the images based on the selected key
    switch (key) {
      case "1":
        setCurrentImage("/fintech.svg");
        setWhyImage("/Coner.png");
        break;
      case "2":
        setCurrentImage("/edtech.svg");
        setWhyImage("/Spiral.png");
        break;
      case "3":
        setCurrentImage("/ecommerce.svg");
        setWhyImage("/quality.png");
        break;
      case "4":
        setCurrentImage("/health.svg");
        setWhyImage("/Coner.png");
        break;
      case "5":
        setCurrentImage("/logistics.svg");
        setWhyImage("/agil.svg");
        break;
      default:
        setCurrentImage("/fintech.svg");
        setWhyImage("/whychoos.svg");
    }

    // Update the title colors
    setTitleColors((prevColors) => ({
      "1": key === "1" ? "#DBFB8E" : "#FFFFFF",
      "2": key === "2" ? "#DBFB8E" : "#FFFFFF",
      "3": key === "3" ? "#DBFB8E" : "#FFFFFF",
      "4": key === "4" ? "#DBFB8E" : "#FFFFFF",
      "5": key === "5" ? "#DBFB8E" : "#FFFFFF",
    }));
  };

  // const onComplete = () => {
  //   return { shouldRepeat: true, delay: 2 };
  // };

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

  const stats = [
    {
      icon: "https://res.cloudinary.com/dgbreoalg/image/upload/v1725885193/experience_muxqmr.svg",
      count: 5,
      text: "Years of Expertise",
    },
    {
      icon: "https://res.cloudinary.com/dgbreoalg/image/upload/v1725885304/pros_jcup1k.svg",
      count: 20,
      text: "Creative Pros",
    },
    {
      icon: "https://res.cloudinary.com/dgbreoalg/image/upload/v1725885359/industry_rjlefa.svg",
      count: 8,
      text: "Industries Serviced",
    },
  ];

  const router = useRouter();

  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="relative flex flex-col justify-between items-end  h-svh mb-36 pb-2">
        {/* Overlay */}

        {/* Content */}
        <div className="relative z-10 mt-auto grid lg:grid-cols-2 item-start lg:space-x-24 ">
          <div className="justify-center ">
            <Card className="bg-transparent rounded-none border-none shadow-none">
              <CardBody>
                <h1 className={title({ size: "md" })}>
                  <TypeAnimation
                    sequence={[
                      "We Shape Ideas Into Impactful Realities.",
                      1000,
                      "We Bring Your Vision to Life with Innovation.",
                      1000,
                      "Transforming Concepts into Tangible Success.",
                      1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </h1>
              </CardBody>
            </Card>
          </div>

          <div className="flex flex-col gap-3 text-white ">
            <Card className="bg-transparent rounded-none border-none shadow-none">
              <CardBody>
                <p>
                  We help you brand, design, develop, and secure your business
                  or product from concept to launch, ensuring a seamless journey
                  to success
                </p>
              </CardBody>
            </Card>

            <Button
              className="w-fit rounded-md bg-[#DBFB8E] text-black"
              onClick={() =>
                (window.location.href = "mailto:ClevaHQ@gmail.com")
              }>
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
        className="flex flex-col items-end justify-center gap-4 min-h-svh ">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col lg:w-2/3 ">
            <div className="flex justify-center text-center  w-full">
              <h2 className={title({ size: "md" })}>
                Holistic Advantage for <br />
                Empowered Business Success
              </h2>
            </div>

            <p className="mt-6 text-[#848484] text-center">
              At ClevaHQ, we bring your idea to life with innovative approaches
              to ensure it delivers on its purpose. From conception to market
              success, we are committed to measurable outcomes at every stage of
              product development.
            </p>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex lg:flex-row flex-col  items-center justify-center lg:justify-start gap-6 p-4">
                <div className="flex-shrink-0">
                  <Image
                    alt="stat icon"
                    height={70}
                    width={70}
                    src={stat.icon}
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                  <h2 className="font-semibold text-4xl flex items-center">
                    <CountUp enableScrollSpy duration={3.2} end={stat.count} />
                    <span className="ml-1">+</span>
                  </h2>
                  <p className="text-[#848484] text-lg">{stat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button className="w-full lg:hidden block rounded-none bg-[#DBFB8E] my-4 text-black">
          Learn About Us
        </Button>

        {/* add hover effect */}
        <div className="p-8 w-full flex flex-col gap-8 justify-center items-center">
          <div className="flex lg:flex-row flex-col  lg:justify-between">
            <div className="text flex-1">
              <h1 className="text-white text-5xl font-bold gap-2">
                Guided by Our <br /> Client's Vision{" "}
              </h1>
            </div>
            <div className="p text-white flex-1">
              {" "}
              <h2>
                At the heart of our process is a commitment to our clients'
                vision. We harness innovative technologies and design principles
                to craft exceptional digital experiences that not only meet but
                exceed expectaions. Together, we transform ideas into impactful
                solutions
              </h2>{" "}
            </div>
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

                      <Button
                        isIconOnly
                        className="border-1 border-white/50 rounded-full bg-transparent ">
                        <LuArrowUpRight />
                      </Button>
                    </div>
                  </div>

                  {/* NextUI Image */}
                  <Image
                    src={image.src}
                    alt="Project image"
                    className="w-[369px] h-auto"
                    loading="lazy"
                    isZoomed
                  />

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

        <div className="w-full flex flex-col mt-[100px]">
          <h2 className="font-semibold text-5xl my-6 ">Services We Offer</h2>

          {/* Service Cards */}
          {[
            {
              id: 1,
              title: "Branding",
              description:
                "Create a powerful essence around your brand—from its logo, colors, and typography to its overall identity. ClevaHQ helps you craft a compelling and subtle story about your business, values, and vision that resonates with your audience.",
              imageSrc: "/brandinghq.svg",
              alt: "branding",
            },
            {
              id: 2,
              title: "UI/UX Design",
              description:
                "Design is more than just how your app looks, it's how it feels and functions. At ClevaHQ, we craft UI/UX designs that are visually stunning and intuitively functional. Our goal is to create a seamless experience that captivates and engage users.",
              imageSrc: "/freeiphone.svg",
              alt: "design",
            },
            {
              id: 3,
              title: "Development",
              description:
                "From high-converting websites to mobile apps, every touchpoint is scalable, reliable, and optimized for performance. We tailor our solutions to meet your specific needs, ensuring seamless integration and functionality.",
              imageSrc: "/development.svg",
              alt: "development",
            },
          ].map((service) => (
            <div
              key={service.id}
              className="w-full flex justify-between border-t border-b border-[#252525] p-8 group relative overflow-hidden transition-all duration-500 min-h-[150px] hover:min-h-[300px] ease-in-out hover:cursor-pointer">
              <div className="flex gap-6 items-center basis-full lg:basis-1/2 group-hover:items-start transition-all duration-500">
                {/* Number, centered */}
                <p className="text-[#DBFB8E] text-3xl font-semibold flex-shrink-0 group-hover:text-[#848484] transition-colors duration-500">
                  {`0${service.id}`}
                </p>

                {/* Service Content */}
                <div className="flex flex-col justify-center w-full">
                  {/* Heading always visible */}
                  <h3 className="text-4xl text-[#848484] font-semibold group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>

                  {/* Details hidden by default, shown on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-y-0 translate-y-10 max-h-0 group-hover:max-h-[500px] overflow-hidden">
                    <p className="text-sm text-[#848484] mt-4">
                      {service.description}
                    </p>
                    <Button className="w-fit rounded-none bg-[#DBFB8E] text-black mt-4">
                      View More
                    </Button>
                  </div>
                </div>
              </div>

              {/* Image with increased zoom, more bend effect, hidden on small screens */}
              <div className="hidden lg:flex basis-1/2 justify-end items-center group-hover:pr-40 transition-all duration-500">
                <Image
                  className="group-hover:scale-150 group-hover:-rotate-12 rounded-md transition-transform duration-500"
                  src={service.imageSrc}
                  alt={service.alt}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="flex items-start justify-center gap-4 mt-[100px]">
        <div className="grid lg:grid-cols-2 items-start gap-4 w-full">
          <div className="inline-block max-w-lg justify-center flex-1">
            <h2 className={title({ size: "md" })}>
              Curious Minds <br /> Want to Know
            </h2>
          </div>

          <div className="flex flex-col gap-6 flex-1 w-full justify-stretch">
            <Accordion
              showDivider={false}
              hideIndicator={true}
              selectedKeys={selectedKeys}
              className="w-full"
              onSelectionChange={handleSelectionChange}>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title={
                  <p
                    className="font-semibold text-2xl cursor-pointer"
                    style={{ color: titleColors["1"] }}>
                    What are your core services as an Agency
                  </p>
                }>
                <p className="text-[#848484]">
                  {
                    "Our seasoned team of senior UI/UX designers is dedicated to curating immersive digital experiences that empower brands to flourish in the contemporary landscape."
                  }
                </p>
              </AccordionItem>

              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title={
                  <p
                    className="font-semibold text-2xl cursor-pointer"
                    style={{ color: titleColors["2"] }}>
                    Do you work with startups
                  </p>
                }>
                <p className="text-[#848484]">
                  {
                    "Absolutely! At ClevaHQ, we love working with startups. We understand the unique challenges and opportunities that come with starting a new business. Our team is dedicated to helping you build a strong brand, develop innovative products, and secure your digital presence from the ground up."
                  }
                </p>
              </AccordionItem>

              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title={
                  <p
                    className="font-semibold text-2xl cursor-pointer"
                    style={{ color: titleColors["3"] }}>
                    How much do you charge for a project
                  </p>
                }>
                <p className="text-[#848484]">
                  {
                    "Our pricing is tailored to the specific needs and scope of each project. We offer competitive and transparent pricing to ensure you get the best value for your investment. To provide you with an accurate quote, we will discuss your project requirements in detail. Please contact us for a personalized consultation and pricing estimate."
                  }
                </p>
              </AccordionItem>

              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title={
                  <p
                    className="font-semibold text-2xl cursor-pointer"
                    style={{ color: titleColors["4"] }}>
                    Do you accept redesign projects
                  </p>
                }>
                <p className="text-[#848484]">
                  {
                    "Yes, we do! Whether you need a complete overhaul of your existing brand or want to improve the functionality and aesthetics of your current digital products, ClevaHQ is here to help. We specialize in redesign projects and can provide fresh, innovative solutions to enhance your digital presence."
                  }
                </p>
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
            We are empowering visionary entrepreneurs, startups, small
            businesses, and medium enterprises to launch, grow, and scale their
            businesses from ideation to launch, and ultimately market success.
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
