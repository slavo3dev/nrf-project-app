import React from "react";
import Layout from "../components/layout/Layout";
import { Hero, ContactForm, OurTeam } from "../components";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />

        <section className="py-12">
          <div className="container py-12 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-3 order-1 md:order-0">
                <div className="max-w-md">
                  <h3
                    className="mb-4 text-3xl md:text-3xl font-bold font-heading wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    How we work?
                  </h3>
                  <p
                    className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed luctus eget justo et iaculis.
                  </p>
                  <ul>
                    <li
                      className="py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".7s"
                    >
                      <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                        1
                      </span>
                      <span>Expand Your Reach</span>
                    </li>
                    <li
                      className="py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".9s"
                    >
                      <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                        2
                      </span>
                      <span>Annualized Growth</span>
                    </li>
                    <li
                      className="pt-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".11s"
                    >
                      <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                        3
                      </span>
                      <span>Book Your Providers</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="w-full md:w-1/2 px-3 order-0 md:order-1 mb-12 md:mb-0 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <img
                  className="sm:max-w-sm lg:max-w-full mx-auto"
                  src="/assets/imgs/illustrations/podcast.svg"
                  alt="Prototype.NEXT Software Consulting Platform"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="container">
            <div className="flex flex-wrap lg:flex-nowrap">
              <div className="flex flex-wrap lg:max-w-sm mx-auto">
                <img
                  className="jump sm:max-w-sm lg:max-w-full mx-auto wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                  src="/assets/imgs/illustrations/tasks.svg"
                  alt="Prototype.NEXT Software Consulting Platform"
                />
              </div>
              <div className="w-full lg:w-auto">
                <div className="lg:pl-32">
                  <div className="mb-4">
                    <span
                      className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeIn"
                      data-wow-delay=".1s"
                    >
                      Why choose us
                    </span>
                    <h2
                      className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      Key Features
                    </h2>
                  </div>
                  <div
                    className="flex items-start py-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    <div className="w-8 mr-5 text-blue-500">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        Expand Your Reach
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Veritatis expedita animi.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-start py-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".7s"
                  >
                    <div className="w-8 mr-5 text-blue-500">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        Annualized Growth
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Veritatis expedita animi.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-start py-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".9s"
                  >
                    <div className="w-8 mr-5 text-blue-500">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        Book Your Providers
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Veritatis expedita animi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container text-center">
            <span className="inline-block px-4 py-2 text-xs font-semibold bg-blue-100 text-blue-500 rounded-full uppercase">
              Contact Us
            </span>
            <ContactForm />
          </div>
        </section>
        {/* <OurTeam /> */}
      </Layout>
    </>
  );
};

export default Home;
