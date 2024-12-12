import { useState } from "react";

interface UseSideBar {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggleSidebar: () => void;
  handleCloseSidebar: () => void;
}

const useSideBar = (): UseSideBar => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };
  return { isOpen, setIsOpen, handleToggleSidebar, handleCloseSidebar };
};

export default useSideBar;
