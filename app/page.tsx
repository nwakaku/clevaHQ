"use client";

import { siteConfig } from "@/config/site";

import type { Selection } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Accordion, AccordionItem } from "@nextui-org/react";

import Image from "next/image";
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";

// import CountUp from "react-countup";
import { useRouter } from "next/navigation";
import CountUp, { useCountUp } from "react-countup";

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

  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  const router = useRouter();

  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        className="relative flex items-end justify-center gap-4 h-svh pb-36">
        {/* Overlay */}

        {/* Content */}
        <div className="relative z-10 grid lg:grid-cols-2 items-start mb-10">
          <div className="justify-center">
            <Card className="bg-transparent rounded-none border-none shadow-none">
              <CardBody>
                <h1 className={title({ size: "md" })}>
                  <TypeAnimation
                    sequence={[
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
            <Card className="bg-transparent rounded-none border-none shadow-none">
              <CardBody>
                <p>
                  Unlock the true potential of your brand at ClevaHQ. We
                  specialize in crafting enduring brand identities, designing
                  immersive UI/UX experiences, and seamlessly transforming ideas
                  into powerful digital solutions.
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
          <div className="flex flex-col w-2/3 ">
            <div className="flex justify-center text-center  w-full">
              <h2 className={title({ size: "md" })}>
                Holistic Advantage for <br />
                Empowered Business Success
              </h2>
            </div>

            <p className="mt-6 text-[#848484] text-center">
              ClevaHQ offers a unique blend of services that cover every aspect
              of launching and growing a business. From business name
              registration, branding, and trademarking, to UI/UX design, website
              and mobile app development, and product scaling, ClevaHQ provides
              an all-inclusive solution. We’re committed to delivering
              measurable results through deep involvement in every stage of the
              business lifecycle.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between w-full p-4 mt-8">
          <div className="flex gap-4">
            <Image
              alt="experience"
              height={70}
              src={
                "https://res.cloudinary.com/dgbreoalg/image/upload/v1725885193/experience_muxqmr.svg"
              }
              width={70}
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-[36px]">
                <CountUp enableScrollSpy duration={3.2} end={5} /> +
              </h2>
              <p className=" text-[#848484]">Years of Expertise</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Image
              alt="experience"
              height={70}
              src={
                "https://res.cloudinary.com/dgbreoalg/image/upload/v1725885304/pros_jcup1k.svg"
              }
              width={70}
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-[36px]">
                <CountUp enableScrollSpy duration={3.2} end={20} />+{" "}
              </h2>
              <p className=" text-[#848484]">Creative Pros</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Image
              alt="experience"
              height={70}
              src={
                "https://res.cloudinary.com/dgbreoalg/image/upload/v1725885359/industry_rjlefa.svg"
              }
              width={70}
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-[36px]">
                <CountUp enableScrollSpy end={8} duration={3.2} />+{" "}
              </h2>
              <p className=" text-[#848484]">Industries Serviced</p>
            </div>
          </div>
        </div>
        <Button className="w-full lg:hidden block rounded-none bg-[#DBFB8E] my-4 text-black">
          Learn About Us
        </Button>
        <div className="w-full flex flex-col mt-[100px]">
          <h2 className="font-semibold text-3xl my-6 ">Services we Offer</h2>

          {/* Service Cards */}
          {[
            {
              id: 1,
              title: "Branding",
              description:
                "Your brand is your business's identity and expression to the world. At ClevaHQ, we help you create a distinctive and compelling brand that attracts more customers and drives revenue growth. Our expert team works closely with you to develop a brand that stands out, reflects your vision, and resonates with your target audience.",
              imageSrc: "/brand.svg",
              alt: "branding",
            },
            {
              id: 2,
              title: "UI/UX Design",
              description:
                "A great product solves users’ problems efficiently and intuitively. At ClevaHQ, we design and develop digital products that offer streamlined and smooth user experiences. Our goal is to help you onboard more users and grow your revenue with platforms that cater to your audience’s needs.",
              imageSrc: "/design.svg",
              alt: "design",
            },
            {
              id: 3,
              title: "Development",
              description:
                "Our web design and mobile development services combine creativity and functionality to produce visually striking websites and applications. Our commitment is to ensure that your website effectively communicates your brand message and enhances user retention.",
              imageSrc: "/develop.svg",
              alt: "development",
            },
            {
              id: 4,
              title: "Cybersecurity",
              description:
                "Beyond financial loss, your business legacy is at stake. Our comprehensive cybersecurity services protect your business from data breaches and fraudulent activities, ensuring your company’s credibility and legacy remain intact. Let us help you avoid losses and secure your future.",
              imageSrc: "/cybersec.svg",
              alt: "cybersecurity",
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
        className="flex flex-col gap-6 mt-[100px] p-4 bg-[#0A0A0A]">
        <div className="grid lg:grid-cols-2 items-center justify-between gap-8 w-full  pb-10">
          <div className="flex flex-col gap-4 pb-10">
            <h2 className={title({ size: "md" })}>Why choose ClevaHQ</h2>
            <p className="text-sm hidden lg:block text-[#848484]">
              Your vision is to make an impact through your business and to
              succeed, you need a partner. One who sees what you see and is as
              passionate as you in achieving it. ClevaHQ partners with you to
              bring your innovative ideas to life, providing comprehensive
              services that cover every aspect of your business journey.
            </p>
            <p className="text-sm block lg:hidden text-[#848484]">
              Your vision is to make an impact through your business and to
              succeed, you need a partner. One who sees what you see and is as
              passionate as you in achieving it. ClevaHQ partners with you to
              bring your innovative ideas to life, providing comprehensive
              services that cover every aspect of your business journey.
            </p>
            <div className="flex flex-col gap-6 flex-1 w-full justify-stretch">
              <Accordion
                showDivider={false}
                selectedKeys={selectedKeys}
                hideIndicator={true}
                className="w-full border-none"
                onSelectionChange={handleSelectionChange}>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title={
                    <h3
                      className="font-semibold text-3xl"
                      style={{ color: titleColors["1"] }}>
                      Client-Centric Approach
                    </h3>
                  }>
                  <p className="text-sm text-[#848484]">
                    At ClevaHQ, our clients are at the heart of everything we
                    do. We tailor our solutions to meet your specific needs and
                    ensure your satisfaction every step of the way.
                  </p>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title={
                    <h3
                      className="font-semibold text-3xl"
                      style={{ color: titleColors["2"] }}>
                      Innovative Solutions
                    </h3>
                  }>
                  <p className="text-sm text-[#848484]">
                    At ClevaHQ, our clients are at the heart of everything we
                    do. We tailor our solutions to meet your specific needs and
                    ensure your satisfaction every step of the way.
                  </p>
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title={
                    <h3
                      className="font-semibold text-3xl"
                      style={{ color: titleColors["3"] }}>
                      Exceptional Quality
                    </h3>
                  }>
                  <p className="text-sm text-[#848484]">
                    At ClevaHQ, our clients are at the heart of everything we
                    do. We tailor our solutions to meet your specific needs and
                    ensure your satisfaction every step of the way.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <Image src={whyImage} alt="img" width={400} height={400} />
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
            <h2 className={title({ size: "lg" })}>
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

      {/* <section
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
            <Card shadow="sm" key={index} className="rounded-none bg-[#0A0A0A]">
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
      </section> */}
    </>
  );
}
