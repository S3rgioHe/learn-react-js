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
export function TransactionsTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

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
                            <td className={transaction.type}>{transaction.value}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.CreatedAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}