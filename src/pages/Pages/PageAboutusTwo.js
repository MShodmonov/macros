import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import CountUp from "react-countup";
import classnames from "classnames";



//Import Images
import logolight from "../../assets/images/logo-marcos-4.png";
import logodark from "../../assets/images/logo-marcos-20.png";
import aboutus from "../../assets/images/company/aboutus.jpg";
import about2 from "../../assets/images/company/about2.png";
import amazon from "../../assets/images/work/kimyo ins.png";
import google from "../../assets/images/work/artel.png";
import lenovo from "../../assets/images/company/allsport.jpg";
import paypal from "../../assets/images/work/respub.png";
import shopify from "../../assets/images/work/mobi tech.png";
import spotify from "../../assets/images/client/spotify.svg";

import work1 from "../../assets/images/work/1.png";
import work2 from "../../assets/images/work/2.png";
import work3 from "../../assets/images/work/3.png";
import work4 from "../../assets/images/work/4.png";

import SectionTitle from "../../components/Shared/SectionTitle";
import TeamBox from "../../components/Shared/TeamBox";
import team1 from "../../assets/images/client/shahobbek1.png";
import team4 from "../../assets/images/client/Farrux_manager.jpg";
import team2 from "../../assets/images/client/02.jpg";
import team3 from "../../assets/images/client/03.jpg";
import PageHistory from "../PageHistory";
import ContactHeader from "../../components/Shared/ContactHeader";
import Contact from "../../components/Shared/Contact";

export default class PageAboutusTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      partners: [
        {
          id: 1,
          img: amazon,
        },
        {
          id: 2,
          img: google,
        },
        {
          id: 3,
          img: lenovo,
        },
        {
          id: 4,
          img: paypal,
        },
        {
          id: 5,
          img: shopify,
        },
        {
          id: 6,
          img: spotify,
        },
      ],
      candidates: [
        {
          id: 1,
          image: team1,
          name: "Juraev Shahobbek",
          designation: "C.F.O",
          link: "",
          socialIds: [
            { icon: "facebook", link: "#" },
            { icon: "instagram", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "linkedin", link: "#" },
          ],
        },
        {
          id: 2,
          image: team4,
          name: "Boltaev Farrux",
          designation: "C.E.O",
          link: "",
          socialIds: [
            { icon: "facebook", link: "#" },
            { icon: "instagram", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "linkedin", link: "#" },
          ],
        },
        {
          id: 3,
          image: team2,
          name: "Aliana Rosy",
          designation: "Manager",
          link: "",
          socialIds: [
            { icon: "facebook", link: "#" },
            { icon: "instagram", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "linkedin", link: "#" },
          ],
        },
        {
          id: 4,
          image: team3,
          name: "Sofia Razaq",
          designation: "Developer",
          link: "",
          socialIds: [
            { icon: "facebook", link: "#" },
            { icon: "instagram", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "linkedin", link: "#" },
          ],
        },
        {
          id: 5,
          image: team1,
          name: "Juraev Shahobbek",
          designation: "C.F.O",
          link: "",
          socialIds: [
            { icon: "facebook", link: "#" },
            { icon: "instagram", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "linkedin", link: "#" },
          ],
        },
        {
          id: 6,
          image: team1,
          name: "Juraev Shahobbek",
          designation: "C.F.O",
          link: "",
          socialIds: [
            { icon: "facebook", link: "#" },
            { icon: "instagram", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "linkedin", link: "#" },
          ],
        },
        {
          id: 7,
          image: team1,
          name: "Juraev Shahobbek",
          designation: "C.F.O",
          link: "",
          socialIds: [
            { icon: "facebook", link: "#" },
            { icon: "instagram", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "linkedin", link: "#" },
          ],
        },
        {
          id: 8,
          image: team1,
          name: "Juraev Shahobbek",
          designation: "C.F.O",
          link: "",
          socialIds: [
            { icon: "facebook", link: "#" },
            { icon: "instagram", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "linkedin", link: "#" },
          ],
        },
      ],
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
  }

  componentDidMount() {
    document.body.classList = "";
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
        <section
          className="bg-half d-table w-100"
          style={{ background: `url(${aboutus})` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center">
                <div className="page-next-level title-heading">
                  <h1 className="text-white title-dark"> О нас </h1>
                  <p className="text-white-50 para-desc mb-0 mx-auto">
                    Информация о нашей компании и её философии.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section className="section">
          <Container>
            <Row className="align-items-center" id="counter">
              <Col md={6}>
                <img src={about2} className="img-fluid" alt="" />
              </Col>

              <Col md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="ml-lg-4">
                  <div className="d-flex mb-4">
                    <span className="text-primary h1 mb-0">
                      <span className="counter-value display-1 font-weight-bold">
                        <CountUp start={0} end={5} duration={8} />
                      </span>
                      +
                    </span>
                    <span className="h6 align-self-end ml-2">
                      Лет  <br /> опыта
                    </span>
                  </div>
                  <div className="section-title">
                    <h4 className="title mb-4">Кто мы ?</h4>
                    <p className="text-muted">
                      Занимаемся разработкой программных продуктов с 2017 года, на данный момент под управлением Marcos Soft находится 27 проектов самых разных уровней сложности. Если у Вас есть техническое задание, будем рады с ним ознакомиться и сообщить Вам оценку Вашего проекта. ТЗ можно направить вот сюда
                      <span className="text-primary font-weight-bold">
                        {" "}shaxibjam@gmail.com
                      </span>
                    </p>
                    <Link to="#" className="btn btn-primary mt-3">
                      Связаться с нами
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="mt-4">
            <Row className="justify-content-center">
              {this.state.partners.map((image, key) => (
                <Col
                  lg={2}
                  md={2}
                  xs={6}
                  className="text-center pt-4"
                  key={key}
                >
                  <img src={image.img} className="avatar avatar-ex-sm" alt="" />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <PageHistory />
        <section className="section bg-light">

          <Container className="mt-30 mt-60">
            <Row className="align-items-end mb-4 pb-4">
              <Col md={8}>
                <div className="section-title text-center text-md-left">
                  <h4 className="title mb-4">Наша компетенция</h4>
                  <p className="text-muted mb-0 para-desc">
                    Кроме разработки приложений, сайтов и ботов, мы предлагаем услуги по подключению платёжных систем, аудит ваших серверов, доработка существующих приложений и др.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={4} className="mt-4 pt-2">
                <ul className="nav nav-pills nav-justified flex-column bg-white rounded shadow p-3 mb-0 sticky-bar">
                  <NavItem>
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "1" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("1");
                      }}
                    >
                      <div className="text-center py-1">
                        <h6 className="mb-0">Разработка приложений</h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="mt-2">
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "2" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("2");
                      }}
                    >
                      <div className="text-center py-1">
                        <h6 className="mb-0">Веб разработка</h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="mt-2">
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "3" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("3");
                      }}
                    >
                      <div className="text-center py-1">
                        <h6 className="mb-0">Телеграмм бот</h6>
                      </div>
                    </NavLink>
                  </NavItem>

                  <NavItem className="mt-2">
                    <NavLink
                      to="#"
                      className={classnames(
                        { active: this.state.activeTab === "4" },
                        "rounded"
                      )}
                      onClick={() => {
                        this.toggle("4");
                      }}
                    >
                      <div className="text-center py-1">
                        <h6 className="mb-0">Автоматизация бизнеса</h6>
                      </div>
                    </NavLink>
                  </NavItem>
                </ul>
              </Col>

              <Col md={8} xs={12} className="mt-4 pt-2">
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane
                    className="fade bg-white show p-4 rounded shadow"
                    tabId="1"
                  >
                    <img
                      src={work1}
                      className="img-fluid rounded shadow"
                      alt=""
                    />
                  </TabPane>

                  <TabPane
                    className="fade bg-white p-4 show rounded shadow"
                    tabId="2"
                  >
                    <img
                      src={work2}
                      className="img-fluid rounded shadow"
                      alt=""
                    />
                  </TabPane>

                  <TabPane
                    className="fade bg-white p-4  show rounded shadow"
                    tabId="3"
                  >
                    <img
                      src={work3}
                      className="img-fluid rounded shadow"
                      alt=""
                    />
                  </TabPane>

                  <TabPane
                    className="fade bg-white show p-4 rounded shadow"
                    tabId="4"
                  >
                    <img
                      src={work4}
                      className="img-fluid rounded shadow"
                      alt=""
                    />
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section bg-light">
          <Container>
            {/* Render Section Title */}
            <SectionTitle
                title="Наша команда"
                desc="Отличный результат может дать только команда с высоким уровнем взаимопонимания."
            />

            <Row className="justify-content-center">
              {/* teambox */}
              <TeamBox
                  candidates={this.state.candidates}
                  isTransparent={true}
              />
            </Row>
          </Container>

        </section>

        <a name="contact"></a>
        <ContactHeader />
        <section className="section pb-0">
          <Contact/>
        </section>

      </React.Fragment>
    );
  }
}
