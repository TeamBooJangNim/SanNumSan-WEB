import { BaseHead } from '@/component/Head/Head';
import Header from '@/component/Header/Header';
import { SanDetailGridView } from '@/component/SanDetailGridView/SanDetailGridView';
import { api } from '@/service/api';
import { ProveData, RemoteSanData } from '@/service/api/types/san';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import React from 'react';

interface ProveDetailProps {
  sanData: RemoteSanData;
  proveData: ProveData;
}

export default function ProveDetail(props: ProveDetailProps) {
  const { sanData, proveData } = props;
  return (
    <div>
      <BaseHead title="산넘어산 등반 기록" />
      <Header />
      <section className="san-detail">
        <SanDetailGridView {...{ ...sanData, name: `${proveData.userName}님의 \n${sanData.name} 등반 기록` }} />
        <div className="image-wrapper">
          <Image
            src={proveData.image}
            alt={sanData.name}
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </div>
        {proveData.comment.length !== 0 && <div className="comment-wrapper">{proveData.comment}</div>}
        <div className="prove-button-wrapper">
          <button className="prove-button">나도 등반 인증하기</button>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const sanID = +(params?.sanID ?? -1);
  const proveID = +(params?.proveID ?? -1);
  const response = await Promise.all([api.sanService.getSanDetail(sanID), api.sanService.getProveDetail(proveID)]);
  return { props: { sanData: response[0], proveData: response[1] } };
}
