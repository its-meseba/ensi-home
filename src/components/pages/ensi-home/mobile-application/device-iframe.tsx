import React, { useEffect } from 'react';
import PhoneWrapper from './phone-wrapper';

const FlutterIframe = ({ url }) => {
  useEffect(() => {
    const handleReceiveMessage = (event) => {
      // Make sure to check the origin of the received message
      if (event.origin !== url) {
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

  return (
    <PhoneWrapper>
      <iframe
        src={url}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Ensi Home Mobil Uygulama"
        className="sm:h-112 md:h-128 lg:h-144 xl:h-160 h-96"
      />
    </PhoneWrapper>
  );
};

export default FlutterIframe;
