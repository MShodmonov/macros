// React Basic and Bootstrap
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Alert,
    Form,
    FormGroup,
    Input,
    Label,
    Card,
    CardBody,
} from "reactstrap";

import emailjs from "emailjs-com"


//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import contact from "../../../assets/images/contact.png";

class PageContactOne extends Component {
    constructor(props) {

        super(props);
        this.state = {
            pathItems: [
                //id must required
                {id: 1, name: "Marcos", link: "/index"},
                {id: 2, name: "Page", link: "#"},
                {id: 3, name: "Contact", link: "#"},
                {id: 4, name: "Contact One"},
            ],
            Contactvisible: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMail.bind(this);
        this.callNumber.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        var form = {
            to_name: event.target.email.value,
            name: event.target.name.value,
            from_name: "Marcos Soft",
            message: "the main reason you have received the email is that recently you have filled our contact form. As soon as possible our staff will contact you. Thanks for you attention and patience"
        }

        emailjs.send("service_ucgoxm2", "template_dwnig7o",form,
            "user_pv5rluqWnKAVWKpCgo5Dc"
        ).then(respone => {
            this.setState({Contactvisible: true});
        }).catch(exception => {
            this.setState({Contactvisible: false});
        })


    }

    componentDidMount() {
        document.body.classList = "";
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
        } else {
            document.getElementById("topnav").classList.remove("nav-sticky");
        }
    };

    sendMail() {
        window.location.href = "mailto:contact@example.com";
    }

    callNumber() {
        window.location.href = "tel:+152534-468-854";
    }

    render() {
        return (
            <React.Fragment>

                {/* breadcrumb */}
                <section className="bg-info bg-light d-table w-100 mb-0 mt-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="12" className="text-center">
                                <div className="page-next-level">
                                    <h4 className="title">Свяжитесь с нами</h4>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section pb-0">
                    <Container className="mb-5">
                        <Row>
                            <Col md={4}>
                                <Card className="border-0 text-center features feature-clean">
                                    <div className="icons text-primary text-center mx-auto">
                                        <i className="uil uil-phone d-block rounded h3 mb-0"></i>
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
                                        <i className="uil uil-envelope d-block rounded h3 mb-0"></i>
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
                                        <i className="uil uil-map-marker d-block rounded h3 mb-0"></i>
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
                    <a name="contact"></a>
                    <Container className="mt-60 mb-0">
                        <Row className="align-items-center">
                            <Col
                                lg={5}
                                md={6}
                                className="mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1"
                            >
                                <Card className="shadow rounded border-0">
                                    <CardBody className="py-5">
                                        <h4 className="card-title">Связаться !</h4>
                                        <div className="custom-form mt-4">
                                            <div id="message"></div>
                                            <Alert
                                                color="primary"
                                                isOpen={this.state.Contactvisible}
                                                toggle={() => {
                                                    this.setState({
                                                        Contactvisible: !this.state.Contactvisible,
                                                    });
                                                }}
                                            >
                                                Контактные данные отправлены успешно.
                                            </Alert>
                                            <Form
                                                method="post"
                                                onSubmit={this.handleSubmit}
                                                name="contact-form"
                                                id="contact-form"
                                            >
                                                <Row>
                                                    <Col md={6}>
                                                        <FormGroup>
                                                            <Label>
                                                                Имя <span className="text-danger">*</span>
                                                            </Label>
                                                            <div className="position-relative">
                                                                <i>
                                                                    <FeatherIcon
                                                                        icon="user"
                                                                        className="fea icon-sm icons"
                                                                    />
                                                                </i>
                                                            </div>
                                                            <Input
                                                                name="name"
                                                                id="name"
                                                                type="text"
                                                                className="form-control pl-5"
                                                                placeholder="Имя :"
                                                                required
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={6}>
                                                        <FormGroup className="position-relative">
                                                            <Label>
                                                                эмаил{" "}
                                                                <span className="text-danger">*</span>
                                                            </Label>
                                                            <div className="position-relative">
                                                                <i>
                                                                    <FeatherIcon
                                                                        icon="mail"
                                                                        className="fea icon-sm icons"
                                                                    />
                                                                </i>
                                                            </div>
                                                            <Input
                                                                name="email"
                                                                id="email"
                                                                type="email"
                                                                className="form-control pl-5"
                                                                placeholder="Email :"
                                                                required
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={12}>
                                                        <FormGroup className="position-relative">
                                                            <Label>Тема</Label>
                                                            <div className="position-relative">
                                                                <i>
                                                                    <FeatherIcon
                                                                        icon="book"
                                                                        className="fea icon-sm icons"
                                                                    />
                                                                </i>
                                                            </div>
                                                            <Input
                                                                name="subject"
                                                                id="subject"
                                                                className="form-control pl-5"
                                                                placeholder="Тема :"
                                                                required
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={12}>
                                                        <FormGroup className="position-relative">
                                                            <Label>Cообщение</Label>
                                                            <div className="position-relative">
                                                                <i>
                                                                    <FeatherIcon
                                                                        icon="message-circle"
                                                                        className="fea icon-sm icons"
                                                                    />
                                                                </i>
                                                            </div>
                                                            <textarea
                                                                name="comments"
                                                                id="comments"
                                                                rows="4"
                                                                className="form-control pl-5"
                                                                placeholder="сообщение :"
                                                            ></textarea>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={12} className="text-center">
                                                        <Input
                                                            type="submit"
                                                            id="submit"
                                                            name="send"
                                                            className="submitBnt btn btn-primary btn-block"
                                                            value="Отправить сообщение"
                                                        />
                                                        <div id="simple-msg"></div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={7} md={{size: 6, order: 2}} xs={{order: 1}}>
                                <Card className="border-0">
                                    <CardBody className="p-0">
                                        <img src={contact} className="img-fluid" alt="Landrick"/>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    <a name="location"></a>

                        <Row className="p-0 m-0">
                            <Col xs={12} >
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

                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default PageContactOne;
