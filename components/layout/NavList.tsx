'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconType } from "react-icons";
import { FaHome, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

type DropDownItems = {
  id?: string;
  name: string;
  path: string;
};

type MenuList = {
  id: number;
  name?: string;
  icon?: IconType;
  path: string;
  dropdown?: DropDownItems[];
};

export const menuList: MenuList[] = [
  { id: 1, icon: FaHome, path: "/" },
  { id: 2, name: "About", path: "/about" },
  {id:3, name:"Service", path:"/service" },
  { id: 4, name: "Faq", path: "/faqs" },
  { id: 5, name: "Blog", path: "/blog" },
  {id:6, name:"Contact",path:"/contact"},
  {
    id: 7,
    name: "Shop",
    path: "#",
    dropdown: [
      { name: "Shops", path: "/shop" },
      { name: "Cart", path: "/cart" },
      { name: "WishList", path: "/wish-list" },
    ],
  },
];

interface NavListProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const NavList = ({ isMobile = false, onLinkClick }: NavListProps) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const pathname = usePathname();

  // Check if any dropdown item is active
  const isDropdownActive = (dropdown?: DropDownItems[]) => {
    if (!dropdown) return false;
    return dropdown.some(item => pathname === item.path);
  };

  const handleLinkClick = () => {
    if (onLinkClick) onLinkClick();
  };

  return (
    <div className={`flex ${isMobile ? 'flex-col space-y-6' : 'items-center space-x-10'}`}>
      <div className={`flex ${isMobile ? 'flex-col space-y-6' : 'items-center space-x-15'} text-secondary text-[18px] font-poppins font-medium`}>
        {menuList.map((menu) => {
          // Fixed active link logic
          const isActive = menu.path === "/"
            ? pathname === "/"
            : menu.path !== "#" && pathname.startsWith(menu.path);
          
          const hasActiveDropdown = isDropdownActive(menu.dropdown);
          const isDropdownOpen = openDropdown === menu.id;

          return menu.dropdown ? (
            <DropdownMenu 
              open={isDropdownOpen} 
              onOpenChange={(open) => setOpenDropdown(open ? menu.id : null)} 
              key={menu.id}
            >
              <DropdownMenuTrigger 
                className={`
                   relative flex w-full justify-center items-center gap-1 
                  group transition-colors duration-300 outline-none
                  ${hasActiveDropdown ? 'text-primary' : ''}
                  ${isMobile ? 'w-full justify-start' : ''}
                `}
              >
                {menu.name}
                <FaChevronDown 
                  className={`transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
                {/* Hover border animation */}
                <span 
                  className={`
                    absolute  right-full h-[4px] bg-primary
                    transition-all duration-300 ease-out
                    ${hasActiveDropdown ? 'w-4' : 'w-0 group-hover:w-full'}
                  `}
                />
              </DropdownMenuTrigger>

              <DropdownMenuContent 
                asChild 
                align="start"
                className="rounded-none p-0 w-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-80"
                >
                  {menu.dropdown.map((subMenu, idx) => {
                    const isSubMenuActive = pathname === subMenu.path;
                    return (
                      <DropdownMenuItem
                        className={`relative w-full rounded-none ${isSubMenuActive ? 'bg-primary/10' : ''}`}
                        key={subMenu.id ?? `${menu.id}-${idx}`}
                        onClick={handleLinkClick}
                      >
                        <Link href={subMenu.path} className="w-full">
                          {subMenu.name}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </motion.div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              whileHover={{ y: -2 }}
              key={menu.id} 
              className={`relative w-full group text-secondary border-b lg:border-none border-b-secondary w-full ${isMobile ? 'w-full' : ''}`}
            >
              <Link 
                href={menu.path}
                className={`${isActive ? 'text-white lg:text-secondary':'text-secondary'} gap-1 transition-colors duration-300`}
                onClick={handleLinkClick}
              >
                {menu.icon && <menu.icon />}
                {menu.name}
              </Link>
              {/* Animated border bottom */}
              <span 
                className={`
                  absolute  right-full top-1/2 translate-y-1/2 h-[2px] bg-primary
                  transition-all duration-300 ease-out
                  ${isActive ? '  w-1/2  ' : ' group-hover:w-full'}
                `}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default NavList;