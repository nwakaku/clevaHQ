"use client";

import { Image } from "@nextui-org/react";
import React from "react";
import { LuDot } from "react-icons/lu";

export default function Reacher() {
  return (
    <div>
      <main className="min-h-screen mt-48 bg-black flex justify-center items-center">
        <div className="w-full p-2 h-auto flex flex-col justify-between items-center space-y-20">
          <div className="flex w-full justify-between items-start space-x-6">
            <div className="right w-3/5 flex flex-col items-start gap-5">
              <h1 className="text-6xl text-white font-semibold">Reacher</h1>
              <p className="text-base text-white">
                Reacher is a business banking platform catering to merchants of
                all sizes in Nigeria. Reacher Business Banking offers simplified
                banking solutions designed to help business thrive
              </p>
            </div>

            <div className="left lg:w-2/5 flex flex-col items-end">
              <ul className="text-white flex flex-col items-end ">
                <li className="flex flex-row items-center">
                  <LuDot size={38} className="ml-[-8px] font-extrabold" />
                  <span>UI/UX Design</span>
                </li>
                <li className="flex flex-row items-center">
                  <LuDot size={38} className="ml-[-8px] font-extrabold" />
                  <span>Interaction Design</span>
                </li>
                <li className="flex justify-end">
                  <a
                    href=""
                    className="text-[#DBFB8E] hover:underline text-lg font-semibold">
                    Reacher.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className=" w-full">
            <Image
              src="./Reacher.svg"
              alt="Syreos Business Banking Platform"
              className=" w-full object-cover"
            />
          </div>
        </div>
      </main>

      {/* Our solution */}

      <div className="min-h-screen mt-20 flex flex-col items-center justify-center ">
        <div className="w-full items-start flex flex-col gap-5">
          <h1 className=" text-4xl font-semibold ">About the Project</h1>

          <p className="text-base w-1/2 font-medium">
            {" "}
            A swift login process gets users in quickly and effortlessly,
            ensuring they can start enjoying your app without delay
          </p>
        </div>

        <div className=" mt-6 w-full ">
          <Image
            src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1736027392/ReacherAbout_aaudjo.png"
            alt="Syreos Business Banking Platform"
            className=" w-full object-cover"
          />
        </div>
      </div>

      <div className="min-h-screen mt-20 p-4 bg-black  flex flex-col items-center justify-center text-white">
        <div className="w-full items-start justify-center p-3 ">
          <h1 className="text-4xl font-semibold ">User Problem</h1>
          <p className="w-1/2 mt-4 font-medium text-base">
            These user problems highlight the diverse range of financial
            management challenges faced by Nigerian business owners across
            different sectors, which need to be addressed through comprehensive
            solutions. About 24.5% stated that they had cashflow & Payment
            management problem
          </p>
        </div>

        <div className="w-full mt-7 flex flex-col md:flex-row items-center justify-evenly gap-4 ">
          <Image
            src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1736027378/ReacherGroup_x4kqxh.png"
            alt=""
            radius="none"
            loading="lazy"
          />
          <Image
            src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1736027378/ReacherGroup1_y1vdzx.png"
            alt=""
            radius="none"
            loading="lazy"
          />
          <Image
            src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1736027379/ReacherGroup3_g4z7pa.png"
            alt=""
            radius="none"
            loading="lazy"
          />
        </div>
      </div>

      {/* Our solution */}

      <div className="min-h-screen mt-20 flex flex-col items-center justify-center ">
        <div className="w-full items-start flex flex-col gap-4 ">
          <h1 className=" text-4xl font-semibold ">User Needs</h1>

          <p className="text-base w-1/2 font-medium">
            {" "}
            Empowering Businesses with the best payment option
          </p>
        </div>

        <div className="mt-6 w-full ">
          <Image
            src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1736027392/ReacherNeeds_lmener.png"
            alt="Syreos Business Banking Platform"
            className="w-full object-cover"
            radius="none"
          />
        </div>
      </div>

      <div className="min-h-screen mt-20 bg-black p-2 flex flex-col items-center justify-center text-white">
        <div className="w-full items-start justify-center p-3 ">
          <h1 className="text-4xl font-semibold ">
            Enabling the seamless experience.
          </h1>
          <p className="w-full sm:w-1/2 mt-4 font-medium text-base">
            {"Behind every transaction, there is a story worth knowing. And behind these stories are the need for human connection and relationships. This is why Pesa cares more than just powering global money transfers. They're helping Borderless Nomads strengthen ties with the worlds they care most about, one transaction at a time."}
          </p>
        </div>

        <div className="w-full mt-7 flex flex-col md:flex-row items-center justify-evenly gap-4">
          <img
            src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1736027379/ReacherSol_liwpk8.png"
            alt=""
            className="rounded-lg"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1736027378/ReacherSol1_dbwhcn.png"
            alt=""
            className="rounded-lg"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1736027379/ReacherSol2_o5yqqh.png"
            alt=""
            className="rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="w-full mt-7 flex flex-col md:flex-row items-center justify-evenly gap-4">
          <img
            src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1736027379/ReacherSol3_kef1bt.png"
            alt=""
            className="rounded-lg"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1736027380/ReacherSol4_ooz6ij.png"
            alt=""
            className="rounded-lg"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/ddxcd04ok/image/upload/v1736027380/ReacherSol5_ta4lup.png"
            alt=""
            className="rounded-lg"
            loading="lazy"
          />
        </div>
      </div>

      <div className="w-full bg-[#0A0A0A] p-8 flex flex-col gap-6 justify-center items-center ">
        <p className="font-semibold text-[#DBFB8E] ">View next case study</p>
        <h1 className=" text-5xl text-[#DBFB8E] ">Syreos</h1>
      </div>
    </div>
  );
}
