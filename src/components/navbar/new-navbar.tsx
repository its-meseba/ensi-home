'use client';

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Menu, ChevronDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { LanguageSwitcher } from './language-switcher';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import * as m from '@/paraglide/messages';

export default function NewNavbar() {
  const locale = m.locale();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsCollapsed(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsCollapsed(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = useMemo(
    () => [
      {
        title: m.navbar_main(),
        href: `/${locale}/`,
        description: '',
      },
      {
        title: m.navbar_solutions(),
        spanFirst: true,
        description: m.navbar_solutions_descriptions(),
        items: [
          {
            title: m.navbar_solutions_ensiBox(),
            href: `/${locale}/ensi-home/box`,
          },
          {
            title: m.navbar_solutions_ensiMobileApp(),
            href: `/${locale}/ensi-home/mobile-application`,
          },
          {
            title: m.navbar_solutions_ensiVoiceAssistant(),
            href: `/${locale}/ensi-home/ai-voice-assistant`,
          },
          {
            title: m.navbar_solutions_cloud(),
            href: `/${locale}/ensi-home/cloud`,
          },
          {
            title: m.navbar_solutions_smartLiving(),
            href: `/${locale}/ensi-home/smart-life-areas`,
          },
          {
            title: m.navbar_solutions_supportedDevices(),
            href: `/${locale}/ensi-home/compatible-smart-devices`,
          },
        ],
        explanation: 'Discover our comprehensive smart home solutions.',
        otherLinks: [
          { title: 'Compare Solutions', href: `/${locale}/solutions/compare` },
          { title: 'Case Studies', href: `/${locale}/solutions/case-studies` },
        ],
      },
      {
        title: m.navbar_knowledgeBase(),
        description: m.navbar_knowledgeBase_descriptions(),
        items: [
          {
            title: m.navbar_knowledgeBase_faq(),
            href: `/${locale}/knowledge-base/faq`,
          },
          {
            title: m.navbar_knowledgeBase_howItWorks(),
            href: `/${locale}/knowledge-base/how-it-works`,
          },
          {
            title: m.navbar_knowledgeBase_technicalSupport(),
            href: `/${locale}/knowledge-base/technical-knowledge-base`,
          },
          {
            title: m.navbar_knowledgeBase_contact(),
            href: `/${locale}/knowledge-base/contact`,
          },
        ],
        explanation:
          'Find answers and learn more about our smart home ecosystem.',
        otherLinks: [
          {
            title: 'Video Tutorials',
            href: `/${locale}/knowledge-base/tutorials`,
          },
          { title: 'Community Forum', href: `/${locale}/community` },
        ],
      },
    ],
    [locale]
  );

  const navVariants = {
    expanded: {
      width: '95%',
      height: '80px',
      borderRadius: '1.5rem',
      left: '2.5%',
      right: '2.5%',
      top: '16px',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      },
    },
    collapsed: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      right: '16px',
      top: '16px',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const contentVariants = {
    expanded: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay: 0.1,
      },
    },
    collapsed: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const NavItem = ({ item, isMobile = false }) => {
    const isOpen = openItem === item.title;

    const handleToggle = () => {
      setOpenItem(isOpen ? null : item.title);
    };

    if (item.items) {
      return (
        <div className="group relative">
          <button
            onClick={handleToggle}
            className="hover:text-primary flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium transition-colors"
          >
            {item.title === m.navbar_solutions() ? (
              <span className="flex items-center">
                <span className="bg-primary text-primary-foreground mr-1 rounded-3xl px-2 py-1 shadow-md">
                  {item.title.split(' ')[0]}
                </span>
                <span>{item.title.split(' ').slice(1).join(' ')}</span>
              </span>
            ) : (
              <span>{item.title}</span>
            )}
            <ChevronDown
              className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`${isMobile ? 'relative w-full' : 'absolute left-0'} bg-background border-border z-50 mt-2 w-64 overflow-hidden rounded-md border shadow-lg`}
              >
                {item.description && (
                  <div className="text-muted-foreground border-border border-b px-4 py-2 text-xs">
                    {item.description}
                  </div>
                )}
                <div
                  className="py-2"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {item.items.map((subitem) => (
                    <Link
                      key={subitem.href}
                      href={subitem.href}
                      className={`block px-4 py-2 text-sm ${
                        pathname === subitem.href
                          ? 'text-primary bg-accent'
                          : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                      } transition-colors duration-150 ease-in-out`}
                      role="menuitem"
                    >
                      {subitem.title}
                    </Link>
                  ))}
                </div>
                {item.otherLinks && (
                  <div className="border-border mt-2 border-t px-4 pt-2">
                    <p className="mb-2 text-sm font-medium">Other Resources:</p>
                    {item.otherLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground block py-1 text-sm"
                      >
                        <ArrowRight className="mr-1 inline-block size-4" />
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <Link
        href={item.href}
        className={`block px-4 py-2 text-sm font-medium ${pathname === item.href ? 'text-primary' : 'text-foreground hover:text-primary'}`}
      >
        {item.title}
      </Link>
    );
  };

  return (
    <motion.header
      className="bg-background fixed z-50 flex items-center shadow-lg"
      initial="expanded"
      animate={isCollapsed ? 'collapsed' : 'expanded'}
      variants={navVariants}
    >
      <div className="relative flex size-full items-center px-4 py-2">
        {/* Small screen layout */}
        <div className="flex w-full items-center lg:hidden">
          <Link href={`/${locale}`} className="mr-auto">
            <Image
              src={
                isCollapsed ? '/images/logo/small.svg' : '/images/logo/full.svg'
              }
              alt="Ensi Home"
              width={isCollapsed ? 40 : 100}
              height={40}
              className="transition-all duration-300 ease-in-out"
            />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              {isCollapsed ? null : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative z-50"
                  aria-label="Toggle menu"
                >
                  <Menu className="size-6" />
                </Button>
              )}
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between">
                  <Link href={`/${locale}`}>
                    <Image
                      src="/images/logo/full.svg"
                      alt="Ensi Home"
                      width={100}
                      height={40}
                    />
                  </Link>
                </div>
                <ul className="grow space-y-4">
                  {navigationItems.map((item) => (
                    <li key={item.title}>
                      <NavItem item={item} isMobile={true} />
                    </li>
                  ))}
                </ul>
                <div className="mt-auto space-y-4">
                  <Link href={`/${locale}/knowledge-base/how-it-is-done`}>
                    <Button variant="primary" className="w-full">
                      {m.navbar_howItIsDone()}
                    </Button>
                  </Link>
                  <Link href={`/${locale}/blog`}>
                    <Button variant="outline" className="w-full">
                      📰 Blog
                    </Button>
                  </Link>
                  <LanguageSwitcher />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Large screen layout */}
        <div className="hidden w-full items-center justify-between lg:flex">
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.nav
                key="nav"
                variants={contentVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                className="flex items-center space-x-6"
              >
                <ul className="flex items-center space-x-2">
                  {navigationItems.map((item) => (
                    <li key={item.title} className="relative">
                      <NavItem item={item} />
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
          <Link
            href={`/${locale}`}
            className="absolute left-1/2 -translate-x-1/2"
          >
            <Image
              src={
                isCollapsed ? '/images/logo/small.svg' : '/images/logo/full.svg'
              }
              alt="Ensi Home"
              width={isCollapsed ? 40 : 100}
              height={40}
              className="transition-all duration-300 ease-in-out"
            />
          </Link>
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.div
                key="actions"
                variants={contentVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                className="flex items-center space-x-4"
              >
                <Link href={`/${locale}/knowledge-base/how-it-is-done`}>
                  <Button variant="primary">{m.navbar_howItIsDone()}</Button>
                </Link>
                <Link href={`/${locale}/blog`}>
                  <Button variant="outline">📰 Blog</Button>
                </Link>
                <LanguageSwitcher />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
