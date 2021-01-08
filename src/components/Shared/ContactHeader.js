// React Basic and Bootstrap
import React, {Component} from "react";
import {
    Container,
    Row,
    Col,
} from "reactstrap";


class PageContactOne extends Component {

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


            </React.Fragment>
        );
    }
}

export default PageContactOne;
