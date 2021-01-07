import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import blog1 from "../assets/images/blog/1 support.jpg";
import blog2 from "../assets/images/blog/2 support.jpg";
import blog3 from "../assets/images/blog/3 support.jpg";
import blog4 from "../assets/images/blog/4 support call.jpg";

export default class PageHistory extends Component {


  render() {
    return (
      <React.Fragment>

            <Row className="justify-content-center">
              <Col lg={9}>
                <div className="main-icon rounded-pill text-primary text-center mt-4 pt-2">
                  <i>
                    <FeatherIcon icon="star" className="fea icon-md-sm" />
                  </i>
                </div>
                <div className="timeline-page pt-2 position-relative">
                  <div className="timeline-item mt-4">
                    <Row>
                      <Col lg={6} md={6} sm={6}>
                        <div className="duration date-label-left border rounded p-2 px-4 position-relative shadow">
                          Соблюдение всех сроков сдачи
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={6}>
                        <Card className="event event-description-right rounded shadow border-0 overflow-hidden float-left">
                          <img src={blog1} className="img-fluid" alt="" />
                          <CardBody>
                            <p className="mt-3 mb-0 text-muted">
                              Запускаем проекты строго по графику. Наша методика разработки программных продуктов позволяет масштабировать беклог в любом диапазоне.
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>

                  <div className="timeline-item mt-4">
                    <Row>
                      <Col lg={6} md={6} sm={6} className="order-sm-1 order-2">
                        <Card className="event event-description-left rounded shadow border-0 overflow-hidden float-left">
                          <img src={blog2} className="img-fluid" alt="" />
                          <CardBody>
                            <p className="mt-3 mb-0 text-muted">
                              Мы гарантируем пожизненную поддержку Вашего проекта.
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg={6} md={6} sm={6} className="order-sm-2 order-1">
                        <div className="duration duration-right rounded border p-2 px-4 position-relative shadow text-left">
                          Мы никогда не откажемся от проекта
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="timeline-item mt-4">
                    <Row>
                      <Col lg={6} md={6} sm={6}>
                        <div className="duration date-label-left border rounded p-2 px-4 position-relative shadow">
                          Сотрудничество
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={6}>
                        <Card className="event event-description-right rounded shadow border-0 overflow-hidden float-left">
                          <img src={blog3} className="img-fluid" alt="" />
                          <CardBody>
                            <p className="mt-3 mb-0 text-muted">
                              Мы заинтересованы в долгосрочном сотрудничестве, поэтому не просто делаем работу, а помогаем нашему клиенту заработать!
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>

                  <div className="timeline-item mt-4">
                    <Row>
                      <Col lg={6} md={6} sm={6} className="order-sm-1 order-2">
                        <Card className="event event-description-left rounded shadow border-0 overflow-hidden float-left">
                          <img src={blog4} className="img-fluid" alt="" />
                          <CardBody>
                            <p className="mt-3 mb-0 text-muted">
                              Приемлемые цены и прозрачная политика ценообразования:
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg={6} md={6} sm={6} className="order-sm-2 order-1">
                        <div className="duration duration-right rounded border p-2 px-4 position-relative shadow text-left">
                          Прайс
                        </div>
                      </Col>
                    </Row>
                  </div>

                </div>
              </Col>
            </Row>
      </React.Fragment>
    );
  }
}
