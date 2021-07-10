import { createContext, useState } from "react";

const SvgAnimateContext = createContext();

function SvgAnimateProvider({ children }) {
  const [animate, setAnimate] = useState({
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      y: -100,
    },
  });

  return (
    <SvgAnimateContext.Provider value={{ animate, setAnimate }}>
      {children}
    </SvgAnimateContext.Provider>
  );
}

export { SvgAnimateContext };
export default SvgAnimateProvider;
