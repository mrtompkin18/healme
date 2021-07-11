import React, { Fragment, useMemo, useState } from "react";
import sortBy from "lodash/sortBy";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronsRight } from "react-icons/fi";

import Title from "@components/form/Title";
import Dropdown from "@components/form/Dropdown";

import thailandDB from "../../db/thailand.json";

const DialogBox = ({
  isOpen = false,
  onOpenModel = () => {},
  onSubmit = () => {},
}) => {
  const thailandAddress = useMemo(() => sortBy(thailandDB, ["zipcode"]), []);

  const [address, setAddress] = useState({
    district: "",
    amphoe: "",
    province: "",
    zipcode: "",
  });

  const modal = {
    visible: {
      opacity: 1,
      y: "10px",
      transition: {
        delay: 1,
      },
    },
    hidden: { opacity: 0, y: "-10vh" },
  };

  const overlay = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.35,
      },
    },
    hidden: { opacity: 0 },
  };

  function onChangeAddress({ district, amphoe, province, zipcode }) {
    setAddress({ district, amphoe, province, zipcode });
  }

  function displayAddressDropdown(addr) {
    return (
      <div className="flex flex-row items-center flex-wrap space-x-2">
        <span>{addr["district"]}</span>
        <FiChevronsRight className="text-gray-300" />
        <span>{addr["amphoe"]}</span>
        <FiChevronsRight className="text-gray-300" />
        <span>{addr["province"]}</span>
        <FiChevronsRight className="text-gray-300" />
        <span>{addr["zipcode"]}</span>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          <motion.div
            className="fixed z-50 inset-0 overflow-y-auto"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="min-h-screen px-4 text-center text-black">
              <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle bg-white shadow-2xl rounded-2xl">
                <Title text="เลือกจังหวัด/อำเภอ/ตำบล" />
                <div className="grid grid-cols-1 gap-3">
                  <Dropdown
                    objkey="district"
                    options={thailandAddress}
                    placeholder="เลือกตำบล/เเขวง"
                    label="ตำบล/เเขวง"
                    defaultValue={address["district"]}
                    onSelectValue={(data) => onChangeAddress(data)}
                    displayText={(item) => displayAddressDropdown(item)}
                  />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <Dropdown
                    objkey="amphoe"
                    options={thailandAddress}
                    placeholder="เลือกอำเภอ/เขต"
                    label="อำเภอ/เขต"
                    defaultValue={address["amphoe"]}
                    onSelectValue={(data) => onChangeAddress(data)}
                    displayText={(item) => displayAddressDropdown(item)}
                  />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <Dropdown
                    objkey="province"
                    options={thailandAddress}
                    placeholder="เลือกจังหวัด"
                    label="จังหวัด"
                    defaultValue={address["province"]}
                    onSelectValue={(data) => onChangeAddress(data)}
                    displayText={(item) => displayAddressDropdown(item)}
                  />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <Dropdown
                    objkey="zipcode"
                    options={thailandAddress}
                    placeholder="เลือกรหัสไปษณีย์"
                    label="รหัสไปษณีย์"
                    defaultValue={address["zipcode"]}
                    onSelectValue={(data) => onChangeAddress(data)}
                    displayText={(item) => displayAddressDropdown(item)}
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      onSubmit(address);
                      onOpenModel(false);
                    }}
                    className="inline-flex justify-center px-4 py-2 text-sm font-anakotmai-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    ตกลง
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={overlay}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overlay"
          ></motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export default React.memo(DialogBox);
