import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin: 0 6.4rem;
  border-top: 1px solid #b0e0d3;
`;

export const FooterLink = styled(NavLink)`
  color: #1f1f1f;
  font-size: 1.6rem;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }

  &.active {
    font-weight: 700;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: 3.2rem;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 3.2rem;
`;

export const FooterDesc = styled.p`
  color: #515151;
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
`;
