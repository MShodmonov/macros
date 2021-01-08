// React Basic and Bootstrap
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Card,
} from "reactstrap";


class PageContactOne extends Component {
    render() {
        return (
            <React.Fragment>

                    <Container className="mb-5">
                        <Row>
                            <Col md={4}>
                                <Card className="border-0 text-center features feature-clean">
                                    <div className="icons text-primary text-center mx-auto">
                                        <i className="uil uil-phone d-block rounded h2 mb-0"></i>
                                    </div>
                                    <div className="content mt-3">
                                        <h4 className="title font-weight-bold">Телефон</h4>
                                        <p className="text-muted">
                                            Сделать телефонный звонок
                                        </p>
                                        <Link
                                            to="#"
                                            onClick={this.callNumber}
                                            className="text-primary"
                                        >
                                            ( + 998 ) 93 522 92 99
                                        </Link>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <Card className="border-0 text-center features feature-clean">
                                    <div className="icons text-primary text-center mx-auto">
                                        <i className="uil  uil-telegram-alt d-block rounded h2 mb-0"></i>
                                    </div>
                                    <div className="content mt-3">
                                        <h4 className="title font-weight-bold">Телеграм</h4>
                                        <p className="text-muted">
                                            Написать в телеграм
                                        </p>
                                        <a
                                            href="https://t.me/ThinkAhead"

                                            className="text-primary"
                                        >
                                            @ThinkAhead
                                        </a>
                                    </div>
                                </Card>
                            </Col>

                            <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <Card className="border-0 text-center features feature-clean">
                                    <div className="icons text-primary text-center mx-auto">
                                        <i className="uil uil-map-marker d-block rounded h2 mb-0"></i>
                                    </div>
                                    <div className="content mt-3">
                                        <h4 className="title font-weight-bold">Адрес</h4>
                                        <p className="text-muted">
                                            г.Ташкент, Алмазарский район, ул. Зиё 2А
                                        </p>
                                        <a href="#location" className="video-play-icon h6 text-primary">
                                            Посмотреть на карте Google
                                        </a>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
            </React.Fragment>
        );
    }
}

export default PageContactOne;
