import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex items-end justify-center gap-4 min-h-svh lg:pb-20">
        <div className="grid grid-cols-2 items-start">
          <div className="inline-block max-w-lg text-center justify-center flex-1">
            <h1 className={title({ size: "md" })}>
              Empower & secure Your Digital Presence
            </h1>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <div>
              <p>
                Unlock the true potential of your brand at ClevaHQ. We
                specialize in crafting enduring brand identities, designing
                immersive UI/UX experiences, and seamlessly transforming ideas
                into powerful digital solutions.
              </p>
            </div>

            <Button className="w-fit rounded-none bg-[#DBFB8E] text-black">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      <section className="flex h-screen items-center justify-center bg-black ">
        <Image src={"/videobg.svg"} alt="smt" width={1500} height={1500} />
      </section>
      <section className="flex flex-col items-end justify-center gap-4 min-h-svh ">
        <div className="flex justify-between  w-full">
          <h2 className={title({ size: "sm" })}>Reimagining Possibilities</h2>

          <Button className="w-fit rounded-none bg-[#DBFB8E] text-black">
            Contact Us
          </Button>
        </div>
        <div>
          <p>
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
      </section>
    </>
  );
}
