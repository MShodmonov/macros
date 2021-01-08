import React, {Component} from "react";
import Section from "./Section";
import Features from "./Featuress";

import Reviews from "./Reviews";
import logolight from "../../assets/images/logo-marcos-4.png";
import logodark from "../../assets/images/logo-marcos-20.png";
import PageContactOne from "../Pages/Contact/PageContactOne";
import PagePricing from "../Pages/PagePricing";
import {Card, CardBody, Col, Container, Row} from "reactstrap";

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
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            document.getElementById("brandLogo").src = logodark;
            if (top > 80) {
                document.getElementById("topnav").classList.add("nav-sticky");
                document.getElementById("buyButton").className = "btn btn-primary";
            } else {
                document.getElementById("topnav").classList.remove("nav-sticky");
                document.getElementById("buyButton").className = "btn btn-light";
            }
        } else {
            if (top > 80) {
                document.getElementById("topnav").classList.add("nav-sticky");
                document.getElementById("buyButton").className = "btn btn-primary";
                document.getElementById("brandLogo").src = logodark;
            } else {
                document.getElementById("topnav").classList.remove("nav-sticky");
                document.getElementById("buyButton").className = "btn btn-light";
                document.getElementById("brandLogo").src = logolight;
            }
        }
    };

    render() {
        return (
            <React.Fragment>
                {/* render section */}
                <Section/>
                <section className="section pt-md-0 pt-0 mb-00">
                    {/* Features */}
                    <Features/>

                    {/* pricing */}
                    <PagePricing/>

                    {/* Reviews */}
                    <Reviews/>

                    <a name="contact"></a>
                    <PageContactOne/>


                </section>
                <a name="location"></a>

                <Row>
                    <Col xs={12}>
                        <Card className="map border-0 m-0">
                            <CardBody className="p-0">
                                <iframe
                                    title="myFrame"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10722.427359854908!2d69.20805843771048!3d41.352192590779346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8df0e71c5abd%3A0xef96e670416cd3b6!2sRespublika%20ta&#39;lim%20markazi!5e0!3m2!1sen!2s!4v1608710633481!5m2!1sen!2s"
                                    style={{border: "0"}}
                                    className="rounded"
                                    allowFullScreen
                                ></iframe>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </React.Fragment>
        );
    }
}

export default Software;
