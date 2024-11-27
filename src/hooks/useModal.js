import {useState} from 'react'
import useEscapeKey from './useEscapeKey';

function useModal(initialState = false){

    const [isOpen, setIsOpen] = useState(initialState);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useEscapeKey(isOpen, closeModal);

    return {
        isOpen,
        openModal,
        closeModal,
    };
}

export default useModal;