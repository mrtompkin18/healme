import React from "react";
import cn from "classnames";
import _ from "lodash";

const PureInputField = ({
  name = "",
  label = "",
  type = "text",
  className = "",
  placeholder = "",
  inputClassName = "",
  disabled = false,
  readonly = false,
  validator = {},
  errors = {},
  onInputFocus = () => {},
}) => {
  const errorClass = cn({
    "border-red-500 bg-red-100 border": !!errors?.message,
  });

  return (
    <div
      className={`w-full flex flex-col space-y-2 text-gray-500 mt-5 text-sm ${className}`}
    >
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        className={`text-field border border- rounded-md shadow-inner p-3 my-2 w-full font-anakotmai-medium text-black text-md ${inputClassName} ${errorClass}`}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        onFocus={onInputFocus}
        {...validator}
      />
      {errors && (
        <span className="text-red-500 my-2 font-anakotmai-medium">
          {errors.message}
        </span>
      )}
    </div>
  );
};

export default React.memo(PureInputField);
