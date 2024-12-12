import React, { useEffect, useState } from "react";
import { BrainBtn, Content, NavbarContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <NavbarContainer>
        <Content>
            <BrainBtn>
              <FontAwesomeIcon
                icon={faBrain}
                style={{ height: "1rem", marginRight: "10px" }}
              />
              Criar I.A{" "}
            </BrainBtn>
        </Content>
      </NavbarContainer>
    </>
  );
};

export default HeaderComponent;
