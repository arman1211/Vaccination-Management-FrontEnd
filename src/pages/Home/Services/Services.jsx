import { Component } from "react";
import img1 from "../../../assets/service1.jpg";
import img2 from "../../../assets/service2.png";

export class Services extends Component {
  render() {
    return (
      <div>
        <h2 className="stylish-regular text-5xl  text-pink-500 text-center font-bold">
          Our Services...
        </h2>
        <div className="w-full mx-auto p-10 mt-5 bg-gray-50">
          <div className="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-pink-500">
            Services
          </div>

          <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col lg:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
            <div className="lg:w-[50%] xs:w-full">
              <img
                className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                src={img1}
                alt="billboard image"
              />
            </div>
            <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 md:p-4 xs:p-4 rounded-md">
              <h2 className="text-3xl font-semibold text-pink-900">
                Comprehensive Vaccination Management
              </h2>
              <p className="text-md mt-4">
                Ensure your community stays healthy with our state-of-the-art
                vaccination management system. Our platform streamlines the
                process of tracking, scheduling, and managing vaccination
                campaigns to ensure everyone gets the protection they need, on
                time and efficiently.
              </p>
            </div>
          </div>

          <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col lg:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
            <div className="lg:hidden md:hidden sm:block xs:block xs:w-full">
              <img
                className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                src={img2}
                alt="billboard image"
              />
            </div>

            <div className="lg:w-[50%] xs:w-full bg-gray-100 md:p-4 xs:p-4 rounded-md">
              <h2 className="text-3xl font-semibold text-pink-900">
                Automated Appointment Scheduling
              </h2>

              <p className="text-md mt-4">
                Simplify the appointment scheduling process with our automated
                system. Patients can easily book their vaccination appointments
                online, receive reminders, and reschedule if necessary. Our
                system helps minimize no-shows and ensures a smooth vaccination
                process.
              </p>
            </div>

            <div className="hidden lg:block md:block lg:w-[50%] xs:w-full">
              <img
                className="lg:rounded-t-lg xs:rounded-sm"
                src={img2}
                alt="billboard image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
