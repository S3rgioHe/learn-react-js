import { useEffect, useState } from "react";
import { Container } from "./style";
import { api } from "../services/api";


interface Transaction {
    id: number;
    title: string;
    type: string;
    value: number;
    category: string;
    CreatedAt: string;
}

interface TransactionTableProps {
    isOpen: boolean;
}

export function TransactionsTable({ isOpen }: TransactionTableProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [isOpen])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(transaction.value)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>{
                                new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.CreatedAt)
                            )}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}