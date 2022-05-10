import React from 'react';
import styles from './BottomSheetModal.module.scss';

type BottomSheetModalProps = {
  onChangeText: (text: string) => void;
};

const BottomSheetModal = (props: BottomSheetModalProps) => {
  const textAreaRef = React.createRef<HTMLTextAreaElement>();
  return (
    <div className={styles.bottomSheetModal}>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          props.onChangeText(textAreaRef.current?.value ?? '');
        }}>
        <textarea ref={textAreaRef} />
        <input type="submit" value="완료" />
      </form>
    </div>
  );
};

export default BottomSheetModal;
