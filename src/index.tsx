require('file-loader?name=[name].[ext]!./index.html');
import ReactDOM from "react-dom";
import "./index.css";
import MainPage from "./MainPage";

ReactDOM.render(<MainPage  />, document.getElementById("root"));


