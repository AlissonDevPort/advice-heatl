import React from "react";
import DashBoard from "../../components/dashboard/DashBoard";
import DoctorsAndCalendarGroup from "../../components/doctorsAndCalendarGroup/DoctorsAndCalendarGroup.tsx";
import ReminderTable from "../../components/reminderTable/ReminderTable";
import SearchInput from "../../components/searchInput/SearchInput";
import HeaderComponent from "../../patterns/header/HeaderPattern";
import SideBarComponent from "../../patterns/sidebar/SideBarPattern";
import MainContainer from "../../patterns/mainContainer/MainContainer";
import { ContentsContainer, FirstChildren, SecondChildren } from "./styles.ts";

const Home = () => {
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
