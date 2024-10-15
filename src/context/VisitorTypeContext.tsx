'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type VisitorType = 'homeOwner' | 'constructionCompany' | null;

interface VisitorTypeContextType {
  visitorType: VisitorType;
  setVisitorType: (type: VisitorType) => void;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
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
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedType = localStorage.getItem('visitorType') as VisitorType;
    if (storedType) {
      setVisitorType(storedType);
    } else {
      setShowModal(true);
    }
  }, []);

  const updateVisitorType = (type: VisitorType) => {
    setVisitorType(type);
    if (type) {
      localStorage.setItem('visitorType', type);
    } else {
      localStorage.removeItem('visitorType');
    }
    setShowModal(false);
  };

  return (
    <VisitorTypeContext.Provider
      value={{
        visitorType,
        setVisitorType: updateVisitorType,
        showModal,
        setShowModal,
      }}
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
