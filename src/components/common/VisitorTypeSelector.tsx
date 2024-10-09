'use client';

import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  User,
  Building,
  Briefcase,
  LucideIcon,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useVisitorType } from '@/context/VisitorTypeContext';

type VisitorType = 'homeOwner' | 'constructionCompany' | 'businessOwner' | null;

interface VisitorTypeOption {
  type: Exclude<VisitorType, null>;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
}

const visitorTypes: VisitorTypeOption[] = [
  { type: 'homeOwner', label: 'Home Owner', shortLabel: 'Home', icon: User },
  {
    type: 'constructionCompany',
    label: 'Construction Company',
    shortLabel: 'Construct',
    icon: Building,
  },
  {
    type: 'businessOwner',
    label: 'Business Owner',
    shortLabel: 'Business',
    icon: Briefcase,
  },
];

export function VisitorTypeSelector() {
  const { visitorType, setVisitorType } = useVisitorType();

  const getCurrentType = () =>
    visitorTypes.find((t) => t.type === visitorType) || null;

  const currentType = getCurrentType();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto min-w-[120px] justify-start"
        >
          {currentType ? (
            <>
              <currentType.icon className="mr-2 size-4" />
              <span className="hidden sm:inline">{currentType.label}</span>
              <span className="sm:hidden">{currentType.shortLabel}</span>
            </>
          ) : (
            <>
              <User className="mr-2 size-4" />
              <span>Select</span>
            </>
          )}
          <ChevronDown className="ml-auto size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {visitorTypes.map(({ type, label, icon: Icon }) => (
          <DropdownMenuItem key={type} onClick={() => setVisitorType(type)}>
            <Icon className="mr-2 size-4" />
            <span>{label}</span>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem onClick={() => setVisitorType(null)}>
          <span className="mr-2 size-4">🚫</span>
          <span>Clear Selection</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
