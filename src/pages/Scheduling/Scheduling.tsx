import React from "react";
import DashBoard from "../../components/dashboard/DashBoard";

import ReminderTable from "../../components/reminderTable/ReminderTable";
import SearchInput from "../../components/searchInput/SearchInput";
import HeaderComponent from "../../patterns/header/HeaderPattern";
import MainContainer from "../../patterns/mainContainer/MainContainer";
import SideBarComponent from "../../patterns/sidebar/SideBarPattern";
import { ContentsContainer, FirstChildren, SecondChildren } from "./styles";
import DoctorsAndCalendarGroup from "../../components/doctorsAndCalendarGroup/DoctorsAndCalendarGroup.tsx";

const Scheduling = () => {
  return (
    <MainContainer>
      <HeaderComponent />
      <SideBarComponent
        isOpen={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ContentsContainer>
        <SecondChildren>
          <DoctorsAndCalendarGroup />
        </SecondChildren>
        <FirstChildren></FirstChildren>
      </ContentsContainer>
    </MainContainer>
  );
};

export default Scheduling;
