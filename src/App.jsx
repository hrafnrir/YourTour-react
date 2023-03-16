import { Fragment } from "react";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import CallToAction from "./components/CallToAction/CallToAction.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = ({ data: { header, mainContent, callToAction, footer } }) => {
  return (
    <Fragment>
      <Header data={header} />
      <MainContent data={mainContent} />
      <CallToAction data={callToAction} />
      <Footer data={footer} />
    </Fragment>
  );
};

export default App;
