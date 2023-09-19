import React, { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

export const ChildBlurModal = ({
  children,
  isOpen,
  showCloseIcon,
  onClose,
  fixed,
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const blurBg = `backdrop-blur-xl opacity-[1]`;
  const transBg = ``;

  React.useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleClickOutside = (e) => {
    const tgt = e.target?.dataset;
    const name = tgt.name;
    name && onClose;
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.classList.remove("modal-open");
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`w-full backdrop-blur bg-white-500 bg-opacity-75 h-[100vh] ${
        fixed ? "fixed z-[900]" : "absolute"
      } top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-[50] overflow-y-auto hideScollBar overflow-x-hidden py-5`}
      data-name="main-modal"
    >
      <div className={`${isVisible ? "opacity-100" : "opacity-0"}`}>
        {showCloseIcon && (
          <div className="absolute top-[3em] right-0 p-1 z-[70]">
            <IconButton
              aria-label="close"
              className="mt-5 mr-5 bg-dark-405"
              bgColor={"rgb(18, 21, 26,.5)"}
              textColor="#fff"
              _hover={{ bg: "#20222C" }}
              icon={<IoClose />}
              onClick={onClose}
            />
          </div>
        )}
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  );
};
