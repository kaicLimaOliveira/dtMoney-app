import React from "react";

import logoImg from "../../assets/logo.svg";

import { ContainerHeader, Content } from "./styles";

interface IHeader {
  openModal: () => void;
}

export const Header: React.FC<IHeader> = ({ openModal }) => {
  return (
    <ContainerHeader>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={openModal}>
          Nova Transação
        </button>
      </Content>
    </ContainerHeader>
  );
};


