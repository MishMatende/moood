import { Fugaz_One } from "next/font/google";
import React from "react";
import Button from "./Button";
import Calendar from "./Calendar";
import Link from "next/link";
import CallToAction from "./CallToAction";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <div className="py-4 md:py-10 flex flex-col gap-8 sm:gap-10 md:gap-14">
      <h1
        className={
          "text-5xl sm:text-6xl md:text-7xl text-center " + fugaz.className
        }
      >
        <span className="text-gradient">Moood</span> helps you track your{" "}
        <span className="text-gradient">daily</span> moood!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Create your moood record and see how you feel on{" "}
        <span className="font-semibold">every day of every year.</span>
      </p>
      <CallToAction />
      <Calendar demo />
    </div>
  );
}
