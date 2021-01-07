import React, { Component } from "react";
import { Container, Row, Col, Badge, Alert } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import Feature from "../../components/Shared/Feature";

// import images
import mobile from "../../assets/images/software/mobile-hori.png";

class Features extends Component {
  state = {
    features: [
      {
        id: 1,
        icon: "uil uil-edit-alt h1 text-primary",
        title: "Веб-сайт",
        description:
          "Используйте новые способы продвижения услуг, формируйте имидж компании в онлайн-пространстве и сохраняйте лояльность постоянных клиентов, привлекая новую аудиторию.",
      },
      {
        id: 2,
        icon: "uil uil-vector-square h1 text-primary",
        title: "Мобильные приложения",
        description:
          "Мы готовы к серьезной проработке бизнес-логики и архитектуры системы, чтобы обеспечить одновременную работу тысяч мобильных клиентов.",
      },
      {
        id: 3,
        icon: "uil uil-file-search-alt h1 text-primary",
        title: "SPA приложения",
        description:
          "Выходите на новый уровень коммуникации с клиентами и улучшайте бизнес-показатели.",
      },
      {
        id: 4,
        icon: "uil uil-airplay h1 text-primary",
        title: "Телеграмм бот",
        description:
          "Бот позволяет автоматизировать рутинные процессы в компании и быстро находить нужную информацию, что также экономит множество ресурсов.",
      },
      {
        id: 5,
        icon: "uil uil-calendar-alt h1 text-primary",
        title: "Видеомонтаж",
        description:
          "Студия укомплектована такой же аппаратурой, которая используется при создании современного кино.",
      },
      {
        id: 6,
        icon: "uil uil-clock h1 text-primary",
        title: "СММ",
        description:
          "Специальная стратегия продвижения — это идеальная возможность сделать так, чтобы продукт был успешным на рынке в любой отрасли.",
      },
    ],
  };

  componentDidMount() {
    var featureboxes = document.getElementsByName("featurebox");
    for (var i = 0; i < featureboxes.length; i++) {
      featureboxes[i].classList.add("mt-5");
    }
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          {/* Render Section Title */}
          <SectionTitle
            title="Услуги"
            desc="Решения, которые мы предлагаем будут крайне эффективны и результативны для вашего бизнеса."
          />

          {/* feature box */}
          <Feature featureArray={this.state.features} isCenter={true} />

          <Row className="justify-content-center mt-5 pt-4 mb-0">
            <Col lg="10" md="12">
              <img src={mobile} className="img-fluid d-block mx-auto" alt="" />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Features;
