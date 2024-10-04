// components/VisitorTypeSelector.tsx
'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown, User, Building, Briefcase } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useVisitorType } from '@/context/VisitorTypeContext';

export function VisitorTypeSelector() {
  const { visitorType, setVisitorType } = useVisitorType();

  const getIcon = () => {
    switch (visitorType) {
      case 'homeOwner':
        return <User className="mr-2 size-4" />;
      case 'constructionCompany':
        return <Building className="mr-2 size-4" />;
      case 'businessOwner':
        return <Briefcase className="mr-2 size-4" />;
      default:
        return null;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto">
          {getIcon()}
          {visitorType
            ? visitorType.replace(/([A-Z])/g, ' $1').trim()
            : 'Select Type'}
          <ChevronDown className="ml-2 size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => setVisitorType('homeOwner')}>
          <User className="mr-2 size-4" /> Home Owner
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setVisitorType('constructionCompany')}>
          <Building className="mr-2 size-4" /> Construction Company
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setVisitorType('businessOwner')}>
          <Briefcase className="mr-2 size-4" /> Business Owner
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setVisitorType(null)}>
          <span className="mr-2 size-4">🚫</span> Clear Selection
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
