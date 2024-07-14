import { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer bg-base-200 text-base-content p-10 flex justify-around xs:flex-col md:flex-row sm:flex-col">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Vaccine Campaigns</a>
            <a className="link link-hover">Appointment Scheduling</a>
            <a className="link link-hover">Patient Management</a>
            <a className="link link-hover">Healthcare Solutions</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press Kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of Use</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
          </nav>
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
                <button className="btn  bg-pink-500 join-item text-white">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    );
  }
}

export default Footer;
