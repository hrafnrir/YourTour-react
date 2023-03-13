import { Fragment } from "react";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import CallToAction from "./components/CallToAction/CallToAction.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = (props) => {
  return (
    <Fragment>
      <Header data={props.data.header} />
      <MainContent data={props.data.mainContent} />
      <CallToAction data={props.data.callToAction} />
      <Footer data={props.data.footer} />
    </Fragment>
  );
};

export default App;
