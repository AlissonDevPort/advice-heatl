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
import useReminderTable from "../../components/reminderTable/useReminderTable.ts";

const Home: React.FC = () => {
  const { isOpen, handleToggleSidebar, handleCloseSidebar } = useSideBar();
  const { headers, rows } = useReminderTable();

  return (
    <>
      <HeaderComponent />
      <SideBarComponent
        isOpen={isOpen}
        onClose={handleCloseSidebar}
        onToggle={handleToggleSidebar}
      />
      <ContentsContainer>
        <FirstChildren>
          <SearchInput fullWidth={true} onChange={() => console.log("")} />
          <DashBoard />
          <ReminderTable headers={headers} rows={rows} />
        </FirstChildren>
        <SecondChildren>
          <DoctorsAndCalendarGroup />
        </SecondChildren>
      </ContentsContainer>
    </>
  );
};

export default Home;
