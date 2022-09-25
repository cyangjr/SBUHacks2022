import "../../styles/globals.css";
import Sidenav from "../../components/global/Sidenav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function MyApp() {
  return (
    <div className="App">
      <Sidenav />
    </div>
  );
}
export default MyApp;
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;
