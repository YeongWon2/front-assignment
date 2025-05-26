import { ReactNode } from 'react';

import clsx from 'clsx';

import { fetchRandomImage } from '@/modules/api/unsplash.api';

interface IRandomBackgroundImageProps {
  className?: string;
  height?: number;
  children?: ReactNode;
}

async function RandomBackgroundImage(props: IRandomBackgroundImageProps) {
  const { className, height = 740, children } = props;

  const imageData = await fetchRandomImage(
    'luxury landscape aerial cinematic nature premium scenic dramatic'
  );

  return (
    <div
      className={clsx(
        'relative w-full bg-cover bg-center bg-no-repeat',
        className
      )}
      style={{
        height: `${height}px`,
        backgroundImage: `url('${imageData.url}')`,
      }}
    >
      {children}
    </div>
  );
}

export default RandomBackgroundImage;
