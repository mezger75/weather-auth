import Image from 'next/image';
import Link from 'next/link';

import { imagesData } from '@/lib/data';

export const HomePageContent = () => {
  return (
    <div className="flex flex-row gap-10">
      {imagesData.map(({ src, alt, href }) => (
        <Link key={href} href={href} target="_blank" rel="noopener noreferrer">
          <Image
            src={src}
            alt={alt}
            width={200}
            height={200}
            className="w-[100px] h-[100px] hover:rotate-180 transition duration-400"
          />
        </Link>
      ))}
    </div>
  );
};
