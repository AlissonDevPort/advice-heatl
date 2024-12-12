import React, { useState } from "react";

const useSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return {
    isOpen,
    setIsOpen,
    handleToggleSidebar,
  };
};

export default useSideBar;
