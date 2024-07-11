import { Component } from "react";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import Features from "../Features/Features";

export class Home extends Component {
  render() {
    return (
      <div>
        <HeroSection></HeroSection>

        {/* service section  */}

        <Services></Services>

        {/* feature section  */}

        <Features></Features>
      </div>
    );
  }
}

export default Home;
