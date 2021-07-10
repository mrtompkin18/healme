import React, { useState } from "react";
import cn from "classnames";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import th from "date-fns/locale/th";

registerLocale("th", th);

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
  const [selectedDate, setSelectedDate] = useState();

  return (
    <div
      className={`w-full flex flex-col space-y-2 text-gray-500 mt-5 text-sm ${className}`.trim()}
    >
      <label htmlFor={name}>{label}</label>
      <ReactDatePicker
        locale="th"
        name={name}
        // peekNextMonth
        dropdownMode="select"
        placeholderText={placeholder}
        disabled={disabled}
        readOnly={readonly}
        selected={selectedDate}
        dateFormat={dateFormat}
        className={cn("input-field", {
          inputClassName,
          "error-field": !!errors.message,
        })}
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
