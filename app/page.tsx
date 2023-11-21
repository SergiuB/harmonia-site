"use client";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

import { Mukta } from "next/font/google";
import { useState, useRef, useEffect } from "react";
const mukta = Mukta({ subsets: ["latin"], weight: ["400", "700", "800"] });

const SocialLinks = () => {
  const socialAccounts = ["twitter", "facebook", "instagram"];
  const socialLinksHTML = socialAccounts.map((item) => (
    <a
      href={`https://${item}.com/beyonce`}
      className={`relative inline-flex items-center justify-center w-16 h-16 text-gray-900 social-link ${item}`}
      key={item}
      target="blank_"
    >
      <i className={`relative z-10 fa fa-2x fa-${item}`} />
    </a>
  ));

  return <ul className="flex items-center space-x-12">{socialLinksHTML}</ul>;
};

type TopButtonProps = {
  selected?: boolean;
  text: string;
  onClick?: () => void;
};

type TopTextProps = TopButtonProps;

const TopButton = ({ selected, text, onClick }: TopButtonProps) => (
  <motion.button
    layout
    transition={{ type: "spring" }}
    className={`top-button bg-slate-200/70 backdrop-blur-md py-2 px-5 rounded-full shadow-lg  mb-10
    ${!selected && "w-14"}`}
    onClick={onClick}
  >
    {selected && <motion.h2 className="drop-shadow-lg">{text}</motion.h2>}
  </motion.button>
);

export const TopText = ({ selected, text }: TopTextProps) => (
  <motion.h3
    className={`${!selected ? "hidden" : "text-xl text-darkblue"}`}
    animate={{ opacity: selected ? 1 : 0 }}
  >
    {text}
  </motion.h3>
);

export default function Home() {
  const [toggle, setToggle] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setToggle((prev) => (prev + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [toggle]);

  const images = ["/img1.avif", "/img2.jpg", "/img3.webp"];

  const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad venquis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis au irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Utenim ad venquis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Duis au irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Duis au irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad venquis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.",
  ];

  return (
    <main className="flex flex-col lg:h-screen items-center justify-center ">
      <div className="backdrop-blur-md bg-gradient-to-br from-reddish/30 from-10% via-blueish/30 via-30% to-purplish/30 to-90% rounded-3xl p-6 mb-10">
        <Image src="/logo.svg" width={300} height={200} alt="logo" />
      </div>
      <div className="flex w-screen lg:w-[1400px] md:w-[900px] lg:h-3/5 backdrop-blur-md bg-gradient-to-br from-reddish/50 from-10% via-blueish/50 via-30% to-purplish/50 to-90% rounded-3xl relative p-10">
        <div className="absolute -top-16 left-0 z-10 group hover:animate-rotate05 origin-[0%70%] hover:cursor-pointer bg-hand-tl bg-contain bg-no-repeat w-80 h-36">
          <h1
            className={`${mukta.className} font-extrabold uppercase relative top-8 left-14 text-3xl text-[#6162A3] group-hover:text-white group-hover:animate-glow-red`}
          >
            facilitatori
          </h1>
        </div>

        <div className="absolute -top-5 -right-20 z-10 group hover:animate-rotate0minus5 origin-[50%90%] hover:cursor-pointer bg-hand-tr bg-contain bg-no-repeat w-52 h-72">
          <h1
            className={`${mukta.className} font-extrabold uppercase relative top-28 left-16 text-3xl text-[#954D53] group-hover:text-white group-hover:animate-glow-red`}
          >
            contact
          </h1>
        </div>

        <div className="absolute -bottom-14 -right-5 z-10 group hover:animate-rotate0minus5 origin-[0%70%] hover:cursor-pointer bg-hand-br bg-contain bg-no-repeat w-80 h-40">
          <h1
            className={`${mukta.className} font-extrabold uppercase relative top-24 left-20 text-3xl text-[#2E6570] group-hover:text-white group-hover:animate-glow-red`}
          >
            membership
          </h1>
        </div>

        <div className="absolute -top-44 right-10 z-10  bg-head bg-contain bg-no-repeat w-96 h-80" />

        <div className="flex flex-row w-full">
          <div className="rounded-3xl self-center h-full w-1/3 relative flex-grow-0 flex-shrink-0">
            <motion.div animate={{ opacity: toggle === 0 ? 1 : 0 }}>
              <Image
                className="rounded-3xl object-cover "
                src={images[toggle]}
                alt="Picture of the author"
                fill={true}
              />
            </motion.div>
            <motion.div animate={{ opacity: toggle === 1 ? 1 : 0 }}>
              <Image
                className="rounded-3xl object-cover "
                src={images[toggle]}
                alt="Picture of the author"
                fill={true}
              />
            </motion.div>
            <motion.div animate={{ opacity: toggle === 2 ? 1 : 0 }}>
              <Image
                className="rounded-3xl object-cover "
                src={images[toggle]}
                alt="Picture of the author"
                fill={true}
              />
            </motion.div>
          </div>
          <div className="w-2/3 px-10 flex flex-col">
            <div
              className={`${mukta.className} flex gap-4 text-4xl font-extrabold text-darkblue`}
            >
              <TopButton
                selected={toggle === 0}
                text="Misiune"
                onClick={() => setToggle(0)}
              ></TopButton>

              <TopButton
                selected={toggle === 1}
                text="Viziune"
                onClick={() => setToggle(1)}
              ></TopButton>

              <TopButton
                selected={toggle === 2}
                text="Valori"
                onClick={() => setToggle(2)}
              ></TopButton>
            </div>
            <div className="place-self-center">
              <TopText selected={toggle === 0} text={texts[0]}></TopText>
              <TopText selected={toggle === 1} text={texts[1]}></TopText>
              <TopText selected={toggle === 2} text={texts[2]}></TopText>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 flex items-center justify-center">
        <SocialLinks />
      </div>
    </main>
  );
}
