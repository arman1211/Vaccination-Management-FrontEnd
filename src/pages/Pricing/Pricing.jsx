import { AiOutlineCheckCircle } from "react-icons/ai";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <div>
        <h2 className="text-3xl font-bold tracki text-center mt-12 sm:text-5xl ">
          Subscription Plans
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
          Choose a plan that suits your needs and enjoy special benefits.
        </p>
      </div>
      <div className="mt-24 container space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Free Plan */}
        <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-semibold ">Basic</h3>
            <p className="mt-4 flex items-baseline ">
              <span className="text-5xl font-extrabold tracking-tight">$0</span>
              <span className="ml-1 text-xl font-semibold">/month</span>
            </p>
            <p className="mt-6 ">Basic access to vaccination information.</p>
            <ul role="list" className="mt-6 space-y-6">
              <li className="flex">
                <AiOutlineCheckCircle className="flex-shrink-0 w-6 h-6 text-pink-500" />
                <span className="ml-3 ">Access to vaccine information</span>
              </li>
              <li className="flex">
                <AiOutlineCheckCircle className="flex-shrink-0 w-6 h-6 text-pink-500" />
                <span className="ml-3 ">Newsletter updates</span>
              </li>
              <li className="flex">
                <AiOutlineCheckCircle className="flex-shrink-0 w-6 h-6 text-pink-500" />
                <span className="ml-3 ">Basic support</span>
              </li>
            </ul>
          </div>
          <a
            className="bg-pink-50 text-pink-700 hover:bg-pink-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            href="/login"
          >
            Signup for Free
          </a>
        </div>

        {/* Pro Plan */}
        <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-semibold ">Pro</h3>
            <p className="absolute top-0 py-1.5 px-4 bg-pink-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
              Most popular
            </p>
            <p className="mt-4 flex items-baseline ">
              <span className="text-5xl font-extrabold tracking-tight">
                1200
              </span>
              <span className="ml-1 text-xl font-semibold">/lifetime</span>
            </p>
            <p className="mt-6 ">
              Enjoy priority access and special support for doses.
            </p>
            <ul role="list" className="mt-6 space-y-6">
              <li className="flex">
                <AiOutlineCheckCircle className="flex-shrink-0 w-6 h-6 text-pink-500" />
                <span className="ml-3 ">Priority for vaccination doses</span>
              </li>
              <li className="flex">
                <AiOutlineCheckCircle className="flex-shrink-0 w-6 h-6 text-pink-500" />
                <span className="ml-3 ">Dedicated support</span>
              </li>
              <li className="flex">
                <AiOutlineCheckCircle className="flex-shrink-0 w-6 h-6 text-pink-500" />
                <span className="ml-3 ">Early access to new features</span>
              </li>
              <li className="flex">
                <AiOutlineCheckCircle className="flex-shrink-0 w-6 h-6 text-pink-500" />
                <span className="ml-3 ">Monthly health tips</span>
              </li>
            </ul>
          </div>
          <a
            className="bg-pink-500 text-white hover:bg-pink-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            href="/pricing/confirm"
          >
            Apply for Pro
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
