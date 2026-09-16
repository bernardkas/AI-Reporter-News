'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { usePathname } from 'next/navigation';

interface NaviagtionMenuButtonProps {
  onClose?: () => void;
  className?: string;
  linkClassName?: string;
}

export default function NavigationMenuButton({
  onClose,
  className,
  linkClassName,
}: NaviagtionMenuButtonProps) {
  const pathname = usePathname();

  const components: { title: string; href: string }[] = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Sport',
      href: '/sport',
    },
    {
      title: 'Business',
      href: '/business',
    },
    {
      title: 'Innovation',
      href: '/innovation',
    },
    {
      title: 'Travel',
      href: '/travel',
    },
  ];
  return (
    <NavigationMenu>
      <NavigationMenuList className={cn(className)}>
        <NavigationMenuItem>
          {components.map(item => (
            // <Link key={item.title} onClick={onClose} href={item.href} passHref>
            <NavigationMenuLink
              key={item.title}
              onClick={onClose}
              href={item.href}
              className={cn(
                navigationMenuTriggerStyle(),
                linkClassName,
                'rounded-full hover:bg-transparent',
                pathname === item.href && 'bg-gray-200 text-black'
              )}>
              {item.title}
            </NavigationMenuLink>
            // </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}>
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
