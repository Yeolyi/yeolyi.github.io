import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export let PostContainer = ({ children }: { children: ReactNode }) => (
  <ul className="horizontal-pad flex flex-wrap items-stretch gap-[20px] pb-[64px] lg:pb-[80px]">
    {children}
  </ul>
);

export type PostTileProps = {
  title: string;
  src: string;
  objectFit: 'contain' | 'cover';
  dateStr: string;
  href: string;
};

export let PostTile = ({
  title,
  src,
  dateStr,
  href,
  objectFit,
}: PostTileProps) => (
  <li className="group relative mt-[24px] flex w-full list-none flex-col overflow-hidden rounded-[16px] bg-white md:w-[333px] lg:mt-[36px] lg:w-[303px]">
    <Link to={href} className="flex h-full w-full flex-col">
      <img
        src={src}
        className={`relative h-[187px] w-full transform bg-center transition-[400ms_cubic-bezier(0.4,0,0.25,1)_0ms,opacity_1s_cubic-bezier(0.4,0,0.25,1)_0ms] group-hover:scale-105 lg:h-[266px] ${objectFit === 'cover' ? 'object-cover' : 'object-contain p-4'}`}
        alt=""
      />
      <div className="flex grow flex-col justify-between p-[24px] lg:p-[32px]">
        <div className="text-[19px] font-bold lg:text-[24px]">{title}</div>
        <div className="mt-[8px] text-[14px] font-semibold text-[#6e6e73] lg:mt-[12px]">
          {dateStr}
        </div>
      </div>
    </Link>
  </li>
);
