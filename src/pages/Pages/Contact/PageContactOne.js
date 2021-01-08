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
import Contact from "../../../components/Shared/Contact";
import ContactHeader from "../../../components/Shared/ContactHeader";

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

        emailjs.send("service_ucgoxm2", "template_dwnig7o", form,
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
        window.location.href = "tel:+998 93 000 00 00";
    }

    render() {
        return (
            <React.Fragment>

                <ContactHeader/>

                <a name="contact"></a>
                <section className="section pb-0">
                    <Contact/>
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



                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default PageContactOne;
