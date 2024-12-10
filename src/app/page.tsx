import Image from 'next/image';
import Link from 'next/link';

import UserItem from '@/components/UserItem';
import { NAVIGATE_ITEMS, USER_ITEMS } from '@/constants/indext';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center gap-4 pt-10">
        <div className="relative size-10 overflow-hidden rounded-full">
          <Image
            src={'https://github.com/shadcn.png'}
            sizes="auto"
            alt=""
            fill
          />
        </div>
        <p className="font-semibold uppercase text-muted-foreground">
          @Dangtinh
        </p>
      </div>

      <div className="flex flex-col gap-4 py-10">
        <h1 className="text-center text-5xl font-bold">$256.56</h1>
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-[#102c06] px-4 py-2">
            <p className="flex items-center gap-3 font-semibold">
              <span className="text-[#348b16]">My ranking</span>
              <span className="text-xl text-[#83ed5c]">15/200(+5)</span>
            </p>
          </div>
          <p className="text-xl font-semibold text-muted-foreground">
            $56,890.568
          </p>
        </div>
        <div className="grid grid-cols-4 gap-x-6">
          {NAVIGATE_ITEMS.map((item) => (
            <Link
              href={item.link}
              key={item.title}
              className={`
                flex cursor-pointer flex-col gap-3 rounded-lg bg-[#102c06] p-4
              `}
            >
              <item.icon className="mx-auto text-[#348b16]" />
              <p
                className={`
                  text-center font-bold uppercase text-muted-foreground
                `}
              >
                {item.title}
              </p>
            </Link>
          ))}
        </div>

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

      <div
        className={`
          fixed bottom-10 left-1/2 flex w-3/5 -translate-x-1/2 items-center
          justify-center rounded-2xl bg-black/10 py-4
        `}
      >
        <div className="cursor-pointer select-none text-center">
          <Link
            href={'/play'}
            className="text-lg font-semibold uppercase text-[#f70c4b]"
          >
            start game
          </Link>
          <p className="text-[#9d062f]">(Let&apos;s start the war)</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
