import Image from 'next/image';

interface IAvatarProps {
  imgUrl: string;
}

function Avatar({ imgUrl }: IAvatarProps) {
  return (
    <div className="inline-block rounded-full ring-2 ring-white">
      <Image src={imgUrl} alt={'아바타 이미지'} width={108} height={108} />
    </div>
  );
}

export default Avatar;
