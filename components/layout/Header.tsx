'use client'
import Image from 'next/image'
import logo from '../../public/logo.png'
import NavList from './NavList'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
 
import { useState } from 'react'
import Link from 'next/link'
import { RiMenu5Fill } from "react-icons/ri";

const Header = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <header className='flex   w-full '>
      <div className='flex items-center justify-between w-full py-4'>
        <Link href="/" className="block">
          <Image
            src={logo}
            alt="company logo"
            width={160}
            height={48}
            className="w-20 h-12 object-contain lg:w-30 lg:h-30 transition-all"
            priority
          />
        </Link>
        <div className=" hidden lg:flex flex-row items-center ">
          <div className='hidden  lg:flex bg-white h-[60px] px-4  '>
          <NavList  onLinkClick={handleCloseMobileMenu} />   
           
        </div>
          <Button className="px-6 text-secondary h-[60px] text-base  rounded-none hover:text-white hover:bg-secondary transition-colors">
            Free Consultation
          </Button>
        </div>
        
<div className="lg:hidden px-4">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open menu">
                <RiMenu5Fill size={30} />
              </button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px] bg-white px-4">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              
              <div className="flex flex-col gap-8 mt-8">
                <Link href="/" onClick={handleCloseMobileMenu}>
                  <Image 
                    src={logo} 
                    alt="logo" 
                    width={200} 
                    height={60}
                    className="mb-8 z-20 "
                  />
                </Link>
                
                <NavList isMobile onLinkClick={handleCloseMobileMenu} />
                
                <div className="hidden lg:flex flex-col gap-4 mt-4">
                  
                <Link href={'/contact'}>
                <Button 
                   
                    className="w-full  px-6 text-secondary py-6 rounded-none hover:text-white hover:bg-secondary transition-colors"
                    onClick={handleCloseMobileMenu}
                  >
                    Free Consultation
                  </Button>
                </Link>
                  
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}

export default Header