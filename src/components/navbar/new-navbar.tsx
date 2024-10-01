'use client';

import { useEffect, useState } from 'react';
import { Menu, MoveRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
      title: m.about_ensi_home(),
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
          title: m.how_it_works(),
          href: `/${locale}/support/how-it-works`,
        },
        {
          title: m.faq(),
          href: `/${locale}/support/faq`,
        },
        {
          title: m.technical_support(),
          href: `/${locale}/support/technical-support`,
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
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

  const handleLinkClick = () => {
    setOpen(false); // Close the drawer after a link is clicked
  };

  return (
    <header
      className={`fixed w-full transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } z-50`}
    >
      <div className="bg-background fixed left-0 top-0 z-40 w-full">
        <div className="container relative mx-auto flex min-h-20 flex-row items-center gap-4 lg:grid lg:grid-cols-3">
          <div className="hidden flex-row items-center justify-start gap-4 lg:flex">
            <NavigationMenu className="flex items-start justify-start">
              <NavigationMenuList className="flex flex-row justify-start gap-4">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.href ? (
                      <>
                        <Link href={item.href}>
                          <Button variant="ghost" onClick={handleLinkClick}>
                            {item.title}
                          </Button>
                        </Link>
                      </>
                    ) : (
                      <>
                        <NavigationMenuTrigger className="text-sm font-medium">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="!w-[450px] p-4">
                          <div className="flex grid-cols-2 flex-col gap-4 lg:grid">
                            <div className="flex h-full flex-col justify-between">
                              <div className="flex flex-col">
                                <p className="text-base">{item.title}</p>
                                <p className="text-muted-foreground text-sm">
                                  {item.description}
                                </p>
                              </div>
                              <Button size="sm" className="mt-10">
                                {m.contact_with_us()}
                              </Button>
                            </div>
                            <div className="flex h-full flex-col justify-end text-sm">
                              {item.items?.map((subItem) => (
                                <NavigationMenuLink
                                  href={subItem.href}
                                  key={subItem.title}
                                  className="hover:bg-muted flex flex-row items-center justify-between rounded px-4 py-2"
                                >
                                  <span>{subItem.title}</span>
                                  <MoveRight className="text-muted-foreground size-4" />
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Link href="/">
            <div className="flex lg:justify-center">
              {/* Small Screen Logo */}
              <Image
                src="/images/logo/small.svg"
                alt="Ensi Home"
                layout="responsive"
                width={100}
                height={100}
                className="block transition-all duration-500 ease-in-out lg:hidden"
                objectFit="contain"
                style={{ maxWidth: '40%', height: 'auto' }}
              />

              <Image
                src="/images/logo/full.svg"
                alt="Ensi Home"
                layout="responsive"
                width={100}
                height={100}
                className="hidden transition-all duration-500 ease-in-out lg:block"
                objectFit="contain"
                style={{ maxWidth: '40%', height: 'auto' }}
              />
            </div>
          </Link>

          <div className="flex w-full justify-end gap-4">
            <Link href="/contact" className="hidden md:inline">
              <Button variant="outline" onClick={handleLinkClick}>
                {m.contact_with_us()}
              </Button>
            </Link>
            <div className="hidden border-r md:inline"></div>
            <Link href="/blog">
              <Button variant="primary">Blog</Button>
            </Link>
            {/* <Button onClick={handleLinkClick}>{m.get_started()}</Button> */}
            <LanguageSwitcher />
          </div>
          <div className="flex w-12 shrink items-end justify-end lg:hidden">
            <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
            {isOpen && (
              <div className="bg-background container absolute right-0 top-20 flex w-full flex-col gap-8 border-t py-4 shadow-lg">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    <div className="flex flex-col gap-2">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="flex items-center justify-between"
                          onClick={handleLinkClick}
                        >
                          <span className="text-lg">{item.title}</span>
                          <MoveRight className="text-muted-foreground size-4 stroke-1" />
                        </Link>
                      ) : (
                        <p className="text-lg">{item.title}</p>
                      )}
                      {item.items &&
                        item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="flex items-center justify-between"
                            onClick={handleLinkClick}
                          >
                            <span className="text-muted-foreground">
                              {subItem.title}
                            </span>
                            <MoveRight className="size-4 stroke-1" />
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
