import React, { useState } from "react";
import styled from 'styled-components'

const CustomNav = ({ li }) => {
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  return (
    <NavbarMenu style={{ width: window === false ? 250 : 60 }}>
      <Burger onClick={() => openClose()}>
        <img src="img/menu.svg" alt="burger" />
      </Burger>
      <NavbarList>
        {li.map((item, i) => (
          <div key={i}>
            <img
              src={item[1]}
              alt={item[1]}
              style={{ paddingLeft: window === false ? 1000 : 5 }}
            />
            <NavbarListItem
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              {item[0]}
            </NavbarListItem>
          </div>
        ))}
      </NavbarList>
    </NavbarMenu>
  );
};

export default CustomNav;

const NavbarMenu = styled.div`
  position: fixed;
  height: 100vh;
  background-color: #282626;
  transition: all 1s ease;
  right:0;
`;

const Burger = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    padding: 25px 8px 0px 0px;
    cursor: pointer;
  }
`;

const NavbarList = styled.ul`
  list-style-type: none;
`;

const NavbarListItem = styled.li`
  display: inline-block;
  position: relative;
  top: 500px;
  font-size: 25px;
  margin-top:10px;
  color: #DCDCDC;
  font-family: 'Helvetica Neue';
  font-weight: 900;

  &-box:first-child {
    margin-top: 53px;
  }

  &-box {
    height: 43px;
    margin-top: 15px;
  }

  &-box:hover {
    border-left: 10px solid black;
    cursor: pointer;
  }
`;
