'use client';
import { Menu } from 'lucide-react';
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import NavigationMenuButton from './NavigationMenuBtn';
import Logo from '../shared/Logo';

const Navbar = () => {
  const [openSheet, setOpenSheet] = useState(false);

  const handleSheetClose = () => {
    setOpenSheet(false);
  };

  return (
    <div className='sticky top-0 z-50 bg-white shadow-lg '>
      <div className='mx-4 flex  h-[70px] flex-row items-center justify-between  lg:mx-[15%]'>
        <Logo />
        <div className='hidden lg:flex flex-row items-center gap-5'>
          <NavigationMenuButton />
        </div>

        <div className='text-gray-800 lg:hidden flex flex-row items-center gap-5'>
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger className='text-gray-800 lg:hidden flex flex-row items-center gap-5 cursor-pointer'>
              <Menu />
            </SheetTrigger>
            <SheetContent className='w-[200px]'>
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <NavigationMenuButton
                  linkClassName='flex flex-col'
                  onClose={handleSheetClose}
                />
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
