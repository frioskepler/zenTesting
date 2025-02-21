import React from 'react';
interface ModalProps {
    options: string[];
    onClose: (selectedValue: string) => void;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
