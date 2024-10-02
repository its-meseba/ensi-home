// components/ModalPortal.tsx
'use client';

import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalPortalProps {
  children: ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  const modalRoot = document.getElementById('modal-root');
  if (modalRoot) {
    return ReactDOM.createPortal(children, modalRoot);
  }
  return null;
};

export default ModalPortal;
