import React, { useCallback, useState, useRef, useEffect } from "react";
import _ from "lodash";

import InputField from "@components/form/InputField";

function Dropdown(props) {
  const {
    objkey = "",
    options = "",
    defaultValue = "",
    displayText = (t) => t,
    onSelectValue = () => {},
  } = props;

  const inputRef = useRef();
  const dropdownRef = useRef();

  const [dropdownList, setDropdownList] = useState([]);
  const [isExpand, setIsExpand] = useState(false);
  const [searchWording, setSearchWording] = useState();

  useEffect(() => {
    if (isExpand) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpand]);

  useEffect(() => {
    setSearchWording(defaultValue);
  }, [defaultValue]);

  function handleClickOutside(e) {
    if (
      !inputRef.current.contains(e.target) &&
      !dropdownRef.current.contains(e.target)
    ) {
      setIsExpand(false);
    }
  }

  const onSearchText = useCallback((wording) => {
    wording = wording.trim();
    setSearchWording(wording);
    if (wording) {
      const list = options.filter((obj) => _.startsWith(obj[objkey], wording));
      const limit = _.slice(list, 0, 20);
      setDropdownList(limit);
      setIsExpand(true);
    } else {
      setIsExpand(false);
    }
  }, []);

  return (
    <div>
      <InputField
        {...props}
        inputRef={inputRef}
        defaultValue={searchWording}
        onInputChange={(e) => onSearchText(e.target.value)}
        onInputFocus={(e) => onSearchText(e.target.value)}
      />

      {isExpand && (
        <div
          className="w-full bg-white shadow-2xl rounded-b-xl relative border mb-5 max-h-72 overflow-y-scroll"
          ref={dropdownRef}
        >
          <ul>
            {dropdownList.map((item, index) => (
              <li
                key={index}
                className="border-b py-3 cursor-pointer p-4 hover:bg-gray-100"
                onClick={() => {
                  onSelectValue(item);
                  setSearchWording(item[objkey]);
                  setIsExpand(false);
                }}
              >
                {displayText(item)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default React.memo(Dropdown);
