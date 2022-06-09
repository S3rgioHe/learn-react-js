import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './style';
import closeImg from '../../assets/close.svg';
import income from '../../assets/incomeImg.svg';
import outcome from '../../assets/outcomeImg.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ onRequestClose, isOpen }: NewTransactionModalProps) {

    const [type, setType] = useState('deposit');

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
                
                <RadioBox
                    type='button'
                    onClick={() => { setType('deposit')}}
                    isActive={type === 'deposit'}
                    activeColor="green"
                >
                    <img src={income} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox
                    type='button'
                    onClick={() => { setType('withdraw')}}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                >
                    <img src={outcome} alt="saida" />
                    <span>Saida</span>
                </RadioBox>



            </TransactionTypeContainer>

            <input
                placeholder='categoria'
            />

            <button type='submit'>Cadastrar</button>
            
        </Container>
        </Modal>
    )
}