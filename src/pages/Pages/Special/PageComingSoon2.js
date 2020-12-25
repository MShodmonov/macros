import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";


//React Typist
import Typist from "react-typist";

// import images
import comingsoon from "../../../assets/images/comingsoon2.jpg";

//CountDown
import Countdown from "react-countdown-now";


// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <React.Fragment>
        <div className="count-down">
          <span className="count-number">0</span>
          <span className="count-head position-relative d-block">Дней</span>
        </div>
        <div className="count-down">
          <span className="count-number">{hours}</span>
          <span className="count-head position-relative d-block">Часы</span>
        </div>{" "}
        <div className="count-down">
          <span className="count-number">{minutes}</span>
          <span className="count-head position-relative d-block">Минуты</span>
        </div>{" "}
        <div className="count-down">
          <span className="count-number">{seconds}</span>
          <span className="count-head position-relative d-block">Секунды</span>
        </div>
      </React.Fragment>
    );
  }
};

class PageComingsoon2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.togglemodal.bind(this);
  }

  togglemodal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <section
          className="bg-home bg-animation-left dark-left d-flex align-items-center"
          style={{ backgroundImage: `url(${comingsoon})` }}
          id="home"
        >
          <Container
            className="position-relative text-md-left text-center"
            style={{ zIndex: 1 }}
          >
            <Row>
              <Col md="12">
                <h1 className="text-uppercase text-white title-dark mt-2 mb-4 coming-soon">
                  <Typist>
                    <span className="element">Мы скоро запустим...</span>
                    <Typist.Backspace count={20} delay={400} />
                    <span className="element">Мы почти готовы</span>
                    <Typist.Backspace count={17} delay={400} />
                    <span className="element">Мы всегда с вами</span>
                    <Typist.Backspace count={23} delay={500} />
                  </Typist>
                </h1>
                <p className="text-light para-dark para-desc">
                  Улучшаем сайт. Скоро запустим{" "}
                  <span className="font-weight-bold">Macros</span>. В данный момент сайт находится на техническом обслуживании.
                  Приносим извинения за временные неудобства.
                  <p>Спасибо за внимание.</p>
                </p>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <div id="countdown">
                  <Countdown
                    date={Date.now() + 1199658655000}
                    renderer={renderer}
                  />
                </div>
              </Col>
            </Row>

          </Container>
        </section>

      </React.Fragment>
    );
  }
}

export default PageComingsoon2;
