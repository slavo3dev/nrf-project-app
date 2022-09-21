import React from "react";

export const Brands = () => {
  return (
    <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pb-4">
      <div
        className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
        data-wow-delay=".1s"
      >
        <img
          className="mx-auto"
          src="/assets/imgs/logos/brands/brand-1.png"
          alt="Prototype.NEXT Software Consulting Platform"
        />
      </div>
      <div
        className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
        data-wow-delay=".3s"
      >
        <img
          className="mx-auto"
          src="/assets/imgs/logos/brands/brand-2.png"
          alt="Prototype.NEXT Software Consulting Platform"
        />
      </div>
      <div
        className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
        data-wow-delay=".5s"
      >
        <img
          className="mx-auto"
          src="/assets/imgs/logos/brands/brand-3.png"
          alt="Prototype.NEXT Software Consulting Platform"
        />
      </div>
      <div
        className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
        data-wow-delay=".7s"
      >
        <img
          className="mx-auto"
          src="/assets/imgs/logos/brands/brand-4.png"
          alt="Prototype.NEXT Software Consulting Platform"
        />
      </div>
      <div
        className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
        data-wow-delay=".9s"
      >
        <img
          className="mx-auto"
          src="/assets/imgs/logos/brands/brand-5.png"
          alt="Prototype.NEXT Software Consulting Platform"
        />
      </div>
    </div>
  );
};
