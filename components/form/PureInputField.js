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
  min = undefined,
  max = undefined,
  onInputFocus = () => {},
}) => {
  const properties =
    type === "number" ? { min, max } : { minLength: min, maxLength: max };

  return (
    <div
      className={`w-full flex flex-col space-y-2 text-gray-500 mt-5 text-sm ${className}`.trim()}
    >
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        className={cn("input-field", {
          inputClassName,
          "error-field": errors.message,
        })}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        onFocus={onInputFocus}
        {...validator}
        {...properties}
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
