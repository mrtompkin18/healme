import SvgAlertAnimate from "@components/svg/SvgAlertAnimate";
import SvgAnimateProvider from "@contexts/SvgAnimateContext";

import "react-datepicker/dist/react-datepicker.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container px-4 mx-auto z-10 relative">
      <SvgAnimateProvider>
        <Component {...pageProps} />
        <SvgAlertAnimate />
      </SvgAnimateProvider>
    </div>
  );
}

export default MyApp;
