import React, {Component, Suspense} from "react";
import {withRouter} from "react-router-dom";

// Scroll up button
import ScrollUpButton from "react-scroll-up-button";

//Import Switcher
import ThemeSwitcher from "./ThemeSwitcher";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Layout Components
const Topbar = React.lazy(() => import("./Topbar"));
const NavbarPage = React.lazy(() =>
    import("../../pages/Saas Onepage/NavbarPage")
);
const Footer = React.lazy(() => import("./Footer"));
const FooterWithoutMenuLightSocialOnly = React.lazy(() =>
    import("./FooterWithoutMenuLightSocialOnly")
);

const CustomDot = () => {
    return (
        <i>
            <FeatherIcon icon="arrow-up" className="icons"/>
        </i>
    );
};

class Layout extends Component {
    Loader = () => {
        return (
            <div id="preloader">
                <div id="status">
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <React.Fragment>
                <Suspense fallback={this.Loader()}>
                    <Topbar/>
                    {this.props.children}
                    <Footer/>;

                    <ScrollUpButton
                        ContainerClassName="classForContainer"
                        style={{height: 36, width: 36}}
                        TransitionClassName="classForTransition"
                    >
                        <CustomDot/>
                    </ScrollUpButton>
                    {/* </div> */}

                    {/* theme switcher */}
                    {/*<ThemeSwitcher/>*/}
                </Suspense>
            </React.Fragment>
        );
    }
}

export default withRouter(Layout);
