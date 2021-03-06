// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Badge,
  Card,
  CardBody,
  Media,
} from "reactstrap";
import classnames from "classnames";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import components
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";
import SectionTitle from "../../components/Shared/SectionTitle";
import Pricing from "../../components/Shared/PricingBox";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";

//Import Images
import img1 from "../../assets/images/client/01.jpg";
import img2 from "../../assets/images/client/02.jpg";
import img3 from "../../assets/images/client/03.jpg";
import img4 from "../../assets/images/client/04.jpg";
import img5 from "../../assets/images/client/05.jpg";
import img6 from "../../assets/images/client/06.jpg";

class PagePricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Marcos", link: "/index" },
        { id: 2, name: "Page", link: "#" },
        { id: 3, name: "Pricing" },
      ],
      pricings: [
        {
          id: 1,
          title: "Телеграмм бот",
          price: "от 50$",
          duration: "",
          buttonText: "Заказать сейчас",
          btnLink: "",
          features: [
            { title: "Техническая поддержка" },
            { title: "Персональный менеджер" },
            { title: "Аналитика, рекомендации по развитию" },
            { title: "Обучение персонала" },
            { title: "60 дней бесплатного хостинга" },
          ],
        },
        {
          id: 2,
          title: "Веб-сайт",
          price: "от 150$",
          duration: "",
          buttonText: "Заказать сейчас",
          btnLink: "",
          features: [
            { title: "Развитие сайта, доработки" },
            { title: "Персональный менеджер" },
            { title: "Контент поддержка" },
            { title: "Адаптивная вёрстка" },
            { title: "Техническая поддержка" },
            { title: "Домен в подарок" },
          ],
        },
        {
          id: 3,
          title: "Приложения",
          price: "от 300$",
          duration: "",
          buttonText: "Заказать сейчас",
          btnLink: "",
          features: [
            { title: "Контент поддержка" },
            { title: "Персональный менеджер" },
            { title: "Техническая поддержка" },
            { title: "Аналитика, рекомендации по развитию" },
            { title: "хостинг на два месяца" },
          ],
        },
      ],
      reviews: [
        {
          id: 1,
          img: img1,
          name: "Thomas Israel",
          post: "C.E.O",
          desc:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
          rating: 5,
        },
        {
          id: 2,
          img: img2,
          name: "Barbara McIntosh",
          post: "M.D",
          desc:
            "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
          rating: 4,
        },
        {
          id: 3,
          img: img3,
          name: "Carl Oliver",
          post: "P.A",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          rating: 3,
        },
        {
          id: 4,
          img: img4,
          name: "Christa Smith",
          post: "Manager",
          desc:
            "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
          rating: 5,
        },
        {
          id: 5,
          img: img5,
          name: "Dean Tolle",
          post: "Developer",
          desc:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
          rating: 5,
        },
        {
          id: 6,
          img: img6,
          name: "ill Webb",
          post: "Designer",
          desc:
            "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
          rating: 4,
        },
      ],
      activeTab: "1",
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
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
        <section className="section">
          <Container>

            <SectionTitle
              title="Прайс лист"
              desc="Приемлемые цены и прозрачная политика ценообразования:"
            />

            <Row className="align-items-center">
              {/* pricing */}
              {this.state.pricings.map((pricing, key) => (
                <Col md={4} xs={12} key={key} className="mt-4 pt-2 ">
                  <Card className="pricing-rates business-rate shadow bg-light rounded text-center border-0">
                    {pricing.isActive && (
                      <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                        <span className="text-center d-block shadow small h6">
                          Best
                        </span>
                      </div>
                    )}
                    <CardBody className="py-5 text-left">
                      <h6
                        className={
                          pricing.isActive
                            ? "title text-uppercase text-primary mb-4"
                            : "title text-uppercase mb-4"
                        }
                      >
                        {pricing.title}
                      </h6>
                      <div className="d-flex justify-content-center mb-4">
                        <span className="price h1 mb-0">{pricing.price}</span>
                        <span className="h4 align-self-end mb-1">
                          {pricing.duration}
                        </span>
                      </div>

                      <ul className="list-unstyled mb-0 pl-0">
                        {pricing.features.map((feature, key) => (
                          <li key={key} className="h6 text-muted mb-0">
                            <span className="text-primary h5 mr-2">
                              <i className="uil uil-check-circle align-middle"></i>
                            </span>
                            {feature.title}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={pricing.btnLink}
                        className="btn btn-primary mt-4"
                      >
                        {pricing.buttonText}
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PagePricing;
