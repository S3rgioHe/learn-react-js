import { Summary } from '../Summary'
import { Container } from './style'
import { TransactionsTable } from '../TransactionsTable'

interface DashboardProps {
    isOpen: boolean;
}

export function Dashboard({ isOpen }: DashboardProps) {
    return (
    <Container>
        <Summary />
        <TransactionsTable isOpen={isOpen}/>
    </Container>

    )
}