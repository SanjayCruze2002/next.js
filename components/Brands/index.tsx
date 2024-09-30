"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid items-center justify-center">
            {/* Uncomment and map through brandData when available */}
            {/* {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))} */}
            <h1 className="text-3xl font-bold text-black dark:text-white xl:text-hero text-left xl:text-center">
              Secure Your Spot Now! Limited Seats for September Intake
            </h1>
          </div>
        </div>
      </section>

      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
