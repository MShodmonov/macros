import React from "react";

const Software = React.lazy(() => import("./pages/Software/index"));

const Portfolio = React.lazy(() => import("./pages/Portfolio/index"));

const PageAboutusTwo = React.lazy(() => import("./pages/Pages/PageAboutusTwo"));

const PageError = React.lazy(() => import("./pages/Pages/Special/PageError"))


const routes = [
  // routes without Layout

  { path: "/index-software", component: Software },
  { path: "/index-portfolio", component: Portfolio },

  { path: "/page-aboutus-two", component: PageAboutusTwo },









  { path: "/index", component: Software },



  { path: "/", component: Software},


  // { path: "/", component: ComingSoon},
  { component: PageError, isWithoutLayout: true, exact: false },
];

export default routes;
