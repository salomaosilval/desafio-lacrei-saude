import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  padding: 6.4rem;
  justify-content: space-between;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const HomeContent = styled.div`
  width: 45.3rem;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const HomeTitle = styled.h1`
  color: #1f1f1f;
  font-size: 4.8rem;
  font-weight: 700;
  margin-bottom: 3.2rem;
`;

export const HomeDesc = styled.p`
  color: #515151;
  font-size: 2.4rem;
  font-weight: 400;
  margin-bottom: 4.8rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 6.9rem;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;
  }
`;

export const PrimaryButton = styled.button`
  width: 19.2rem;
  height: 4.8rem;
  background-color: #018762;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #016650;
  }
`;

export const OutlinedButton = styled.button`
  width: 19.2rem;
  height: 4.8rem;
  border-radius: 8px;
  border: 2px solid #018762;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 1.8rem;
  color: #018762;
  font-weight: 700;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #018762;
    color: #fff;
  }
`;
