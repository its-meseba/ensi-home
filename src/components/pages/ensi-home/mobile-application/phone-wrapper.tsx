import React from 'react';

const PhoneWrapper = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex h-[580px] w-[280px] items-center justify-center rounded-[36px] bg-black p-2 shadow-lg sm:h-[780px] sm:w-[375px] sm:p-[10px_8px]">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-10 h-6 w-1/3 -translate-x-1/2 rounded-b-2xl bg-black" />
        {/* Speaker */}
        <div className="absolute left-1/2 top-2 z-10 h-1 w-12 -translate-x-1/2 rounded-full bg-gray-800" />
        {/* Camera */}
        <div className="absolute right-20 top-1.5 z-10 size-1.5 rounded-full bg-gray-700" />

        {/* Screen */}
        <div className="size-full overflow-hidden rounded-[24px] bg-white">
          {children}
        </div>

        {/* Home Button */}
        <div className="absolute bottom-2 left-1/2 h-1 w-1/3 -translate-x-1/2 rounded-full bg-gray-700" />
      </div>
    </div>
  );
};

export default PhoneWrapper;
