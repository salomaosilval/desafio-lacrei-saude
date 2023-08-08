import facebook from "../../assets/FacebookLogo.svg";
import instagram from "../../assets/InstagramLogo.svg";
import linkedin from "../../assets/LinkedinLogo.svg";

import { FooterContainer, FooterLink, FooterLinksContainer, SocialContainer, FooterDesc } from "./styles";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLinksContainer>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/user">Pessoa Usuária</FooterLink>
          <FooterLink to="/professional">Profissional</FooterLink>
        </FooterLinksContainer>
        <SocialContainer>
          <a href="https://www.facebook.com/lacrei.saude" target="_blank">
            <img src={facebook} alt="Facebook Logotipo" />
          </a>
          <a href="https://www.instagram.com/lacrei.saude" target="_blank">
            <img src={instagram} alt="Instagram Logotipo" />
          </a>
          <a href="https://www.linkedin.com/company/lacrei-saude/" target="_blank">
            <img src={linkedin} alt="Linkedin Logotipo" />
          </a>
        </SocialContainer>
        <FooterDesc>Desafio Front-End Lacrei</FooterDesc>
      </FooterContainer>
    </>
  );
};
