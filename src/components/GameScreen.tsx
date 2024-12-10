'use client';
import { Loader } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const GameSreen = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    unityProvider,
    sendMessage,
    isLoaded,
    addEventListener,
    removeEventListener,
  } = useUnityContext({
    loaderUrl: '/build/Build/build.loader.js',
    dataUrl: '/build/Build/build.data.br',
    frameworkUrl: '/build/Build/build.framework.js.br',
    codeUrl: '/build/Build/build.wasm.br',
  });

  useEffect(() => {
    const handleSendMsg = () => {
      sendMessage(
        'GameController',
        'InputPlayer',
        JSON.stringify({
          coins: 999,
          percentage: 15,
        }),
      );
    };

    addEventListener('ReadyToChange', handleSendMsg);

    return () => {
      removeEventListener('ReadyToChange', handleSendMsg);
    };
  }, [isLoaded, addEventListener, removeEventListener, sendMessage]);

  return !isClient ? (
    <div className="flex h-screen w-screen items-center justify-center">
      <Loader size={30} className="animate-spin" />
    </div>
  ) : (
    <div className="flex h-screen w-screen items-center justify-center">
      <div
        className={`
          aspect-[9/19] w-full

          lg:w-1/2

          xl:w-96
        `}
      >
        <Unity unityProvider={unityProvider} className="size-full" />
      </div>
    </div>
  );
};

export default GameSreen;
