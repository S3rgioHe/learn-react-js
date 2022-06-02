import { GlobalStyle } from '../src/styles/global';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { useState } from 'react';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root')


export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModalOpen() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModalOpen() {
      setIsNewTransactionModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModalOpen}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModalOpen}/>

      <GlobalStyle />
    </>
  );
}
