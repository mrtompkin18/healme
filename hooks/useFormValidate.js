import { useForm } from "react-hook-form";
import { REGEX_ID_CARD, REGEX_PHONE_NUMBER } from "@constants/common";

export function useValidateRegisterForm() {
  const { register, handleSubmit, setValue, formState } = useForm();
  const { errors } = formState;

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
          value: REGEX_ID_CARD,
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
    age: {
      validator: register("age", {
        required: "จำเป็นต้องกรอก",
      }),
      errors: errors["age"],
    },
    weight: {
      validator: register("weight", {
        required: "จำเป็นต้องกรอก",
      }),
      errors: errors["weight"],
    },
    height: {
      validator: register("height", {
        required: "จำเป็นต้องกรอก",
      }),
      errors: errors["height"],
    },
    phoneNumber: {
      validator: register("phoneNumber", {
        required: "จำเป็นต้องกรอก",
        pattern: {
          value: REGEX_PHONE_NUMBER,
          message: "กรอกเบอร์โทรไม่ถูกต้อง",
        },
      }),
      errors: errors["phoneNumber"],
    },
    phoneNumber2: {
      validator: register("phoneNumber2", {
        pattern: {
          value: REGEX_PHONE_NUMBER,
          message: "กรอกเบอร์โทรไม่ถูกต้อง",
        },
      }),
      errors: errors["phoneNumber2"],
    },
    hospital: {
      validator: register("hospital", {
        required: "จำเป็นต้องกรอก",
      }),
      errors: errors["hospital"],
    },
  };

  return [validators, handleSubmit, setValue];
}
