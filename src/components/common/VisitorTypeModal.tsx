'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useVisitorType } from '@/context/VisitorTypeContext';

export function VisitorTypeModal() {
  const { visitorType, setVisitorType } = useVisitorType();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!visitorType) {
      setIsOpen(true);
    }
  }, [visitorType]);

  const handleSelect = (
    type: 'homeOwner' | 'constructionCompany' | 'businessOwner'
  ) => {
    setVisitorType(type);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome! What type of visitor are you?</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button onClick={() => handleSelect('homeOwner')}>Home Owner</Button>
          <Button onClick={() => handleSelect('constructionCompany')}>
            Construction Company
          </Button>
          <Button onClick={() => handleSelect('businessOwner')}>
            Business Owner
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
