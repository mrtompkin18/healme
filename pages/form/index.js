import React, { useState } from "react";
import { FiUpload, FiFile, FiXSquare } from "react-icons/fi";

import Logo from "@components/svg/SvgLogo";
import Title from "@components/form/Title";
import PureInputField from "@components/form/PureInputField";
import Button from "@components/button/Button";
import AddressModal from "@components/form/AddressModal";
import DatePicker from "@components/form/DatePicker";
import { useFileUpload } from "@hooks/useFileUpload";
import { useValidateRegisterForm } from "@hooks/useFormValidate";
import { elipsis } from "@utils/index";

const Form = () => {
  const [isOpenAddressModel, setIsOpenAddressModel] = useState(false);
  const [validators, handleSubmit, setFormValue] = useValidateRegisterForm();
  const [file, selectFile, clearFile] = useFileUpload();

  function onCloseAddressModal() {
    setIsOpenAddressModel(false);
  }

  function onSubmit(data) {
    console.log(data);
  }

  function onSubmitAddress(data) {
    const addressData = `${data["district"]} ${data["amphoe"]} ${data["province"]} ${data["zipcode"]}`;
    setFormValue("address", addressData?.trim(), { shouldValidate: true });
  }

  function onSelectedDate(date) {
    setFormValue("dateOfInjection", date, { shouldValidate: true });
  }

  function onUploadFile(file) {
    setFormValue("paperFile", file);
  }

  function displayFile() {
    if (!file) return;
    return (
      <div className="p-2 my-4 border border-dashed rounded-md flex items-center justify-between bg-gray-50">
        <div className="flex items-center space-x-3">
          <FiFile size="38" />
          <div className="flex flex-col flex-wrap">
            <span className="font-anakotmai-medium text-sm">
              ชื่อไฟล์ {elipsis(file.name, 30)}
            </span>
            <span className="font-anakotmai-light text-xs text-gray-400">
              ขนาดไฟล์ {file.size} bytes
            </span>
          </div>
        </div>
        <div className="cursor-pointer text-red-500" onClick={clearFile}>
          <FiXSquare size="22" />
        </div>
      </div>
    );
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
            <div className="grid grid-cols-3 gap-3">
              <PureInputField
                type="number"
                label="อายุ"
                min="0"
                validator={validators.age.validator}
                errors={validators.age.errors}
              />
              <PureInputField
                name="idcardNo"
                label="เลขบัตรประชาชน"
                className="col-span-2"
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
                validator={validators.weight.validator}
                errors={validators.weight.errors}
              />
              <PureInputField
                type="number"
                label="ส่วนสูง"
                min="0"
                className="col-span-2 md:col-auto"
                validator={validators.height.validator}
                errors={validators.height.errors}
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
              <PureInputField
                label="เบอร์มือถือหลัก"
                validator={validators.phoneNumber.validator}
                errors={validators.phoneNumber.errors}
              />
              <PureInputField
                label="เบอร์มือถือสำรอง (ถ้ามี)"
                validator={validators.phoneNumber2.validator}
                errors={validators.phoneNumber2.errors}
              />
            </div>
          </div>
          <div className="group mt-8">
            <Title number="4" text="รายละเอียดการติดเชื้อโควิด" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <DatePicker
                label="วันที่ตรวจพบเชื้อโควิด"
                name="dateOfInjection"
                placeholder="วัน/เดือน/ปี"
                setDate={(date) => onSelectedDate(date)}
                errors={validators.dateOfInjection.errors}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <PureInputField
                label="สถานที่ตรวจพบเชื้อโควิด (ชื่อสถานที่)"
                validator={validators.hospital.validator}
                errors={validators.hospital.errors}
              />
            </div>
            <Button
              className="text-primary-600 shadow-md border font-anakotmai-medium text-sm mt-5 hover:bg-gray-50"
              onClickButton={() =>
                selectFile(".png,.jpeg,jpg,.pdf", (file) => {
                  onUploadFile(file.file);
                })
              }
            >
              <div className="flex flex-row items-center space-x-3">
                <FiUpload /> <p>อัพโหลดเอกสาร</p>
              </div>
            </Button>
            <div>{displayFile()}</div>
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
