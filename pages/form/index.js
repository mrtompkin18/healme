import React, { useState } from "react";
import _ from "lodash";
import { useForm } from "react-hook-form";
import { FiUpload } from "react-icons/fi";

import Logo from "@components/svg/SvgLogo";
import Title from "@components/form/Title";
import PureInputField from "@components/form/PureInputField";
import Button from "@components/button/Button";
import AddressModal from "@components/form/AddressModal";
import DatePicker from "@components/form/DatePicker";

const Form = () => {
  const [isOpenAddressModel, setIsOpenAddressModel] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const validators = {
    firstName: {
      validator: register("firstName", {
        required: "จำเป็นต้องกรอก",
        maxLength: {
          value: 5,
          message: "กรอกตัวอักษรได้ไม่เกิน 5 ตัว",
        },
      }),
      errors: errors["firstName"],
    },
    lastName: {
      validator: register("lastName", {
        required: "จำเป็นต้องกรอก",
      }),
      errors: errors["lastName"],
    },
    idcardNo: {
      validator: register("idcardNo", {
        required: "จำเป็นต้องกรอก",
        pattern: {
          value: /^[0-9]{13}$/,
          message: "เลขบัตรประชาชนไม่ถูกต้อง",
        },
      }),
      errors: errors["idcardNo"],
    },
    address: {
      validator: register("address", {
        required: "จำเป็นต้องกรอก",
      }),
      errors: errors["address"],
    },
    dateOfInjection: {
      validator: register("dateOfInjection", {
        required: "จำเป็นต้องกรอก",
      }),
      errors: errors["dateOfInjection"],
    },
  };

  function onCloseAddressModal() {
    setIsOpenAddressModel(false);
  }

  function onSubmit(data) {
    console.log(data);
  }

  function onSubmitAddress(data) {
    const addressData = `${data["district"]} ${data["amphoe"]} ${data["province"]} ${data["zipcode"]}`;
    setValue("address", addressData?.trim(), { shouldValidate: true });
  }

  function onSelectedDate(date) {
    setValue("dateOfInjection", date, { shouldValidate: true });
  }

  return (
    <div className="h-full mt-20 z-10 relative">
      <AddressModal
        isOpen={isOpenAddressModel}
        onOpenModel={onCloseAddressModal}
        onSubmit={onSubmitAddress}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-3">
          <h1 className="flex flex-row space-x-5 text-6xl sm:text-6xl items-center">
            <Logo className="logo" />
            <p className="font-manrope">HealMe</p>
          </h1>
          <div className="flex flex-col space-y-1">
            <p className="font-anakotmai-medium text-4xl">แบบฟอร์มลงทะเบียน</p>
            <span className="text-lg mt-5">
              ระบบลงทะเบียนเพื่อช่วยหาเตียงสำหรับผู้ป่วยโควิดที่รอรับการรักษา
            </span>
          </div>
        </div>
        <div className="w-full lg:w-9/12 rounded-xl p-8 text-black my-8 bg-white shadow-sm">
          <div className="group">
            <Title number="1" text="รายละเอียดผู้ติดเชื้อ" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <PureInputField
                name="firstName"
                label="ชื่อจริง"
                validator={validators.firstName.validator}
                errors={validators.firstName.errors}
              />
              <PureInputField
                name="lastName"
                label="นามสกุล"
                validator={validators.lastName.validator}
                errors={validators.lastName.errors}
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              <PureInputField type="number" label="อายุ" min="0" />
              <PureInputField
                name="idcardNo"
                label="เลขบัตรประชาชน"
                className="col-span-3"
                validator={validators.idcardNo.validator}
                errors={validators.idcardNo.errors}
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <PureInputField
                type="number"
                label="น้ำหนัก"
                min="0"
                className="col-span-1 md:col-auto"
              />
              <PureInputField
                type="number"
                label="ส่วนสูง"
                min="0"
                className="col-span-2 md:col-auto"
              />
              <PureInputField
                label="โรคประจำตัว (ถ้ามี)"
                className="col-span-3 md:col-auto"
              />
            </div>
          </div>
          <div className="group mt-8">
            <Title number="2" text="ที่พักอาศัยในขณะนี้" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <PureInputField
                name="address"
                label="ที่อยู่"
                validator={validators.address.validator}
                errors={validators.address.errors}
                placeholder="จังหวัด, อำเภอ/เขต, รหัสไปรษณีย์"
                onInputFocus={() => setIsOpenAddressModel(true)}
                readonly
              />
            </div>
            <div className="grid grid-cols-1 gap-3">
              <PureInputField label="รายละเอียดที่อยู่" />
            </div>
          </div>
          <div className="group mt-8">
            <Title number="3" text="การติดต่อ" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <PureInputField type="number" label="เบอร์มือถือหลัก" />
              <PureInputField type="number" label="เบอร์มือถือสำรอง (ถ้ามี)" />
            </div>
          </div>
          <div className="group mt-8">
            <Title number="4" text="รายละเอียดการติดเชื้อโควิด" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <DatePicker
                label="วันที่ตรวจพบเชื้อโควิด"
                name="dateOfInjection"
                className="input-field"
                placeholder="วัน/เดือน/ปี"
                setDate={(date) => onSelectedDate(date)}
                errors={validators.dateOfInjection.errors}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <PureInputField label="สถานที่ตรวจพบเชื้อโควิด" />
            </div>
            <Button className="text-primary-700 bg-primary-100 font-anakotmai text-sm mt-5">
              <div className="flex flex-row items-center space-x-3">
                <FiUpload /> <p>อัพโหลดเอกสาร</p>
              </div>
            </Button>
          </div>
          <hr className="my-5" />
          <div className="flex flex-row justify-center items-center">
            <Button
              type="submit"
              className="bg-secondary font-anakotmai-medium text-sm"
            >
              <div className="flex flex-row items-center space-x-3">
                <p>ยืนยันการลงทะเบียน</p>
              </div>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
