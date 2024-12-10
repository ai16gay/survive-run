'use client';
import { Copy, QrCode, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { USER_ITEMS } from '@/constants/indext';
import { shortenAddress } from '@/utils/shortenAddress.util';

type WithdrawStep = 'select' | 'send' | 'confirm';

const Receive = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [withdrawStep, setWithdrawStep] = useState<WithdrawStep>('select');
  const [address, setAddress] = useState('');

  const cancelWithdrawRef = useRef<HTMLButtonElement>(null);

  const handleCloseWithdraw = () => {
    setAddress('');
    setWithdrawStep('select');
    cancelWithdrawRef.current?.click();
  };

  const handleCopy = async (content: string) => {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto h-screen overflow-hidden px-4 py-10">
      <div
        className={`
          flex h-[84px] items-center justify-between rounded-xl bg-black p-6
        `}
      >
        {!isCopied ? (
          <>
            <Link href={'/'}>
              <X className="font-bold text-muted-foreground" size={25} />
            </Link>
            <div className="flex gap-3">
              <div
                className={`
                  flex size-12 items-center justify-center rounded-lg
                  bg-[#1a1919]
                `}
              >
                <QrCode size={22} className="text-[#7fed58]" />
              </div>
              <div
                onClick={() =>
                  handleCopy('0xE7472b31ee450278616Ac7D7aeb899a3248B3cE2')
                }
                className={`
                  flex size-12 items-center justify-center rounded-lg
                  bg-[#1a1919]
                `}
              >
                <Copy size={22} />
              </div>
            </div>
          </>
        ) : (
          <div
            className={`
              w-full rounded-full border border-[#47b420] py-4 text-center
              font-semibold text-[#d6fa23] transition-all
            `}
          >
            copied!
          </div>
        )}
      </div>

      <div className="relative mx-auto my-14 size-80 overflow-hidden rounded-lg">
        <Image src={'/qr.png'} alt="" sizes="auto" fill />
      </div>

      <p className="text-center text-2xl font-semibold">MY SOL Address</p>
      <p
        className={`
          my-3 text-center text-lg font-medium leading-[1.4]
          text-muted-foreground
        `}
      >
        Please ensure that{' '}
        <span className="text-lg leading-[1.4] text-white">only SOL</span> is
        sent here. Sending any other assets{' '}
        <span className="text-lg leading-[1.4] text-white">
          may lead to loss.
        </span>
      </p>
      <div
        className={`
          mt-8 flex w-full items-center justify-between rounded-full bg-black
          px-8 py-4
        `}
      >
        <p className="text-lg font-semibold text-muted-foreground">
          {shortenAddress('0xE7472b31ee450278616Ac7D7aeb899a3248B3cE2')}
        </p>
        <Copy size={20} />
      </div>

      <div className="my-16 flex justify-center">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              className="mx-auto text-lg text-[#308b10] underline"
              variant={'ghost'}
            >
              Withdraw
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-black">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center">Send</AlertDialogTitle>
            </AlertDialogHeader>
            {withdrawStep === 'select' && (
              <div
                className={`
                  mb-10 flex max-h-96 min-h-[50vh] flex-col gap-2
                  overflow-y-scroll
                `}
              >
                {USER_ITEMS.map((item, _i) => (
                  <div
                    className="flex items-center gap-4 p-4"
                    key={_i}
                    onClick={() => setWithdrawStep('send')}
                  >
                    <div
                      className={`relative size-16 overflow-hidden rounded-full`}
                    >
                      <Image src={item.avatar} alt="" sizes="auto" fill />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold text-white">
                        {item.username}
                      </p>
                      <p className="text-lg text-muted-foreground">
                        {item.value} SOL
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {withdrawStep === 'send' && (
              <div className="min-h-[50vh]">
                <Input
                  className="rounded-full border border-[#46b31f] p-6"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />

                <div className="my-10">
                  <p className="text-lg font-semibold text-[#308b10]">Recent</p>
                  <div className="my-3 flex flex-col gap-2">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className={`
                          flex justify-between rounded-lg bg-[#1a1919] p-4
                          text-muted-foreground
                        `}
                      >
                        <p>1d ago</p>
                        <p>
                          {shortenAddress(
                            '0xE7472b31ee450278616Ac7D7aeb899a3248B3cE2',
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {withdrawStep === 'confirm' && (
              <div className="min-h-[50vh]">
                <Input
                  className="rounded-full border border-[#46b31f] p-6"
                  placeholder="Address"
                  value={address}
                  disabled
                />

                <div className="mt-32">
                  <div
                    className={`
                      my-6 flex flex-col items-center justify-center gap-2
                      text-center
                    `}
                  >
                    <p className="text-5xl font-bold">0.32 SOL</p>
                    <p className="text-3xl font-semibold text-muted-foreground">
                      $32
                    </p>
                  </div>

                  <div className="mt-40">
                    <p className="text-muted-foreground">transfer possible</p>
                    <div className="flex justify-between">
                      <p>0.389162398</p>
                      <p>MAX</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <AlertDialogFooter>
              <AlertDialogCancel className="hidden" ref={cancelWithdrawRef} />
              <Button
                variant={'outline'}
                className="h-10 font-semibold"
                onClick={handleCloseWithdraw}
              >
                Cancel
              </Button>
              {address && (
                <Button
                  variant={'default'}
                  className="h-10 bg-[#308b10]"
                  onClick={() => {
                    if (withdrawStep === 'send') {
                      setWithdrawStep('confirm');
                    }
                  }}
                >
                  {withdrawStep === 'send' ? 'Next' : 'SEND'}
                </Button>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Receive;
