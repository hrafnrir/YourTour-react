import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import data from "./storage/dataStore.js";
import "./App.module.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App data={data} />);
