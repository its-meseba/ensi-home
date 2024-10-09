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
        return <User className="size-4" />;
      case 'constructionCompany':
        return <Building className="size-4" />;
      case 'businessOwner':
        return <Briefcase className="size-4" />;
      default:
        return null;
    }
  };

  const getLabel = () => {
    if (!visitorType) return 'Select';
    const label = visitorType.replace(/([A-Z])/g, ' $1').trim();
    return label.split(' ')[0]; // Return only the first word for small screens
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto">
          {getIcon()}
          <span className="ml-2 hidden sm:inline">{getLabel()}</span>
          <span className="ml-2 sm:hidden">{visitorType ? '' : 'Select'}</span>
          <ChevronDown className="ml-2 size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setVisitorType('homeOwner')}>
          <User className="mr-2 size-4" />{' '}
          <span className="hidden sm:inline">Home Owner</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setVisitorType('constructionCompany')}>
          <Building className="mr-2 size-4" />{' '}
          <span className="hidden sm:inline">Construction Company</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setVisitorType('businessOwner')}>
          <Briefcase className="mr-2 size-4" />{' '}
          <span className="hidden sm:inline">Business Owner</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setVisitorType(null)}>
          <span className="mr-2 size-4">🚫</span>{' '}
          <span className="hidden sm:inline">Clear Selection</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
