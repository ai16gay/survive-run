'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import DragCloseDrawer from '@/components/DragCloseDrawer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface UserItemProps {
  avatar: string;
  username: string;
  value: number;
  currency: string;
  description: string;
  disabledPopup?: boolean;
}

const UserItem = ({
  avatar,
  currency,
  description,
  username,
  value,
  disabledPopup = false,
}: UserItemProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div onClick={() => value === 0 && setOpen(true)}>
      {!disabledPopup && (
        <DragCloseDrawer open={open} setOpen={setOpen}>
          <div className="px-4">
            <div className="text-center">
              <p className="text-xl font-medium">
                Would you buy{' '}
                <span className="text-xl uppercase">{username}?</span>
              </p>
              <p
                className={`
                  mt-2 text-lg font-medium leading-[1.2] text-muted-foreground
                `}
              >
                Trade <span className="text-lg uppercase">{username}</span> for
                more <br />
                activities and prizes!
              </p>
            </div>

            <div
              className={`
                my-6 flex items-center gap-4 rounded-xl bg-black px-6 py-4
              `}
            >
              <div className="relative size-10 overflow-hidden rounded-full">
                <div
                  className={`
                    absolute z-30 flex size-full items-center justify-center
                    bg-black/40
                  `}
                >
                  <div className="relative size-1/2">
                    <Image
                      src="/icons/lock.png"
                      className="object-contain"
                      alt=""
                      sizes="auto"
                      fill
                    />
                  </div>
                </div>
                <Image src={avatar} alt="" sizes="auto" fill className="z-10" />
              </div>
              <div className="font-medium">
                <p className="text-xl font-bold leading-[1.3]">{username}</p>
                <p className="text-lg leading-[1.3] text-muted-foreground">
                  NO VALUE
                </p>
              </div>
            </div>
            <Button
              className={`
                w-full border border-[#308b10] bg-black py-6 text-lg
                text-[#308b10]
              `}
              variant={'outline'}
              onClick={() => router.push('/trade')}
            >
              Go Trade
            </Button>
          </div>
          {/* <div className="px-4">
            <div
              className={`
                flex items-center justify-between rounded-xl bg-black p-4
                text-lg font-semibold text-[#308B10]
              `}
            >
              <p>Recommendation</p>
              <p>0.5%</p>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-6">
              <Button
                className={`h-10 rounded-lg bg-[#0f2c05] text-muted-foreground`}
              >
                0.3%
              </Button>
              <Button
                className={`h-10 rounded-lg bg-[#0f2c05] text-muted-foreground`}
              >
                0.5%
              </Button>
              <Button
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
          </div> */}
        </DragCloseDrawer>
      )}
      <div
        className={cn(
          'flex items-center gap-6 rounded-xl bg-black px-6 py-4',
          value === 0 &&
            'cursor-pointer hover:opacity-90 border border-[#308b10]',
        )}
      >
        {value !== 0 ? (
          <div className="relative size-10 overflow-hidden rounded-full">
            <Image src={avatar} alt="" sizes="auto" fill />
          </div>
        ) : (
          <div className="relative size-10 overflow-hidden rounded-full">
            <div
              className={`
                absolute z-30 flex size-full items-center justify-center
                bg-black/40
              `}
            >
              <div className="relative size-1/2">
                <Image
                  src="/icons/lock.png"
                  className="object-contain"
                  alt=""
                  sizes="auto"
                  fill
                />
              </div>
            </div>
            <Image src={avatar} alt="" sizes="auto" fill className="z-10" />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-[2px]">
          <div className="flex justify-between font-bold">
            <p className="text-lg">{username}</p>
            <p className="text-lg">{currency}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-muted-foreground">
              {value === 0 ? 'No value' : `${value} SOL`}
            </p>
            <p className="font-semibold text-[#348b16]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
