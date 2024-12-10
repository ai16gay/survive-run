'use client';
import { SlidersHorizontal, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import DragCloseDrawer from '@/components/DragCloseDrawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import UserItem from '@/components/UserItem';
import { USER_ITEMS } from '@/constants/indext';

const Trade = () => {
  const [openTradePopup, setOpenTradePopup] = useState(false);

  return (
    <div className="container mx-auto min-h-screen px-4 py-10">
      <DragCloseDrawer open={openTradePopup} setOpen={setOpenTradePopup}>
        <div className="px-4">
          <div
            className={`
              flex items-center justify-between rounded-xl bg-black p-4 text-lg
              font-semibold text-[#308B10]
            `}
          >
            <p>Recommendation</p>
            <p>0.5%</p>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-6">
            <Button
              type="button"
              className={`h-10 rounded-lg bg-[#0f2c05] text-muted-foreground`}
            >
              0.3%
            </Button>
            <Button
              type="button"
              className={`h-10 rounded-lg bg-[#0f2c05] text-muted-foreground`}
            >
              0.5%
            </Button>
            <Button
              type="button"
              className={`h-10 rounded-lg bg-[#0f2c05] text-muted-foreground`}
            >
              1%
            </Button>
            <Input
              min={0}
              max={100}
              type="number"
              className="h-10 rounded-lg bg-[#0f2c05] p-4"
              placeholder="0.0%"
            />
          </div>

          <Button
            className={`
              mt-36 h-10 w-full rounded-lg border border-[#308b10] bg-black
              text-[#308b10]
            `}
            variant={'outline'}
          >
            Confirm
          </Button>
        </div>
      </DragCloseDrawer>
      <div
        className={`
          flex h-[84px] items-center justify-between rounded-xl bg-black p-6
        `}
      >
        <Link href={'/'}>
          <X className="font-bold text-muted-foreground" size={25} />
        </Link>
        <div
          className={`flex items-center justify-end gap-3 px-5`}
          onClick={() => setOpenTradePopup((prev) => !prev)}
        >
          <SlidersHorizontal size={18} />
          <span className="text-lg font-semibold text-[#308b10]">0.5%</span>
        </div>
      </div>

      <div className="my-6 flex flex-col gap-2">
        <div
          className={`
            rounded-2xl border border-[#308b10] p-4 shadow-xl drop-shadow-lg
          `}
          style={{ boxShadow: '0px 0px 6px 0px #51C527' }}
        >
          <p className="font-medium text-[#9DA39A]">pay</p>
          <p className="mb-2 mt-3 text-3xl font-semibold">0</p>
          <p className="font-medium text-[#555A53]">0.5863528 FWOG</p>
        </div>
        <div
          className={`
            rounded-2xl border border-[#308b10] p-4 shadow-xl drop-shadow-lg
          `}
          style={{ boxShadow: '0px 0px 6px 0px #51C527' }}
        >
          <p className="font-medium text-[#9DA39A]">pay</p>
          <p className="mb-2 mt-3 text-3xl font-semibold">0</p>
          <div className="flex items-center justify-between">
            <p className="font-medium text-[#555A53]">0.5863528 FWOG</p>
            <p className="font-medium text-[#555A53]">
              prize money:{' '}
              <span className="font-semibold text-[#7FED58]">$0</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="my-2 text-lg font-semibold">Other tokens:</p>
        <div className={`flex flex-col gap-3 overflow-y-scroll scrollbar`}>
          {USER_ITEMS.map((item, _i) => (
            <UserItem
              disabledPopup
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
    </div>
  );
};

export default Trade;
