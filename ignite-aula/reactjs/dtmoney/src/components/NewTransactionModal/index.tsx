import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './style';
import closeImg from '../../assets/close.svg';
import income from '../../assets/incomeImg.svg';
import outcome from '../../assets/outcomeImg.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ onRequestClose, isOpen }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type='button'
                onClick={onRequestClose}
                className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>
        <Container>
            <h2>Cadastrar transação</h2>
            <input
                placeholder='Título'
            />
            <input
                type="number"
                placeholder="Valor"
            />

            <TransactionTypeContainer> 
                <button
                    type='button'
                >
                    <img src={income} alt="Entrada" />
                    <span>Entrada</span>
                </button>

                <button
                    type='button'
                >
                    <img src={outcome} alt="saida" />
                    <span>Saida</span>
                </button>



            </TransactionTypeContainer>

            <input
                placeholder='categoria'
            />

            <button type='submit'>Cadastrar</button>
            
        </Container>
        </Modal>
    )
}