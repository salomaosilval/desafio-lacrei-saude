import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6.4rem;
  background-color: #eee;
  height: 6rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 3.2rem;
  color: #018762;
  font-weight: 700;
`;

export const HeaderLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 32.7rem;
`;

export const HeaderLink = styled(NavLink)`
  color: #1f1f1f;
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }

  &.active {
    color: #018762;
  }
`;
