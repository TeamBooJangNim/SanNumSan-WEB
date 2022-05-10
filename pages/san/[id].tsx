import type { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from '@/component/Header/Header';
import { RemoteSanData } from '@/service/api/types/san';
import { api } from '@/service/api';
import Image from 'next/image';
import ProceedIcon from '@/assets/icon/icon_proceed.svg';
import ShareIcon from '@/assets/icon/icon_share.svg';
import ClimbUpIcon from '@/assets/icon/icon_up.svg';
import ClimbDownIcon from '@/assets/icon/icon_down.svg';
import FloatingModal from '@/component/FloatingModal/FloatingModal';
import BottomSheetModal from '@/component/BottomSheetModal/BottomSheetModal';

function SanDetail({ sanData }: { sanData: RemoteSanData }) {
  const { name, level, height, length, defaultImage } = sanData;
  const [image, setImage] = React.useState(defaultImage);
  const [comment, setComment] = React.useState('');
  const [editState, setEditState] = React.useState<
    'idle' | 'edit-modal-view' | 'write-bottomsheet-view' | 'complete' | 'save-modal-view'
  >('idle');
  const imageInputRef = React.createRef<HTMLInputElement>();
  const triggerImageBoxOpen = () => {
    imageInputRef.current?.dispatchEvent(new MouseEvent('click'));
  };

  const onImageInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const target = e.target as HTMLInputElement;
      if (!target.files) return;
      const file: File = (target.files as FileList)[0];
      setImage(URL.createObjectURL(file));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="san-detail">
        <div className="san-grid-table">
          <div className="title-wrapper">
            <div className="title">{name}</div>
          </div>
          <div className="level-wrapper">
            <div>level</div>
            <div>{level}</div>
          </div>
          <div className="height-wrapper">
            <div>height</div>
            <div>{height}</div>
          </div>
          <div className="length-wrapper">
            <div>length</div>
            <div>{length}</div>
          </div>
          <div className="time-wrapper">
            <div>climbing{'\n'}time</div>
            <div>
              <div>
                <ClimbUpIcon />
                <div>2:30</div>
              </div>
              <div>
                <ClimbDownIcon />
                <div>3:00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-wrapper">
          <Image
            src={image}
            alt={name}
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="cover"
            onClick={triggerImageBoxOpen}
          />
          <input type="file" accept="image/*" ref={imageInputRef} onChange={onImageInput} />
        </div>
        {comment.length !== 0 && <div className="comment-wrapper">{comment}</div>}
        <div className="button-wrapper">
          <ShareIcon />
          <div />
          {comment.length === 0 ? (
            <ProceedIcon onClick={() => setEditState('edit-modal-view')} />
          ) : (
            <ProceedIcon onClick={() => setEditState('save-modal-view')} />
          )}
        </div>
      </section>
      {(editState === 'edit-modal-view' || editState === 'write-bottomsheet-view') && (
        <FloatingModal onCloseButtonClick={() => setEditState('idle')}>
          <div>{name}</div>
          <Image src={image} alt="thumbnail image" layout="responsive" width="100%" height="100%" objectFit="cover" />
          <div>{new Date().getDate().toLocaleString()}</div>
          <div>{height}</div>
          <div>{length}</div>
          <div onClick={() => setEditState('write-bottomsheet-view')}>
            {comment.length === 0 ? <div>⛰ 등산 기록을 남겨보세요! ⛰</div> : <div>{comment}</div>}
          </div>
          <div>
            <div onClick={() => setEditState('idle')}></div>
            <div onClick={() => setEditState('complete')}></div>
          </div>
        </FloatingModal>
      )}
      {editState === 'write-bottomsheet-view' && (
        <BottomSheetModal
          onChangeText={(text: string) => {
            setComment(text);
            setEditState('edit-modal-view');
          }}
        />
      )}
      {editState === 'save-modal-view' && (
        <FloatingModal onCloseButtonClick={() => setEditState('idle')}>
          <div>{name}</div>
          <Image src={image} alt="thumbnail image" layout="responsive" width="100%" height="100%" objectFit="cover" />
          <div>{new Date().getDate().toLocaleString()}</div>
          <div>{height}</div>
          <div>{length}</div>
          <div>{comment}</div>
          <div></div>
        </FloatingModal>
      )}
    </main>
  );
}

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const id = +(params?.id ?? -1);
  const response = await api.sanService.getSanDetail(id);
  return { props: { sanData: response } };
}

export default SanDetail;
