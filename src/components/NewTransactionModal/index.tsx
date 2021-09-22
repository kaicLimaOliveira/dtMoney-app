import React, { FormEvent, useCallback, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { useTransactions } from "../../hooks/useTransactions";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";

interface INewTransactionModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export const NewTransactionModal: React.FC<INewTransactionModal> = ({
  isOpen,
  onRequestClose,
}) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("deposit");

  const { createTransaction } = useTransactions();

  const handleCreateTransaction = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      await createTransaction({
        title,
        amount,
        category,
        type,
      });

      setTitle("");
      setCategory("");
      setAmount(0);
      setType("");

      onRequestClose();
    },
    [title, amount, category, type, createTransaction, onRequestClose]
  );

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            onClick={() => setType("deposit")}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            onClick={() => setType("withdraw")}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

