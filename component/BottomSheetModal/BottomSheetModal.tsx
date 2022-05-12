import React from 'react';

type BottomSheetModalProps = {
  closeBottomSheet: () => void;
  onChangeText: (text: string) => void;
};

const BottomSheetModal = (props: BottomSheetModalProps) => {
  const [text, setText] = React.useState('');
  const textAreaRef = React.createRef<HTMLTextAreaElement>();
  React.useEffect(() => {
    const scrollTop = () => window.scrollTo(0, 0);
    const disableScroll = (e: Event) => {
      e.preventDefault();
      scrollTop();
    };
    scrollTop();

    window.addEventListener('scroll', disableScroll);

    return () => {
      window.removeEventListener('scroll', disableScroll);
    };
  }, []);

  return (
    <div className="bottom-sheet-modal">
      <div className="bottom-sheet-modal-background" onClick={props.closeBottomSheet} />
      <div className="bottom-sheet-modal-foreground">
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            props.onChangeText(textAreaRef.current?.value ?? '');
          }}>
          <textarea
            ref={textAreaRef}
            autoFocus
            onChange={(e) => setText(e.target.value)}
            className="bottom-sheet-textarea"
          />
          <div className="bottom-sheet-text-length">{text.length}/150</div>
          <input type="submit" value="완료" className="bottom-sheet-submit-button" />
        </form>
      </div>
    </div>
  );
};

export default BottomSheetModal;
