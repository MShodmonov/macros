import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Col, Card, CardBody, Row} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

class TeamBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: 4,
            step1: true,
            step2: false,
        };
        this.updateWindowSize.bind(this);
    }

    updateWindowSize = () => {
        if (window.outerWidth >= 1230) {
            this.setState({itemCount: 3, cols: 4});
        } else if (window.outerWidth >= 970 && window.outerWidth < 1230) {
            this.setState({itemCount: 2, cols: 6});
        } else if (window.outerWidth <= 970) {
            this.setState({itemCount: 1, cols: 12});
        }
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateWindowSize);
        this.updateWindowSize();
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowSize);
    }

    render() {
        return (
            <React.Fragment>
                <Col lg="12" className={this.props.colClass}>
                    <div
                        id="customer-testi"
                        className="owl-carousel owl-theme owl-loaded owl-drag"
                    >
                        <div className="owl-stage-outer">
                            <div className="owl-stage">
                                <Row>
                                    {this.state.step1 === true
                                        ? this.props.candidates.map((candidate, key) =>
                                            key >= 0 && key <= 3 ? (
                                                <Col lg="3" md="6" key={key} className="mt-4 pt-2">
                                                    <Card
                                                        className={
                                                            this.props.isTransparent === true
                                                                ? "team text-center bg-transparent border-0"
                                                                : "team text-center rounded border-0"
                                                        }
                                                        name="team"
                                                        id="teambox"
                                                    >
                                                        <CardBody
                                                            className={this.props.isTransparent === true ? "p-0" : ""}
                                                        >
                                                            <div className="position-relative">
                                                                <img
                                                                    src={candidate.image}
                                                                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                                                                    alt=""
                                                                />
                                                                <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                                                    {candidate.socialIds.map((id, key) => (
                                                                        <li key={key} className="list-inline-item mr-1">
                                                                            <Link to={id.link} className="rounded">
                                                                                <i>
                                                                                    <FeatherIcon
                                                                                        icon={id.icon}
                                                                                        className="fea icon-sm fea-social"
                                                                                    />
                                                                                </i>
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div
                                                                className={
                                                                    this.props.isTransparent === true
                                                                        ? "content pt-3 pb-3"
                                                                        : "content pt-3"
                                                                }
                                                            >
                                                                <h5 className="mb-0">
                                                                    <Link to={candidate.link}
                                                                          className="name text-dark">
                                                                        {candidate.name}
                                                                    </Link>
                                                                </h5>
                                                                <small className="designation text-muted">
                                                                    {candidate.designation}
                                                                </small>
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            ) : null
                                        )
                                        : this.props.candidates.map((candidate, key) =>
                                            key >= 4 && key <= 7 ? (
                                                <Col lg="3" md="6" key={key} className="mt-4 pt-2">
                                                    <Card
                                                        className={
                                                            this.props.isTransparent === true
                                                                ? "team text-center bg-transparent border-0"
                                                                : "team text-center rounded border-0"
                                                        }
                                                        name="team"
                                                        id="teambox"
                                                    >
                                                        <CardBody
                                                            className={this.props.isTransparent === true ? "p-0" : ""}
                                                        >
                                                            <div className="position-relative">
                                                                <img
                                                                    src={candidate.image}
                                                                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                                                                    alt=""
                                                                />
                                                                <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                                                    {candidate.socialIds.map((id, key) => (
                                                                        <li key={key} className="list-inline-item mr-1">
                                                                            <Link to={id.link} className="rounded">
                                                                                <i>
                                                                                    <FeatherIcon
                                                                                        icon={id.icon}
                                                                                        className="fea icon-sm fea-social"
                                                                                    />
                                                                                </i>
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div
                                                                className={
                                                                    this.props.isTransparent === true
                                                                        ? "content pt-3 pb-3"
                                                                        : "content pt-3"
                                                                }
                                                            >
                                                                <h5 className="mb-0">
                                                                    <Link to={candidate.link}
                                                                          className="name text-dark">
                                                                        {candidate.name}
                                                                    </Link>
                                                                </h5>
                                                                <small className="designation text-muted">
                                                                    {candidate.designation}
                                                                </small>
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            ) : null
                                        )
                                    }
                                </Row>
                            </div>
                        </div>
                        <div className="custom-owl-dots custom-dots">
                            <button
                                type="button"
                                onClick={() => {
                                    this.setState({step1: true, step2: false});
                                }}
                                className={
                                    this.state.step1 ? "indicator-active" : "indicator-inactive"
                                }
                            ></button>
                            <button
                                type="button"
                                onClick={() => {
                                    this.setState({step1: false, step2: true});
                                }}
                                className={
                                    this.state.step2 ? "indicator-active" : "indicator-inactive"
                                }
                            ></button>
                        </div>
                    </div>
                </Col>
            </React.Fragment>
        );
    }
}

export default TeamBox;
