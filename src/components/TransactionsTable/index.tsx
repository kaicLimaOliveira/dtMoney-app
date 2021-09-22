import { useTransactions } from "../../hooks/useTransactions";

import { FiTrash2 } from "react-icons/fi";

import { Container, Title } from "./styles";

export function TransactionsTable() {
  const { transactions, removeTransactions } = useTransactions();

  return transactions.length > 0 ? (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Opções</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
              <td>
                <button onClick={() => removeTransactions(transaction.id)}>
                  <FiTrash2 size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  ) : (
    <Title>
      <h3>Ainda não possui transações.</h3>
    </Title>
  );
};

