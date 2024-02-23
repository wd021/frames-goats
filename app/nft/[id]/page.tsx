import { getFrameMetadata } from '@coinbase/onchainkit/core';
import type { Metadata, ResolvingMetadata } from 'next';
import { NEXT_PUBLIC_URL, ZORA_URL } from '../../config';

import nftData from '../../data/nft.json';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.id;
  const nft = nftData[id as keyof typeof nftData];

  if (nft) {
    const frameMetadata = getFrameMetadata({
      buttons: [
        {
          action: 'link',
          label: '👀 Watch Reel',
          target: nft.video,
        },
        {
          action: 'link',
          label: 'Mint',
          target: ZORA_URL + id,
        },
      ],
      image: {
        src: 'https://frames.goatcollection.xyz/images/' + id + '.png',
        aspectRatio: '1:1',
      },
    });

    return {
      title: 'Goat Collection',
      description: 'The Metaverse’s Hall of Fame 🐐🔥',
      openGraph: {
        title: 'Goat Collection',
        description: 'The Metaverse’s Hall of Fame 🐐🔥',
        images: [`${NEXT_PUBLIC_URL}/goats.png`],
      },
      other: {
        ...frameMetadata,
      },
    };
  }

  return {
    title: 'Not found',
  };
}

export default function Page({ params, searchParams }: Props) {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
      }}
    >
      🖼️ 🐐
    </div>
  );
}
