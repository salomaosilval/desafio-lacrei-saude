import { HeaderContainer, HeaderLink, HeaderTitle, HeaderLinksContainer } from "./styles";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>Lacrei</HeaderTitle>
        <HeaderLinksContainer>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/user">Pessoa Usuária</HeaderLink>
          <HeaderLink to="/professional">Profissional</HeaderLink>
        </HeaderLinksContainer>
      </HeaderContainer>
    </>
  );
};
