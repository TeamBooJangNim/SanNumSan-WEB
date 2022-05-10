import React from 'react';
import styles from './FloatingModal.module.scss';

type FloatingModalProps = {
  children: React.ReactNode;
  onCloseButtonClick: () => void;
};

const FloatingModal = (props: FloatingModalProps) => {
  return (
    <div className={styles.floatingModal}>
      <div></div>
      <div>
        <div>{props.children}</div>
        <div onClick={props.onCloseButtonClick}></div>
      </div>
    </div>
  );
};

export default FloatingModal;
