import { NextSeo } from "next-seo";
import SvgAlertAnimate from "@components/svg/SvgAlertAnimate";
import SvgAnimateProvider from "@contexts/SvgAnimateContext";

import "react-datepicker/dist/react-datepicker.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container px-4 mx-auto z-10 relative">
      <NextSeo
        title="Healme | แบบฟอร์มการลงทะเบียนผู้ป่วยโควิด"
        description="ใช้เพื่อสำหรับการศึกษาการเขียนโปรแกรมเท่านั้น"
      />
      <SvgAnimateProvider>
        <Component {...pageProps} />
        <SvgAlertAnimate />
      </SvgAnimateProvider>
    </div>
  );
}

export default MyApp;
