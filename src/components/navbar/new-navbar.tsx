'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Menu, MoveRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

import { LanguageSwitcher } from './language-switcher';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import * as m from '@/paraglide/messages';

export const NewNavbar = () => {
  const locale = m.locale();
  const navigationItems = [
    {
      title: m.home(),
      href: `/${locale}/`,
      description: '',
    },
    {
      title: 'Nasıl Oluyor',
      href: `/${locale}/knowledge-base/how-it-is-done`,
      description: '',
      includedSmall: true,
    },
    {
      title: m.about_ensi_home(),
      spanFirst: true,
      description: m.about_ensi_home_description(),
      items: [
        {
          title: m.box(),
          href: `/${locale}/ensi-home/box`,
        },
        {
          title: m.mobile_app(),
          href: `/${locale}/ensi-home/mobile-application`,
        },
        {
          title: m.ai_voice_assistant(),
          href: `/${locale}/ensi-home/ai-voice-assistant`,
        },
        {
          title: 'Cloud',
          href: `/${locale}/ensi-home/cloud`,
        },
        {
          title: m.smart_life_areas(),
          href: `/${locale}/ensi-home/smart-life-areas`,
        },
        {
          title: m.compatible_smart_devices(),
          href: `/${locale}/ensi-home/compatible-smart-devices`,
        },
      ],
    },
    {
      title: m.support(),
      description: m.support_description(),
      items: [
        {
          title: m.faq(),
          href: `/${locale}/knowledge-base/faq`,
        },
        {
          title: m.how_it_works(),
          href: `/${locale}/knowledge-base/how-it-works`,
        },
        {
          title: m.technical_support(),
          href: `/${locale}/knowledge-base/technical-knowledge-base`,
        },
        {
          title: 'Contact',
          href: `/${locale}/knowledge-base/contact`,
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const lastScrollY = useRef(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsCollapsed(true);
        controls.start({
          y: [0, -10, 0],
          transition: { duration: 0.5, ease: 'easeInOut' },
        });
      } else if (currentScrollY < lastScrollY.current) {
        setIsCollapsed(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const navVariants = {
    expanded: {
      width: '95%',
      height: '80px',
      borderRadius: '1.5rem',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    collapsed: {
      width: '60px',
      height: '60px',
      borderRadius: '1.5rem',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const contentVariants = {
    expanded: {
      opacity: 1,
      transition: { delay: 0.2, duration: 0.2 },
    },
    collapsed: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.header
      className="bg-background fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-3xl shadow-lg"
      initial="expanded"
      animate={[isCollapsed ? 'collapsed' : 'expanded']}
      variants={navVariants}
    >
      <div className="relative flex size-full items-center justify-between px-4">
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              className="flex items-center space-x-4"
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
            >
              <NavigationMenu>
                <NavigationMenuList>
                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      {item.href ? (
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink className="text-sm font-medium">
                            {item.title}
                          </NavigationMenuLink>
                        </Link>
                      ) : (
                        <>
                          <NavigationMenuTrigger className="text-sm font-medium">
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {item.items?.map((subItem) => (
                                <li key={subItem.title}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={subItem.href}
                                      className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                                    >
                                      <div className="text-sm font-medium leading-none">
                                        {subItem.title}
                                      </div>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </motion.div>
          )}
        </AnimatePresence>

        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex h-full items-center justify-center">
            <Image
              src={
                isCollapsed ? '/images/logo/small.svg' : '/images/logo/full.svg'
              }
              alt="Ensi Home"
              width={isCollapsed ? 40 : 100}
              height={isCollapsed ? 40 : 40}
              className="transition-all duration-300 ease-in-out"
            />
          </div>
        </Link>

        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              className="flex items-center space-x-4"
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
            >
              <Link href="/knowledge-base/how-it-is-done">
                <Button variant="primary" onClick={handleLinkClick}>
                  {m.contact_with_us()}
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline">Blog</Button>
              </Link>
              <LanguageSwitcher />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
