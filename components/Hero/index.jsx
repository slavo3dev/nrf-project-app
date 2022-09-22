import React, { useState } from "react";
import TextEffect from "../elements/TextEffect";
import axios from "axios";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  // const [errorMsg, setErrorMsg] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setState("Loading");
    try {
      await axios.post("/api/subscribe", { email });
      setState("Success");
      setTimeout(() => {
        setState("idle");
      }, 3000);

      setEmail("");
    } catch (e) {
      // setErrorMsg(e.response.data.detail);
      setState("Error");
      setTimeout(() => {
        setState("idle");
      }, 900);
    }
  };

  const subscribeForm = (
    <div className="max-w-2xl mx-auto text-center">
      <div className="flex flex-wrap">
        <div className="flex flex-1 mb-4 mr-4 px-4 rounded bg-blueGray-50">
          <svg
            className="h-6 w-6 my-auto mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          <input
            className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
            type="email"
            placeholder="Type your e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        {/* <div className="flex flex-1 mb-4 lg:mr-4 px-4 rounded bg-blueGray-50">
                  <svg
                    className="h-6 w-6 my-auto mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <input
                    className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                    type="email"
                    placeholder="Password"
                  />
                </div> */}
        <div className="w-full lg:w-auto">
          <button
            className="block w-full py-4 px-6 mb-2 lg:w-auto text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
            type="submit"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="pb-8 bg-top bg-cover bg-no-repeat relative -mt-24 pt-24"
      style={{
        backgroundImage:
          "url('assets/imgs/backgrounds/intersect.svg')",
      }}
    >
      <div className="hidden md:block absolute top-0 left-0 mt-32">
        <img
          className="h-64 lg:h-80 jump"
          src="/assets/imgs/illustrations/at_the_park.svg"
          alt="Prototype.NEXT Software Consulting Platform"
        />
      </div>
      <div className="hidden md:block absolute top-0 right-0 mt-32">
        <img
          className="h-64 lg:h-80 jump"
          src="/assets/imgs/illustrations/delivered.svg"
          alt="Prototype.NEXT Software Consulting Platform"
        />
      </div>
      <div className="container">
        <div className="mt-12 mb-12">
          <div className="max-w-lg mx-auto mb-8 text-center">
            <span className="inline-block px-3 py-2 text-xs font-semibold bg-blue-200 text-blue-500 rounded-full uppercase">
              Prototype.NEXT
            </span>
            <h2 className="text-3xl md:text-5xl mt-4 mb-4 font-bold font-heading">
              <span>Educate </span>
              <span className="text-blue-600">Yourself </span>
              <span>on the role or field first</span>
            </h2>
            <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
              We are{" "}
              <strong className="text-blue-500">
                connecting you
              </strong>{" "}
              with professionals!{" "}
              <span
                className="typewrite d-inline text-brand"
                data-period="3000"
                data-type='["Connect With Your Customers", "Educate Your Customers" ]'
              >
                <TextEffect
                  text1="Ask Question"
                  text2="Find Solution"
                />
              </span>
            </p>
          </div>
          {state === "Success" ? (
            <p className="lg:text-4xl text-blueGray-800">
              Awesome, you have been subscribed to Prototype.NEXT
            </p>
          ) : (
            subscribeForm
          )}
        </div>
        {/* Brand Components */}
      </div>
    </section>
  );
};
