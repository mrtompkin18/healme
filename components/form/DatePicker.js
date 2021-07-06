import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import cn from "classnames";

const DatePicker = ({
  name = "",
  label = "",
  className = "",
  placeholder = "",
  inputClassName = "",
  dateFormat = "dd/MM/yyyy",
  disabled = false,
  readonly = false,
  setDate = () => {},
  errors = {},
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div
      className={cn(
        "w-full flex flex-col space-y-2 text-gray-500 mt-5 text-sm",
        { className }
      )}
    >
      <label htmlFor={name}>{label}</label>
      <ReactDatePicker
        name={name}
        className={cn("input-field", {
          inputClassName,
          "error-field": !!errors.message,
        })}
        placeholderText={placeholder}
        disabled={disabled}
        readOnly={readonly}
        selected={selectedDate}
        dateFormat={dateFormat}
        onChange={(date) => {
          setSelectedDate(date);
          setDate(date);
        }}
      />
      {errors && (
        <span className="text-red-500 my-2 font-anakotmai-medium">
          {errors.message}
        </span>
      )}
    </div>
  );
};

export default React.memo(DatePicker);
