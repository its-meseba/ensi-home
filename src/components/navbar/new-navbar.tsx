'use client';

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Menu, MoveRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  motion,
  useAnimation,
  AnimatePresence,
  useScroll,
  useTransform,
  useDragControls,
} from 'framer-motion';

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
  const pathname = usePathname();
  const navigationItems = useMemo(
    () => [
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
    ],
    [locale]
  );

  const [isOpen, setOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const lastScrollY = useRef(0);
  const controls = useAnimation();
  const dragControls = useDragControls();
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  const { scrollY } = useScroll();
  const navbarBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsCollapsed(true);
        setOpen(false); // Close the drawer when scrolling down
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

  useEffect(() => {
    if (isOpen) {
      firstMenuItemRef.current?.focus();
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) {
      setOpen(false);
    }
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

  const staggerMenuItems = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const menuItemHoverVariants = {
    hover: {
      scale: 1.05,
      color: 'var(--color-primary)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
        when: 'afterChildren',
      },
    },
  };

  const logoVariants = {
    expanded: {
      width: 100,
      height: 40,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
    collapsed: {
      width: 40,
      height: 40,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <motion.header
      className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center rounded-3xl shadow-lg"
      initial="expanded"
      animate={[isCollapsed ? 'collapsed' : 'expanded']}
      variants={navVariants}
      style={{ backgroundColor: navbarBackground }}
    >
      <div className="relative flex size-full items-center justify-between px-4 py-2">
        <div className="flex flex-1 items-center justify-start">
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                className="hidden items-center space-x-4 md:flex"
                variants={contentVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
              >
                <NavigationMenu>
                  <NavigationMenuList
                  // variants={staggerMenuItems}
                  // initial="closed"
                  // animate="open"
                  >
                    {navigationItems.map((item) => (
                      <NavigationMenuItem key={item.title}>
                        {item.href ? (
                          <Link href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink asChild>
                              <motion.a
                                className={`text-sm font-medium transition-colors ${
                                  pathname === item.href
                                    ? 'text-primary'
                                    : 'text-foreground'
                                }`}
                                variants={menuItemVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.95 }}
                              >
                                {item.title}
                                {pathname === item.href && (
                                  <motion.div
                                    className="bg-primary h-0.5"
                                    layoutId="activeIndicator"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{
                                      type: 'spring',
                                      stiffness: 300,
                                      damping: 30,
                                    }}
                                  />
                                )}
                              </motion.a>
                            </NavigationMenuLink>
                          </Link>
                        ) : (
                          <>
                            <NavigationMenuTrigger className="text-sm font-medium">
                              <motion.span variants={menuItemVariants}>
                                {item.title}
                              </motion.span>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <motion.ul
                                className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                                variants={dropdownVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                              >
                                {item.items?.map((subItem) => (
                                  <li key={subItem.title}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        href={subItem.href}
                                        className={`hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors ${
                                          pathname === subItem.href
                                            ? 'bg-accent text-accent-foreground'
                                            : ''
                                        }`}
                                      >
                                        <motion.div
                                          className="text-sm font-medium leading-none"
                                          variants={menuItemHoverVariants}
                                          whileHover="hover"
                                        >
                                          {subItem.title}
                                        </motion.div>
                                        {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                          {subItem.description}
                                        </p> */}
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </motion.ul>
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
        </div>

        {isCollapsed ? (
          <div className="flex size-full items-center justify-center">
            <Link href="/">
              <motion.div variants={logoVariants} className="flex items-center">
                <Image
                  src="/images/logo/small.svg"
                  alt="Ensi Home"
                  width={40}
                  height={40}
                  className="transition-all duration-300 ease-in-out"
                />
              </motion.div>
            </Link>
          </div>
        ) : (
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <motion.div variants={logoVariants} className="flex items-center">
              <Image
                src={
                  isCollapsed
                    ? '/images/logo/small.svg'
                    : '/images/logo/full.svg'
                }
                alt="Ensi Home"
                width={isCollapsed ? 40 : 100}
                height={40}
                className="transition-all duration-300 ease-in-out"
              />
            </motion.div>
          </Link>
        )}

        <div className="flex flex-1 items-center justify-end">
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                className="hidden items-center space-x-4 md:flex"
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

          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                className="flex h-full items-center md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => setOpen(!isOpen)}
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                >
                  {isOpen ? (
                    <X className="size-6" />
                  ) : (
                    <Menu className="size-6" />
                  )}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="bg-background/80 fixed inset-0 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              />
              <motion.div
                className="bg-background absolute right-0 top-full h-screen w-4/5 max-w-sm overflow-hidden shadow-lg"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                drag="x"
                dragControls={dragControls}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
              >
                <motion.div
                  className="space-y-4 px-4 py-6"
                  variants={staggerMenuItems}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="space-y-2"
                      variants={menuItemVariants}
                    >
                      {item.href ? (
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          ref={index === 0 ? firstMenuItemRef : null}
                        >
                          <motion.span
                            className={`block text-lg font-medium ${
                              pathname === item.href
                                ? 'text-primary'
                                : 'text-foreground'
                            }`}
                            variants={menuItemHoverVariants}
                            whileHover="hover"
                          >
                            {item.title}
                          </motion.span>
                        </Link>
                      ) : (
                        <>
                          <motion.span
                            className="block text-lg font-medium"
                            variants={menuItemHoverVariants}
                            whileHover="hover"
                          >
                            {item.title}
                          </motion.span>
                          <motion.div
                            className="space-y-2 pl-4"
                            variants={dropdownVariants}
                          >
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                onClick={handleLinkClick}
                              >
                                <motion.span
                                  className={`block text-sm ${
                                    pathname === subItem.href
                                      ? 'text-primary'
                                      : 'text-foreground'
                                  }`}
                                  variants={menuItemHoverVariants}
                                  whileHover="hover"
                                >
                                  {subItem.title}
                                </motion.span>
                              </Link>
                            ))}
                          </motion.div>
                        </>
                      )}
                    </motion.div>
                  ))}
                  <motion.div className="space-y-2" variants={menuItemVariants}>
                    <Link href="/knowledge-base/how-it-is-done">
                      <Button
                        variant="primary"
                        className="w-full"
                        onClick={handleLinkClick}
                      >
                        {m.contact_with_us()}
                      </Button>
                    </Link>
                    <Link href="/blog">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={handleLinkClick}
                      >
                        Blog
                      </Button>
                    </Link>
                    <div className="pt-2">
                      <LanguageSwitcher />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
