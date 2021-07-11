import React from "react";

const Title = ({ number = "", text = "" }) => {
  return (
    <React.Fragment>
      <div className="flex flex-row items-center space-x-4">
        {number && (
          <div className="rounded-full h-10 w-10 flex items-center justify-center bg-primary font-manrope-bold text-white text-lg">
            {number}
          </div>
        )}
        <div className="font-anakotmai-medium text-xl text-secondary">
          {text}
        </div>
      </div>
      <div className="w-full h-0.5 bg-primary my-3"></div>
    </React.Fragment>
  );
};

export default Title;
