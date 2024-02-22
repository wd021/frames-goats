import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import { getRandomKey } from '../../../utils/helpers';
import nftData from '../../data/nft.json';

/*
function getNextAndPrevKeys<T>(
  obj: T,
  currentKey: keyof T,
): { next: keyof T | null; prev: keyof T | null } {
  const keys = Object.keys(obj) as Array<keyof T>;
  const currentIndex = keys.indexOf(currentKey);

  // Ensure the current key exists
  if (currentIndex === -1) {
    return { next: null, prev: null };
  }

  const nextIndex = currentIndex + 1;
  const prevIndex = currentIndex - 1;

  const nextKey = keys[nextIndex] !== undefined ? keys[nextIndex] : null;
  const prevKey = keys[prevIndex] !== undefined ? keys[prevIndex] : null;

  return { next: nextKey, prev: prevKey };
}
*/

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const randomKey = getRandomKey(nftData);
  const randomNft: any = nftData[randomKey];

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: 'mint',
          label: 'Mint',
          target: randomNft.mint,
        },
      ],
      image: {
        src: randomNft.image,
      },
      // postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
