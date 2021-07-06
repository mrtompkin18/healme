import { memo } from "react";

const Button = ({
  type = "button",
  children,
  className,
  onClickButton = () => {},
}) => {
  return (
    <button
      type={type}
      className={`py-5 px-6 bg-black hover:bg-gray-800 text-white rounded-md ${className} transition-all`}
      onClick={onClickButton}
    >
      {children}
    </button>
  );
};

export default memo(Button);
