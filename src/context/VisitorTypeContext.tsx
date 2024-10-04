'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type VisitorType = 'homeOwner' | 'constructionCompany' | 'businessOwner' | null;

interface VisitorTypeContextType {
  visitorType: VisitorType;
  setVisitorType: (type: VisitorType) => void;
}

const VisitorTypeContext = createContext<VisitorTypeContextType | undefined>(
  undefined
);

export function VisitorTypeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visitorType, setVisitorType] = useState<VisitorType>(null);

  useEffect(() => {
    const storedType = localStorage.getItem('visitorType') as VisitorType;
    if (storedType) {
      setVisitorType(storedType);
    }
  }, []);

  const updateVisitorType = (type: VisitorType) => {
    setVisitorType(type);
    localStorage.setItem('visitorType', type as string);
  };

  return (
    <VisitorTypeContext.Provider
      value={{ visitorType, setVisitorType: updateVisitorType }}
    >
      {children}
    </VisitorTypeContext.Provider>
  );
}

export const useVisitorType = () => {
  const context = useContext(VisitorTypeContext);
  if (context === undefined) {
    throw new Error('useVisitorType must be used within a VisitorTypeProvider');
  }
  return context;
};
