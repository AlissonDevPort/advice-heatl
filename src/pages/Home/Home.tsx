import React from "react";
import DashBoard from "../../components/dashboard/DashBoard";
import DoctorsAndCalendarGroup from "../../components/doctorsAndCalendarGroup/DoctorsAndCalendarGroup.tsx";
import ReminderTable from "../../components/reminderTable/ReminderTable";
import SearchInput from "../../components/searchInput/SearchInput";
import HeaderComponent from "../../patterns/header/HeaderPattern";
import SideBarComponent from "../../patterns/sidebar/SideBarPattern";
import MainContainer from "../../patterns/mainContainer/MainContainer";
import { ContentsContainer, FirstChildren, SecondChildren } from "./styles.ts";
import useSideBar from "../../patterns/sidebar/useSideBar.ts";

const Home = () => {
  const { isOpen, handleToggleSidebar, handleCloseSidebar } = useSideBar();
  
  return (
    <MainContainer>
      <HeaderComponent />
      <SideBarComponent
        isOpen={isOpen}
        onClose={handleCloseSidebar}
        onToggle={handleToggleSidebar}
      />
      <ContentsContainer>
        <FirstChildren>
          <SearchInput
            fullWidth={true}
            onChange={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
          />
          <DashBoard />
          <ReminderTable />
        </FirstChildren>
        <SecondChildren>
          <DoctorsAndCalendarGroup />
        </SecondChildren>
      </ContentsContainer>
    </MainContainer>
  );
};

export default Home;
