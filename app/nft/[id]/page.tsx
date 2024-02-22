import { getFrameMetadata } from '@coinbase/onchainkit/core';
import type { Metadata, ResolvingMetadata } from 'next';
import { NEXT_PUBLIC_URL } from '../../config';

import nftData from '../../data/nft.json';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Story time!',
    },
    {
      action: 'link',
      label: 'Link to Google',
      target: 'https://www.google.com',
    },
    {
      label: 'Redirect to pictures',
      action: 'post_redirect',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-3.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a boat story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

// export const metadata: Metadata = {
//   title: 'Goat Collection',
//   description: 'The Metaverse’s Hall of Fame 🐐🔥',
//   openGraph: {
//     title: 'Goat Collection',
//     description: 'The Metaverse’s Hall of Fame 🐐🔥',
//     images: [`${NEXT_PUBLIC_URL}/park-1.png`],
//   },
//   other: {
//     ...frameMetadata,
//   },
// };

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // get data from nftData
  const product = nftData[id as keyof typeof nftData];

  if (product) {
    console.log('product', product);

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || [];

    return {
      title: product.title,
      // openGraph: {
      //   images: ['/some-specific-page-image.jpg', ...previousImages],
      // },
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
