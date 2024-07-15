import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer bg-base-200 text-base-content p-10 flex flex-wrap justify-around">
          <div className="w-full sm:w-1/2 md:w-auto lg:w-1/3 xl:w-1/4">
            <nav className="mb-8 sm:mb-0">
              <h6 className="footer-title">Services</h6>
              <a href="#" className="link link-hover block mb-2">
                Vaccine Campaigns
              </a>
              <a href="#" className="link link-hover block mb-2">
                Appointment Scheduling
              </a>
              <a href="#" className="link link-hover block mb-2">
                Patient Management
              </a>
              <a href="#" className="link link-hover block mb-2">
                Healthcare Solutions
              </a>
            </nav>
          </div>
          <div className="w-full sm:w-1/2 md:w-auto lg:w-1/3 xl:w-1/4">
            <nav className="mb-8 sm:mb-0">
              <h6 className="footer-title">Company</h6>
              <a href="#" className="link link-hover block mb-2">
                About Us
              </a>
              <a href="#" className="link link-hover block mb-2">
                Contact
              </a>
              <a href="#" className="link link-hover block mb-2">
                Careers
              </a>
              <a href="#" className="link link-hover block mb-2">
                Press Kit
              </a>
            </nav>
          </div>
          <div className="w-full sm:w-1/2 md:w-auto lg:w-1/3 xl:w-1/4">
            <nav className="mb-8 sm:mb-0">
              <h6 className="footer-title">Legal</h6>
              <a href="#" className="link link-hover block mb-2">
                Terms of Use
              </a>
              <a href="#" className="link link-hover block mb-2">
                Privacy Policy
              </a>
              <a href="#" className="link link-hover block mb-2">
                Cookie Policy
              </a>
            </nav>
          </div>
          <div className="w-full sm:w-1/2 md:w-auto lg:w-1/3 xl:w-1/5">
            <form>
              <h6 className="footer-title">Newsletter</h6>
              <fieldset className="form-control w-full">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label>
                <div className="join flex items-center">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item"
                  />
                  <button className="btn bg-pink-500 join-item text-white">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>

          <p className="text-sm text-gray-700 text-center">
            <small>@copywrite VacciSure, all rights reserved</small>
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
