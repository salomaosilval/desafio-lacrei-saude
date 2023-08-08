import doctors from "../../assets/profissional 1.png";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { ProfessionalContainer, ProfessionalTitle, ProfessionalDesc, ProfessionalInfoContainer } from "./styles";

export const Professional = () => {
  return (
    <>
      <Header />
      <ProfessionalContainer>
        <ProfessionalInfoContainer>
          <ProfessionalTitle>Profissional</ProfessionalTitle>
          <ProfessionalDesc>
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que
            atendam às suas necessidades de forma segura e acolhedora.
          </ProfessionalDesc>
        </ProfessionalInfoContainer>
        <img src={doctors} alt="" />
      </ProfessionalContainer>
      <Footer />
    </>
  );
};
