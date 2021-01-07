import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Images
import logolight from "../../assets/images/marcos-logo.png";
import logodark from "../../assets/images/logo-marcos-20.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        { title: "About us", link: "/page-aboutus" },
        { title: "Services", link: "/page-services" },
        { title: "Team", link: "/page-team" },
      ],
      grid2: [
        { title: "Terms of Services", link: "/page-terms" },
        { title: "Privacy Policy", link: "/page-privacy" },
        { title: "Documentation", link: "/documentation" },
        { title: "Changelog", link: "/changelog" },
        { title: "Components", link: "/components" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className={"footer footer-border"}>
          <Container className="mt-0 mb-0">
            <Row>
              <Col
                lg="4"
                xs="12"
                className="mb-0 mb-md-4 pb-0 pb-md-2"
                name="footercolumn"
              >
                <Link to="/" className="logo-footer">
                  <img
                    src={this.props.isLight ? logodark : logolight}
                    height="30%"
                    alt=""
                  />
                </Link>
                <p className={this.props.isLight ? "mt-4 text-muted" : "mt-4"}>
                  В наших интересах рациональные решения и довольные клиенты.
                </p>
                <ul className="list-unstyled social-icon social mb-0 mt-4">
                  <li className="list-inline-item ml-1">
                    <a href="https://www.facebook.com/profile.php?id=100029144765771" className="rounded">
                      <i>
                        <FeatherIcon
                          icon="facebook"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item ml-1">
                    <a href="https://www.instagram.com/shaxobbekjurayev/" className="rounded">
                      <i>
                        <FeatherIcon
                          icon="instagram"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item ml-1">
                    <a href="https://twitter.com/shakhobbek" className="rounded">
                      <i>
                        <FeatherIcon
                          icon="twitter"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </a>
                  </li>
                  <li className="list-inline-item ml-1">
                    <a href="https://www.linkedin.com/in/shakhobbek-juraev-3412061b5/" className="rounded">
                      <i>
                        <FeatherIcon
                          icon="linkedin"
                          className="fea icon-sm fea-social"
                        />
                      </i>
                    </a>
                  </li>
                </ul>
              </Col>

              <Col
                lg="4"
                md="4"
                xs="12"
                className="mt-2 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Company
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid1.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right mr-1"></i>{" "}
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col
                lg="4"
                md="4"
                xs="12"
                className="mt-2 mt-sm-0 pt-2 pt-sm-0"
                name="footercolumn"
              >
                <h5
                  className={
                    this.props.isLight
                      ? "text-dark footer-head"
                      : "text-light footer-head"
                  }
                >
                  Usefull Links
                </h5>
                <ul className="list-unstyled footer-list mt-4">
                  {this.state.grid2.map((grid, key) => (
                    <li key={key}>
                      <Link
                        to={grid.link}
                        className={
                          this.props.isLight ? "text-muted" : "text-foot"
                        }
                      >
                        <i className="mdi mdi-chevron-right mr-1"></i>
                        {grid.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
