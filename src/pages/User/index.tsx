import user from "../../assets/rafiki 1.png";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { UserContainer, UserTitle, UserDesc, UserInfoContainer } from "./styles";

export const User = () => {
  return (
    <>
      <Header />
      <UserContainer>
        <UserInfoContainer>
          <UserTitle>Pessoa Usuária</UserTitle>
          <UserDesc>
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que
            atendam às suas necessidades de forma segura e acolhedora.
          </UserDesc>
        </UserInfoContainer>
        <img src={user} alt="Smartphone mockup with users" />
      </UserContainer>
      <Footer />
    </>
  );
};
