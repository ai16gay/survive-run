'use client';
import { ArrowUpDown, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const History = () => {
  const [sortType, setSortType] = useState<'ASC' | 'DESC'>('ASC');

  return (
    <div className="container mx-auto h-screen overflow-hidden px-4 py-10">
      <div
        className={`
          flex h-[84px] items-center justify-between rounded-xl bg-black p-6
        `}
      >
        <Link href={'/'}>
          <X className="font-bold text-muted-foreground" size={25} />
        </Link>
        <div
          onClick={() => setSortType(sortType === 'ASC' ? 'DESC' : 'ASC')}
          className={`flex items-center justify-end gap-2 px-5`}
        >
          <p className="text-lg font-semibold text-[#d6fa23]">
            {sortType === 'ASC' ? '[Lastest]' : '[Oldest]'}
          </p>
          <ArrowUpDown className="text-[#308b10]" />
        </div>
      </div>
    </div>
  );
};

export default History;
