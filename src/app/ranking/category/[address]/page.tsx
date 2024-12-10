import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import UserItem from '@/components/UserItem';
import { USER_ITEMS } from '@/constants/indext';

const Category = () => {
  return (
    <div className="container mx-auto h-screen overflow-hidden px-4 py-10">
      <div className={`flex h-[84px] items-center rounded-xl bg-black p-6`}>
        <Link href={'/ranking'}>
          <ChevronLeft className="font-bold text-muted-foreground" size={25} />
        </Link>
        <div
          className={`
            flex flex-1 items-center gap-6 px-5

            lg:justify-between
          `}
        >
          <div className="flex items-center gap-4">
            <p>1</p>
            <div className="flex items-center gap-2">
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image
                  src={'https://github.com/shadcn.png'}
                  alt=""
                  sizes="auto"
                  fill
                />
              </div>
              <p className="text-sm font-bold text-muted-foreground">
                @Dangtinh
              </p>
            </div>
          </div>
          <p className="font-semibold">143,534,785.04</p>
        </div>
      </div>

      <h1 className="mt-20 text-center text-5xl font-bold">$256.56</h1>
      <p className="my-4 text-center text-xl font-bold text-muted-foreground">
        $56.534.03
      </p>

      <div
        className={`
          flex max-h-[400px] flex-col gap-3 overflow-y-scroll scrollbar
        `}
      >
        {USER_ITEMS.map((item, _i) => (
          <UserItem
            key={_i}
            avatar={item.avatar}
            currency={item.currency}
            description={item.description}
            username={item.username}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
