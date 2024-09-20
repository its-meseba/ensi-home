'use client';

import { useEffect, useState } from 'react';

import { LanguageSwitcher } from './language-switcher';

import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n';
import * as m from '@/paraglide/messages';

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed w-full transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="bg-white/80 shadow-md backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <EnsiHomeIcon className="size-8" />
          </Link>
          <nav className="flex items-center space-x-4">
            <NavLink href="/box">{m.box()}</NavLink>
            <NavLink href="/mobile-app">{m.mobile_app()}</NavLink>
            <NavLink href="/discover">{m.discover()}</NavLink>
            <NavLink href="/support">{m.support()}</NavLink>
          </nav>
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <Button variant="primary">{m.buy()}</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-sm font-medium text-gray-700 hover:text-gray-900"
  >
    {children}
  </Link>
);

const EnsiHomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
  </svg>
);
