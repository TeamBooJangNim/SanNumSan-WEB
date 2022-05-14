import React from 'react';
import IconReset from '@/assets/icon/icon_reset.svg';

type FloatingModalProps = {
  children: React.ReactNode;
  onCloseButtonClick: () => void;
};

const FloatingModal = (props: FloatingModalProps) => {
  return (
    <div className="floating-modal">
      <div className="floating-modal-background" onClick={props.onCloseButtonClick}></div>
      <div className="floating-modal-foreground">
        <div>{props.children}</div>
      </div>
      <IconReset onClick={props.onCloseButtonClick} />
    </div>
  );
};

export default FloatingModal;
