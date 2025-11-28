'use client'

import React from 'react'
import Link from 'next/link'
import { Home, Layers, LucideBuilding, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'

type NavLink = {
  name: string
  href: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const links: NavLink[] = [
  { name: 'Home', href: '/', Icon: Home },
  { name: 'Projects', href: '/projects', Icon: Layers },
  { name: 'Services', href: '/services', Icon: LucideBuilding },
  { name: 'Contact', href: '/contact', Icon: Mail },
]

const BottomNavigation= () => {
  const pathname = usePathname()

  return (
    <nav className="z-30 fixed bottom-0 left-0 lg:hidden w-full h-[82px] grid grid-cols-4 bg-secondary border-t border-gray-200">
      {links.map(({ name, href, Icon }) => {
        const active = pathname === href

        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? 'page' : undefined}
            className={`flex flex-col items-center justify-start pt-2 gap-1 transition-colors ${
              active ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Icon className={`w-6 h-6 ${active ? 'text-white' : 'text-gray-400'}`} />
            <span className="text-xs font-medium">{name}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export default BottomNavigation
