import React from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      //show-modal has css visibile, normal modal is hidden, therefore modal always exists
      // but whether its hidden or not changes on whether show modal is true or false
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
