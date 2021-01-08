// React Basic and Bootstrap
import React, { Component } from "react";

// Import Generic components
import Section from "./Section";
import Work from "./Work";
import logodark from "../../assets/images/logo-marcos-20.png";
import ContactHeader from "../../components/Shared/ContactHeader";
import Contact from "../../components/Shared/Contact";

class Index extends Component {
  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
    document.getElementById("brandLogo").src = logodark;
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
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }

  };

  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <Section />

        {/* Work  */}
        <Work />


        <a name="contact"></a>
        <ContactHeader />
        <section className="section pb-0">
          <Contact/>
        </section>
      </React.Fragment>
    );
  }
}

export default Index;
