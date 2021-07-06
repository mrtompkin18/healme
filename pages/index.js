import { useRouter } from "next/router";

import Logo from "@components/svg/SvgLogo";
import Button from "@components/button/Button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex flex-col space-y-8">
        <h1 className="flex flex-row space-x-5 text-6xl sm:text-8xl items-center">
          <Logo className="logo" />
          <p className="font-manrope">HealMe</p>
        </h1>
        <div className="flex flex-col">
          <p className="font-anakotmai-medium text-3xl">
            ระบบลงทะเบียนสำหรับผู้ติดโควิดรอรับการรักษา
          </p>
          <span className="text-xl mt-5">
            ระบบลงทะเบียนเพื่อช่วยหาเตียงสำหรับผู้ป่วยโควิดที่รอรับการรักษา
            <br />
            ระบบนี้จัดทำขึ้นเพื่อการศึกษาเท่านั้น
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <Button
            className="w-auto bg-secondary-500 hover:bg-secondary-600 font-anakotmai-medium"
            onClickButton={() => router.push("/form")}
          >
            ลงทะเบียน
          </Button>
          <Button
            className="w-auto bg-primary-500 hover:bg-primary-600 font-anakotmai-medium"
            onClickButton={() => alert("")}
          >
            ตรวจเช็คสถานะ
          </Button>
        </div>
      </div>
    </div>
  );
}
