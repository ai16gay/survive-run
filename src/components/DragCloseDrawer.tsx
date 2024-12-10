/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from 'framer-motion';
import { type Dispatch, type ReactNode, type SetStateAction } from 'react';
import useMeasure from 'react-use-measure';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

const DragCloseDrawer = ({ open, setOpen, children }: Props) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === 'number' ? y.get() : 0;

    await animate('#drawer', {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 overflow-hidden bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{
              ease: 'easeInOut',
            }}
            className={`
              absolute bottom-0 w-full overflow-hidden rounded-t-3xl
              bg-neutral-900
            `}
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div
              className={`
                absolute inset-x-0 top-0 z-10 flex justify-center bg-neutral-900
                p-4
              `}
            >
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className={`
                  h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700

                  active:cursor-grabbing
                `}
              ></button>
            </div>
            <div className="relative z-0 mt-12 h-full p-4 pb-10">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default DragCloseDrawer;
