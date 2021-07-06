import React, { useState, useEffect } from "react";

const InputField = ({
  name = "",
  label = "",
  type = "text",
  className = "",
  placeholder = "",
  inputClassName = "",
  defaultValue = "",
  disabled = false,
  readonly = false,
  inputRef = React.createRef(),
  onInputChange = () => {},
  onInputFocus = () => {},
  onInputBlur = () => {},
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  function onChangeValue(e) {
    setValue(e.target.value);
    onInputChange(e);
  }

  return (
    <div
      className={`w-full flex flex-col space-y-2 text-gray-500 mt-5 text-sm ${className}`}
    >
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        className={`input-field ${inputClassName}`}
        type={type}
        ref={inputRef}
        onChange={onChangeValue}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        value={value}
      />
    </div>
  );
};

export default React.memo(InputField);
