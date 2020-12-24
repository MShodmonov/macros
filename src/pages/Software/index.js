import React, { Component } from "react";
import Section from "./Section";
import Features from "./Featuress";

import Reviews from "./Reviews";
import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";
import PageContactOne from "../Pages/Contact/PageContactOne";
import PagePricing from "../Pages/PagePricing";

class Software extends Component {
  componentDidMount() {

    document.getElementById("top-menu").classList.add("nav-light");
    document.getElementById("buyButton").className = "btn btn-light";
    document.getElementById("brandLogo").src = logolight;
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-primary";
      document.getElementById("brandLogo").src = logodark;
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-light";
      document.getElementById("brandLogo").src = logolight;
    }
  };
  render() {
    return (
      <React.Fragment>
        {/* render section */}
        <Section />
        <section className="section pt-md-0 pt-5 mb-00">
          {/* Features */}
          <Features />

          {/* pricing */}
          <PagePricing />

          {/* Reviews */}
          <Reviews />


          <PageContactOne />

        </section>


      </React.Fragment>
    );
  }
}

export default Software;
