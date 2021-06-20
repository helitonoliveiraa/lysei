import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from 'react';

import { SuccessModal } from '../components/SuccessModal';
import { EditModal } from '../components/EditModal';

type ContextData = {
  handleEditModal: () => void;
  handleSuccessModal: () => void;
};

type ModalContextProviderProps = {
  children: ReactNode;
};

const ModalContex = createContext({} as ContextData);

export function ModalContextProvider({
  children,
}: ModalContextProviderProps): JSX.Element {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  useEffect(() => {}, [openEditModal, openSuccessModal]);

  function handleEditModal() {
    setOpenEditModal(prevState => !prevState);
  }

  function handleSuccessModal() {
    setOpenSuccessModal(prevState => !prevState);
  }

  return (
    <ModalContex.Provider value={{ handleEditModal, handleSuccessModal }}>
      {children}
      {openSuccessModal && <SuccessModal />}
      {openEditModal && <EditModal />}
    </ModalContex.Provider>
  );
}

export function useModal(): ContextData {
  const context = useContext(ModalContex);

  return context;
}
