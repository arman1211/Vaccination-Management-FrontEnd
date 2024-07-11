import { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

export class Main extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
