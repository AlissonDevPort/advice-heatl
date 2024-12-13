import React from "react";
import { Children } from "./styles";
import ReminderTable from "../../components/reminderTable/ReminderTable";
import MainContainer from "../../patterns/mainContainer/MainContainer";
import HeaderComponent from "../../patterns/header/HeaderPattern";
import SideBarComponent from "../../patterns/sidebar/SideBarPattern";
import useSideBar from "../../patterns/sidebar/useSideBar";
import SearchInput from "../../components/searchInput/SearchInput";

const Consultation = () => {
    const { isOpen, handleToggleSidebar, handleCloseSidebar } = useSideBar();
  return (
    <MainContainer>
        <HeaderComponent />
      <SideBarComponent
        isOpen={isOpen}
        onClose={handleCloseSidebar}
        onToggle={handleToggleSidebar}
      />
      <Children>
        <SearchInput fullWidth={false} onChange={function (value: string): void {
                  throw new Error("Function not implemented.");
              } } />
        <ReminderTable />
      </Children>
    </MainContainer>
  );
};

export default Consultation;
