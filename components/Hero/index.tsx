"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46" style={{ backgroundImage: "url('/images/banner-mbchb.webp')" }}>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white text-center">
              In tier 1 (ZQF 10 rated) HIGH QUALITY PROGRAM
              </h4>
              <h1 className="mb-3 text-3xl font-bold text-black dark:text-white xl:text-hero text-center">
              HPFP + MBChB 

              </h1>
              <p className="text-center">
              Your dream of becoming a DOCTOR comes here
              </p>
              <p className="py-2 text-center pt-2"><strong>HPFP: 1st Year – $8000</strong></p>
              <p className="text-center py-2">Next 5 Years (2nd to 6th Year) – $4500/ Year</p>
              <p className="text-center">* Fees can be paid in 4 installments/ year *</p>

              <div className="mt-10">
                <div className="flex flex-wrap gap-5 justify-center"> {/* Added justify-center */}
                  <button
                    aria-label="get started button"
                    className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                  >
                    Register Now
                  </button>
                </div>
              </div>

            </div>

            {/* <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
