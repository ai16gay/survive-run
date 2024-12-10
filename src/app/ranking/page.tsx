import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Ranking = () => {
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
          className={`
            flex flex-1 flex-col items-center justify-center text-center
          `}
        >
          <p className="text-lg font-semibold text-[#308b10]">Leader Board</p>
          <p className="text-2xl font-bold text-[#7fed58]">$123,534,765.02</p>
        </div>
      </div>

      <div className="my-10 flex flex-col gap-6">
        <Link
          href={'/ranking/category/0xE7472b31ee450278616Ac7D7aeb899a3248B3cE2'}
          className={`
            flex items-center justify-between rounded-2xl border
            border-[#308b10] px-4 py-8 shadow-xl drop-shadow-lg
          `}
          style={{ boxShadow: '0px 0px 6px 0px #51C527' }}
        >
          <div className="flex gap-2">
            <div className="relative size-8 rounded-full">
              <Image src={'/icons/medal_top1.png'} alt="" sizes="auto" fill />
            </div>
            <div className="flex items-center gap-3">
              <div className={`relative size-8 overflow-hidden rounded-full`}>
                <Image
                  src={'https://github.com/shadcn.png'}
                  sizes="auto"
                  alt=""
                  fill
                />
              </div>
              <p className="text-sm font-bold text-muted-foreground">
                @DANGTINH
              </p>
            </div>
          </div>
          <p className="font-bold">1,423,647,756.06</p>
        </Link>

        <div className="flex flex-col gap-1">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 py-2`}
          >
            <div className="flex gap-2">
              <div className="relative size-8 rounded-full">
                <Image src={'/icons/medal_top2.png'} alt="" sizes="auto" fill />
              </div>
              <div className="flex items-center gap-3">
                <div className={`relative size-8 overflow-hidden rounded-full`}>
                  <Image
                    src={'https://github.com/shadcn.png'}
                    sizes="auto"
                    alt=""
                    fill
                  />
                </div>
                <p className="text-sm font-bold text-muted-foreground">
                  @DANGTINH
                </p>
              </div>
            </div>
            <p className="font-bold">1,423,647,756.06</p>
          </div>
          <div
            className={`flex items-center justify-between rounded-2xl px-4 py-2`}
          >
            <div className="flex gap-2">
              <div className="relative size-8 rounded-full">
                <Image src={'/icons/medal_top3.png'} alt="" sizes="auto" fill />
              </div>
              <div className="flex items-center gap-3">
                <div className={`relative size-8 overflow-hidden rounded-full`}>
                  <Image
                    src={'https://github.com/shadcn.png'}
                    sizes="auto"
                    alt=""
                    fill
                  />
                </div>
                <p className="text-sm font-bold text-muted-foreground">
                  @DANGTINH
                </p>
              </div>
            </div>
            <p className="font-bold">1,423,647,756.06</p>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col">
        <div className="flex flex-col gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`
                flex items-center justify-between rounded-3xl bg-[#242222] px-4
                py-2
              `}
            >
              <div className="flex gap-2">
                <div
                  className={`
                    relative flex size-8 items-center justify-center
                    rounded-full font-bold text-muted-foreground
                  `}
                >
                  {i + 3}
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`relative size-8 overflow-hidden rounded-full`}
                  >
                    <Image
                      src={'https://github.com/shadcn.png'}
                      sizes="auto"
                      alt=""
                      fill
                    />
                  </div>
                  <p className="text-sm font-bold text-muted-foreground">
                    @DANGTINH
                  </p>
                </div>
              </div>
              <p className="font-bold">1,423,647,756.06</p>
            </div>
          ))}
        </div>
        <div
          className={`
            fixed bottom-10 left-1/2 flex -translate-x-1/2 items-center
            justify-between gap-4
          `}
        >
          <ChevronLeft />
          <div>1/2</div>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Ranking;
