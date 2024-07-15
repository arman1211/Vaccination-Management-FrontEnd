import { Component } from "react";
import img from "../../../assets/vaccine-hero.png";

export class HeroSection extends Component {
  render() {
    return (
      <>
        <div className="relative overflow-hidden min-h-64 my-12">
          <div className="  flex relative items-center overflow-hidden">
            <div className="container mx-auto px-6 flex relative py-16">
              <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-pink-500  mb-12"></span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-6xl font-black flex flex-col leading-none  text-gray-800">
                  Streamlined Vaccination
                  <span className="text-5xl sm:text-3xl my-3 text-pink-500">
                    Scheduling and Tracking
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-gray-700 ">
                  Our system provides a seamless experience for scheduling,
                  tracking, and managing vaccinations. Ensure timely and
                  accurate immunizations with our intuitive and user-friendly
                  platform designed for healthcare providers and recipients
                  alike.
                </p>
                <div className="flex mt-8">
                  <a
                    href="/vaccine-campaign"
                    className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                  >
                    Take Vaccine
                  </a>
                  <a
                    href="/about-us"
                    className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500  hover:bg-pink-500 hover:text-white text-md"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src={img} className="max-w-xs md:max-w-sm m-auto" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HeroSection;
