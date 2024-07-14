import { Component } from "react";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import Features from "../Features/Features";
import ReviewsSlide from "../Reviews/ReviewsSlide";
import Faq from "../FAQ/Faq";

export class Home extends Component {
  render() {
    return (
      <div>
        <HeroSection></HeroSection>

        <Services></Services>

        <Features></Features>
        <ReviewsSlide></ReviewsSlide>
        <Faq></Faq>
      </div>
    );
  }
}

export default Home;
