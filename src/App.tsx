import { useCallback, useState } from "react";
import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  const [isModalTransactionOpen, setIsModalTransactionOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalTransactionOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalTransactionOpen(false);
  }, []);

  return (
    <TransactionsProvider>
      <Header openModal={handleOpenModal} />
      <Dashboard />
      <GlobalStyle />

      <NewTransactionModal
        isOpen={isModalTransactionOpen}
        onRequestClose={handleCloseModal}
      />
    </TransactionsProvider>
  );
};

