import React from 'react';

interface iPhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export function TwoComponentiPhoneMockup({
  children,
  className = '',
}: iPhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto h-[420px] w-[200px] rounded-[2rem] border-[10px] border-gray-800 bg-gray-800 shadow-xl dark:border-gray-800 ${className}
        sm:h-[480px] sm:w-[230px]
        md:h-[540px] md:w-[260px]
        lg:h-[600px] lg:w-[290px]
      `}
    >
      <div className="absolute left-1/2 top-0 h-[10px] w-[90px] -translate-x-1/2 rounded-b-[0.8rem] bg-gray-800"></div>
      <div className="absolute -left-[12px] top-[80px] h-[32px] w-[2px] rounded-l-lg bg-gray-800"></div>
      <div className="absolute -left-[12px] top-[124px] h-[32px] w-[2px] rounded-l-lg bg-gray-800"></div>
      <div className="absolute -right-[12px] top-[100px] h-[48px] w-[2px] rounded-r-lg bg-gray-800"></div>
      <div
        className="h-[400px] w-[180px] overflow-hidden rounded-[1.7rem] bg-white sm:h-[460px]
          sm:w-[210px] md:h-[520px]
          md:w-[240px] lg:h-[580px]
          lg:w-[270px] dark:bg-gray-800
        "
      >
        {children}
      </div>
    </div>
  );
}

export function ThreeComponentiPhoneMockup({
  children,
  className = '',
}: iPhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto h-[360px] w-[180px] rounded-3xl border-8 border-gray-800 bg-gray-800 shadow-xl dark:border-gray-800 ${className}
        sm:h-[400px] sm:w-[200px]
        md:h-[440px] md:w-[220px]
        lg:h-[480px] lg:w-[240px]
      `}
    >
      <div className="absolute left-1/2 top-0 h-[8px] w-[70px] -translate-x-1/2 rounded-b-lg bg-gray-800"></div>
      <div className="absolute -left-[10px] top-[70px] h-[28px] w-[2px] rounded-l-lg bg-gray-800"></div>
      <div className="absolute -left-[10px] top-[110px] h-[28px] w-[2px] rounded-l-lg bg-gray-800"></div>
      <div className="absolute -right-[10px] top-[90px] h-[40px] w-[2px] rounded-r-lg bg-gray-800"></div>
      <div
        className="h-[344px] w-[164px] overflow-hidden rounded-[1.3rem] bg-white sm:h-[384px]
          sm:w-[184px] md:h-[424px]
          md:w-[204px] lg:h-[464px]
          lg:w-[224px] dark:bg-gray-800
        "
      >
        {children}
      </div>
    </div>
  );
}
