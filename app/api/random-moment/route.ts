import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import { getRandomKey } from '../../../utils/helpers';
import nftData from '../../data/nft.json';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const randomKey = getRandomKey(nftData);
  const randomNft: any = nftData[randomKey];

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: 'post',
          label: '🔄 Random',
        },
        {
          action: 'link',
          label: '👀 Watch Reel',
          target: randomNft.video,
        },
        {
          action: 'mint',
          label: 'Mint',
          target: randomNft.mint,
        },
      ],
      image: {
        src: 'https://frames.goatcollection.xyz/images/' + randomKey + '.png',
        aspectRatio: '1:1',
      },
      ogDescription: 'The Metaverse’s Hall of Fame 🐐🔥',
      ogTitle: 'Goat Collection',
      postUrl: `${NEXT_PUBLIC_URL}/api/random-moment`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
