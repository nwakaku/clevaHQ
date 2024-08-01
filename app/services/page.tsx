"use client";

import React, { useEffect } from "react";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
   useEffect(() => {
     Aos.init({
       disable: false,
     });
   }, []);

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
          <div className=" max-w-lg justify-center">
            <h1 className={title({ size: "md" })}>What We Offer</h1>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <p>
                Our extensive knowledge in design and technology enables us to
                create high-quality brands and digital interactions.
              </p>
            </div>

            <Button className="w-fit rounded-none bg-[#DBFB8E] text-black">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      <section className="flex items-start justify-center gap-4 p-4 mb-16 bg-default-50">
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
            className="rounded-none p-2"
            src={"/branding.svg"}
            alt="img"
            width={600}
            height={600}
          />
        </div>
      </section>
      <section className="flex items-start justify-center gap-4 p-4 mb-16 bg-default-50">
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
            className="rounded-none p-2"
            src={"/mobileapp.svg"}
            alt="img"
            width={600}
            height={600}
          />
        </div>
      </section>
      <section className="flex items-start justify-center gap-4 p-4 mb-16 bg-default-50">
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
      </section>
    </>
  );
}
