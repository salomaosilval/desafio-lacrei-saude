import doctor from "../../assets/rafiki 2.png";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import {
  HomeContainer,
  HomeTitle,
  HomeContent,
  HomeDesc,
  PrimaryButton,
  ButtonsContainer,
  OutlinedButton,
} from "./styles";

export const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <HomeContent>
          <HomeTitle>Boas vindas a Lacrei Saúde</HomeTitle>
          <HomeDesc>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</HomeDesc>
          <ButtonsContainer>
            <a href="/user">
              <PrimaryButton>Pessoa Usuária</PrimaryButton>
            </a>
            <a href="/professional">
              <OutlinedButton>Profissional</OutlinedButton>
            </a>
          </ButtonsContainer>
        </HomeContent>
        <img src={doctor} alt="Doctor" />
      </HomeContainer>
      <Footer />
    </>
  );
};
