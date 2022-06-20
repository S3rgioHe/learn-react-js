import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './style';
import closeImg from '../../assets/close.svg';
import income from '../../assets/incomeImg.svg';
import outcome from '../../assets/outcomeImg.svg';
import { FormEvent, useState } from 'react';
import { api } from '../services/api';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ onRequestClose, isOpen }: NewTransactionModalProps) {

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            type,
            value,
            category
        };

        api.post('/transactions', data);
        
        onRequestClose();

        setTitle('');
        setType('deposit');
        setCategory('');
    }

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
        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>
            <input
                placeholder='Título'
                value={title}
                onChange={event => setTitle(event.target.value)}
            />
            <input
                type="number"
                placeholder="Valor"
                onChange={event => setValue(Number(event.target.value))}
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
                value={category}
                onChange={event => setCategory(event.target.value)}
            />

            <button type='submit'>Cadastrar</button>
            
        </Container>
        </Modal>
    )
}