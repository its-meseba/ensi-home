'use client';

import React, { useState, useEffect } from 'react';
import PhoneWrapper from './phone-wrapper';

const FlutterIframe = ({
  url,
  isSmallCard = false,
}: {
  url: string;
  isSmallCard?: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleReceiveMessage = (event: MessageEvent) => {
      // Make sure to check the origin of the received message
      if (event.origin !== new URL(url).origin) {
        return; // Ignore messages that are not from your Flutter web app
      }

      console.log('Received message from Flutter:', event.data);
    };

    // Add event listener for receiving messages
    window.addEventListener('message', handleReceiveMessage);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('message', handleReceiveMessage);
    };
  }, [url]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <PhoneWrapper>
      <div className="relative size-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="flex flex-col items-center gap-4">
              <div className="border-t-primary size-8 animate-spin rounded-full border-4 border-gray-300"></div>
              <p className="text-sm text-gray-500">Loading application...</p>
            </div>
          </div>
        )}
        <iframe
          src={url}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: isLoading ? 'none' : 'block',
          }}
          title="Ensi Home Mobil Uygulama"
          className={
            isSmallCard
              ? 'h-[384px]' // Reduced from 513px by 25%
              : 'sm:h-84 lg:h-108 xl:h-120 h-72 md:h-96' // All heights reduced by 25%
          }
          onLoad={handleIframeLoad}
        />
      </div>
    </PhoneWrapper>
  );
};

export default FlutterIframe;
