import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export let PostContainer = ({ children }: { children: ReactNode }) => (
  <ul className="horizontal-pad flex flex-wrap items-stretch gap-[20px] pb-[64px] lg:pb-[80px]">
    {children}
  </ul>
);

export type PostTileProps = {
  title: string;
  src: string | StaticImport;
  dateStr: string;
  href: string;
};

export let PostTile = ({ title, src, dateStr, href }: PostTileProps) => (
  <li className="group relative mt-[24px] flex w-full list-none flex-col overflow-hidden rounded-[16px] bg-white md:w-[333px] lg:mt-[36px] lg:w-[303px]">
    <Link href={href} className="flex h-full w-full flex-col">
      <div className="relative h-[187px] overflow-hidden lg:h-[266px]">
        <Image
          src={src}
          className="transform object-cover transition-[400ms_cubic-bezier(0.4,0,0.25,1)_0ms,opacity_1s_cubic-bezier(0.4,0,0.25,1)_0ms] group-hover:scale-105"
          fill
          alt=""
        />
      </div>
      <div className="flex grow flex-col justify-between p-[24px] lg:p-[32px]">
        <div className="text-[19px] font-bold lg:text-[24px]">{title}</div>
        <div className="mt-[8px] text-[14px] font-semibold text-[#6e6e73] lg:mt-[12px]">
          {dateStr}
        </div>
      </div>
    </Link>
  </li>
);
