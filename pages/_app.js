import { Fragment } from "react";
import SvgAlertAnimate from "@components/svg/SvgAlertAnimate";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <div className="container px-4 mx-auto z-10 relative">
        <Component {...pageProps} />
        <SvgAlertAnimate className="svg-alert z-0" />
      </div>
    </Fragment>
  );
}

export default MyApp;
