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
import * as m from '@/paraglide/messages';

type VisitorType = 'homeOwner' | 'constructionCompany' | null;

interface VisitorTypeOption {
  type: Exclude<VisitorType, null>;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
}

const visitorTypes: VisitorTypeOption[] = [
  {
    type: 'homeOwner',
    label: m.userType_homeOwner(),
    shortLabel: 'Home',
    icon: User,
  },
  {
    type: 'constructionCompany',
    label: m.userType_constructionCompany(),
    shortLabel: 'Construct',
    icon: Building,
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
              <span>{m.userType_select()}</span>
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
          <span>{m.userType_clear_selection()}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
