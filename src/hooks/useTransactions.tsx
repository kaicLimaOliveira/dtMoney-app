import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface ITransactions {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

interface ITransactionsInput {
  title: string;
  type: string;
  category: string;
  amount: number;
}

interface ITransactionsContext {
  transactions: ITransactions[];
  createTransaction: (transaction: ITransactionsInput) => Promise<void>;
  removeTransactions: (transactionId: number) => void;
}

export const TransactionsContext = createContext<ITransactionsContext>(
  {} as ITransactionsContext
);

export const TransactionsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => response.data.transactions)
      .then((data) => setTransactions(data));
  }, []);

  const createTransaction = useCallback(
    async (transactionInput: ITransactionsInput) => {
      const response = await api.post("/transactions", {
        ...transactionInput,
        createdAt: new Date(),
      });

      const { transaction } = response.data;

      setTransactions([...transactions, transaction]);
    },
    [transactions]
  );

  const removeTransactions = useCallback((transactionId: number) => {
    setTransactions((state) =>
      state.filter((transaction) => transactionId !== transaction.id)
    );
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
        removeTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionsContext);

  return context;
};
