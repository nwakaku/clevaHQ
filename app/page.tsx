"use client";

import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Accordion, AccordionItem } from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";
import { CountUp } from "use-count-up";

export default function Home() {
  useEffect(() => {
    Aos.init({
      disable: false,
    });
  }, []);

  const accordionItems = [
    {
      key: "1",
      ariaLabel: "Accordion 1",
      title: "Client-Centric Approach",
      content:
        "At ClevaHQ, our clients are at the heart of everything we do...",
    },
    {
      key: "2",
      ariaLabel: "Accordion 2",
      title: "Innovative Solutions",
      content: "We leverage cutting-edge technology and creative thinking...",
    },
    {
      key: "3",
      ariaLabel: "Accordion 3",
      title: "Exceptional Quality",
      content:
        "Quality is our top priority. We adhere to the highest standards...",
    },
    {
      key: "4",
      ariaLabel: "Accordion 4",
      title: "Continuous Improvement",
      content: "We believe in the power of continuous improvement...",
    },
    {
      key: "5",
      ariaLabel: "Accordion 5",
      title: "Agility and Adaptability",
      content: "In a rapidly changing world, agility is key...",
    },
  ];

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

  const onComplete = () => {
    return { shouldRepeat: true, delay: 2 };
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
            <Card className="bg-transparent">
              <CardBody>
                <h1 className={title({ size: "md" })}>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      "Empower & secure Your Digital Presence",
                      1000,
                      "Empower & secure Your Digital Identity",
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
            <Card className="bg-transparent">
              <CardBody>
                <p>
                  Unlock the true potential of your brand at ClevaHQ. We
                  specialize in crafting enduring brand identities, designing
                  immersive UI/UX experiences, and seamlessly transforming ideas
                  into powerful digital solutions.
                </p>
              </CardBody>
            </Card>

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
        className="flex flex-col items-end justify-center gap-4 min-h-svh ">
        <div>
          <div className="flex justify-between  w-full">
            <h2 className={title({ size: "sm" })}>Reimagining Possibilities</h2>

            <Button className="w-fit hidden lg:block rounded-none bg-[#DBFB8E] text-black">
              Contact Us
            </Button>
          </div>

          <p className="mt-6 text-[#848484]">
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
            <h2 className="font-bold text-[36px]">
              <CountUp
                isCounting
                end={8}
                duration={3.2}
                onComplete={onComplete}
              />
            </h2>
            <p className=" text-[#848484]">Years of Expertise</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-[36px]">
              <CountUp
                isCounting
                end={50}
                duration={3.2}
                onComplete={onComplete}
              />
              +{" "}
            </h2>
            <p className=" text-[#848484]">Creative Pros</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-[36px]">
              <CountUp
                isCounting
                end={150}
                duration={3.2}
                onComplete={onComplete}
              />
              +{" "}
            </h2>
            <p className=" text-[#848484]">Projects Delivered</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-[36px]">
              <CountUp
                isCounting
                end={20}
                duration={3.2}
                onComplete={onComplete}
              />
              +{" "}
            </h2>
            <p className=" text-[#848484]">Industries Serviced</p>
          </div>
        </div>
        <Button className="w-full lg:hidden block rounded-none bg-[#DBFB8E] my-4 text-black">
          Learn About Us
        </Button>
        <div className="w-full flex flex-col mt-[100px]">
          <h2 className="font-semibold text-2xl my-6">Services We Offer</h2>
          <div className="w-full flex justify-between border-t-1 border-b-1 border-[#252525] p-3">
            <div className="flex gap-10 items-center">
              <p className="text-[#DBFB8E] font-semibold">01</p>
              <p className="text-3xl text-[#848484] font-semibold">Branding</p>
            </div>

            <Image
              className="hidden lg:block"
              src={"/dummy.svg"}
              alt="ltv"
              width={50}
              height={50}
            />
          </div>
          <div className="w-full flex justify-between border-t-1 border-b-1 border-[#252525] p-3">
            <div className="flex gap-10 items-center">
              <p className="text-[#DBFB8E] font-semibold">02</p>
              <p className="text-3xl text-[#848484] font-semibold">
                UI/UX Design
              </p>
            </div>

            <Image
              className="hidden lg:block"
              src={"/dummy.svg"}
              alt="ltv"
              width={50}
              height={50}
            />
          </div>
          <div className="w-full flex justify-between border-t-1 border-b-1 border-[#252525]  p-3">
            <div className="flex gap-10 items-center">
              <p className="text-[#DBFB8E] font-semibold">03</p>
              <p className="text-3xl text-[#848484] font-semibold">
                Development
              </p>
            </div>

            <Image
              className="hidden lg:block"
              src={"/dummy.svg"}
              alt="ltv"
              width={50}
              height={50}
            />
          </div>
          <div className="w-full flex justify-between border-t-1 border-b-1 border-[#252525]  p-3">
            <div className="flex gap-10 items-center">
              <p className="text-[#DBFB8E] font-semibold">04</p>
              <p className="text-3xl text-[#848484] font-semibold">
                Cybersecurity
              </p>
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
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="flex flex-col gap-6 mt-[100px] p-4 bg-[#0A0A0A]">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col gap-4 pb-10">
            <h2 className={title({ size: "sm" })}>Why choose ClevaHQ</h2>
            <p className="text-sm hidden lg:block text-[#848484]">
              At ClevaHQ, we understand that running a business is more than
              just managing tasks; it&apos;s about driving growth, fostering
              innovation, and maintaining seamless operations. Here&apos;s why
              ClevaHQ stands out as your ultimate business solution.
            </p>
            <p className="text-sm block lg:hidden text-[#848484]">
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
              hideIndicator={true}
              className="w-full"
              onSelectionChange={handleSelectionChange}>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Client-Centric Approach">
                <p className="text-sm text-[#848484]">
                  {
                    "At ClevaHQ, our clients are at the heart of everything we do. We tailor our solutions to meet your specific needs and ensure your satisfaction every step of the way."
                  }
                </p>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Innovative Solutions">
                <p className="text-sm text-[#848484]">
                  {
                    "We leverage cutting-edge technology and creative thinking to deliver innovative solutions that keep you ahead of the competition."
                  }
                </p>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Exceptional Quality">
                <p className="text-sm text-[#848484]">
                  {
                    "Quality is our top priority. We adhere to the highest standards to ensure that every project we deliver exceeds your expectations."
                  }
                </p>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Continuous Improvement">
                <p className="text-sm text-[#848484]">
                  {
                    "We believe in the power of continuous improvement. We regularly update our processes and technologies to provide you with the best possible outcomes."
                  }
                </p>
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="Agility and Adaptability">
                <p className="text-sm text-[#848484]">
                  {
                    "In a rapidly changing world, agility is key. We are flexible and adaptable, ready to pivot and adjust to meet your evolving needs."
                  }
                </p>
              </AccordionItem>
            </Accordion>
          </div>
          <Image src={whyImage} alt="img" width={600} height={600} />
        </div>
      </section>
      {/* <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="flex flex-col gap-6 mb-12 p-4 bg-[#0A0A0A] mt-[100px]">
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
              hideIndicator={true}
              className="w-full"
              onSelectionChange={handleSelectionChange}>
              <AccordionItem key="1" aria-label="Accordion 1" title="FinTech">
                <p className="text-sm">
                  {
                    "The intersection of finance and innovation. It encompasses digital solutions transforming money management, payments, and investments. From mobile apps to blockchain, FinTech shapes the future of financial services. ClevaHQ, we craft user-centric experiences for this dynamic industry. Let’s innovate together!"
                  }
                </p>
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="EdTech">
                <p className="text-sm">
                  {
                    " EdTech encompasses a wide range of tools, from virtual reality lessons to gamified classroom activities, making learning fun and accessible. At ClevaHQ, we focus on delivering the best to you."
                  }
                </p>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="E-commerce">
                <p className="text-sm">
                  {
                    "In the fast-paced world of online retail, having a robust e-commerce platform is essential for success. Our e-commerce solutions are designed to create seamless shopping experiences that drive sales and foster customer loyalty. We combine cutting-edge technology with user-centric design to build e-commerce websites that stand out in a competitive market."
                  }
                </p>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Healthcare">
                <p className="text-sm">
                  {
                    "Elevating Healthcare Through Digital Excellence  Embracing the future of health with cutting-edge tech solutions, making medical journeys seamless for providers and patients alike."
                  }
                </p>
              </AccordionItem>
              <AccordionItem key="5" aria-label="Accordion 5" title="Logistics">
                <p className="text-sm">
                  {
                    "Transforming Journeys in Freight & Logistics  Infusing Innovation and Efficiency into Logistics Solutions, Focusing on Real-Time Accessibility and User-Centric Design to Propel the Industry Forward."
                  }
                </p>
              </AccordionItem>
            </Accordion>
          </div>
          <Image src={currentImage} alt="img" width={600} height={600} />
        </div>
      </section> */}
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        style={{ backgroundImage: `url('/bgImg.svg')` }}
        className="py-10 text-white  flex mt-[100px] justify-center items-center">
        <div className="p-4 flex flex-col gap-4 justify-center text-center lg:w-1/2">
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
            <Button className="bg-[#DBFB8E] text-black rounded-none">
              Get to know Us
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
        className="flex items-start justify-center gap-4 mt-[100px]">
        <div className="grid lg:grid-cols-2 items-start gap-4 w-full">
          <div className="inline-block max-w-lg justify-center flex-1">
            <h1 className={title({ size: "sm" })}>
              Curious Minds Want to Know
            </h1>
          </div>

          <div className="flex flex-col gap-6 flex-1 w-full justify-stretch">
            <Accordion
              hideIndicator={true}
              selectedKeys={selectedKeys}
              className="w-full"
              onSelectionChange={setSelectedKeys}>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="What are your core services as an Agency">
                <p className="text-[#848484]">
                  {
                    "Working closely with our clients, we're committed to delivering measurable results. We offer comprehensive services including branding, product development, cybersecurity.  In essence, we're your one-stop vision partner, transforming your business ideas into successful digital realities."
                  }
                </p>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Do you work with startups">
                <p className="text-[#848484]">
                  {
                    "Absolutely! At ClevaHQ, we love working with startups. We understand the unique challenges and opportunities that come with starting a new business. Our team is dedicated to helping you build a strong brand, develop innovative products, and secure your digital presence from the ground up."
                  }
                </p>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="How much do you charge for a project">
                <p className="text-[#848484]">
                  {
                    "Our pricing is tailored to the specific needs and scope of each project. We offer competitive and transparent pricing to ensure you get the best value for your investment. To provide you with an accurate quote, we will discuss your project requirements in detail. Please contact us for a personalized consultation and pricing estimate."
                  }
                </p>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Do you accept redesign projects">
                <p className="text-[#848484]">
                  {
                    "Yes, we do! Whether you need a complete overhaul of your existing brand or want to improve the functionality and aesthetics of your current digital products, ClevaHQ is here to help. We specialize in redesign projects and can provide fresh, innovative solutions to enhance your digital presence."
                  }
                </p>
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="What is your process for working with clients">
                <p className="text-[#848484]">
                  {
                    "Working closely with our clients, we're committed to delivering measurable results. We offer comprehensive services including branding, product development, cybersecurity.  In essence, we're your one-stop vision partner, transforming your business ideas into successful digital realities."
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
        className="flex flex-col gap-10 mt-[100px]">
        <div className="inline-block max-w-lg justify-center ">
          <h1 className={title({ size: "sm" })}>Latest Articles</h1>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-3 gap-10">
          {siteConfig.dummyFounders.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              className="rounded-none bg-default-50">
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
                <p className="font-thin text-[#848484]"> {item.piece}</p>
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
