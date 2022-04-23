import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  z-index: 1;
  height: 500px;
  width: 100%auto;
  margin-top: 5rem;
  padding: 0 24px;
  justify-content: center;
  margin-left: 4rem;
  margin-right: 4rem;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  align-items: center;
  overflow-x: scroll;
  scrollbar-width: none;
  scroll-behavior: smooth;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 15px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const SearchCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 250px;
  padding: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const SearchIcon = styled.img`
  height: 140px;
  width: 140px;
  margin-bottom: 10px;
`;
export const SearchH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const SearchH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const SearchP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
