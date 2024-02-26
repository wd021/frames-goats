import { getFrameMetadata } from '@coinbase/onchainkit/core';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Random 🐐 Moment',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/goats.png`,
    // aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/random-moment`,
});

export const metadata: Metadata = {
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

export default function Page() {
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
