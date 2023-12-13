'use client';

import { twMerge as tw } from 'tailwind-merge';
import { useState } from 'react';
import Link from 'next/link';

import Button from '@/components/atoms/Button';

interface MenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links = [
  {
    label: `Features`,
    href: `/`,
  },
  {
    label: `Testimonials`,
    href: `/`,
  },
  {
    label: `Pricing`,
    href: `/`,
  },
  {
    label: `Blog`,
    href: `/`,
  },
];

const secondaryLinks = [
  {
    label: `Contact sales`,
    href: `/`,
  },
  {
    label: `Log in`,
    href: `/`,
  },
  {
    label: `Get Started`,
    href: `/`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }: MenuButton) => (
  <button
    type='button'
    aria-controls='mobile-menu'
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-gray-400`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'
        width={24}
        height={24}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'
        width={24}
        height={24}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4 6h16M4 12h16M4 18h16'
        />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link: Link) => (
        <Button
          key={`mobile-${link.label}`}
          link={link.href}
          modifier='border-0'
        >
          {link.label}
        </Button>
      ))}
    </div>
    <div className={tw(`pt-4 pb-3 border-t border-gray-400`)}>
      <div className={tw(`px-2 space-y-1`)}>
        {secondaryLinks.map((link: Link) => (
          <Button
            key={`mobile-${link.label}`}
            link={link.href}
            modifier='border-0'
          >
            {link.label}
          </Button>
        ))}
      </div>
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex items-center w-full`)}>
              <Link href='/'>
                <p className={tw(`text-4xl text-indigo-500 font-bold`)}>NERD</p>
              </Link>
            </div>
            <div className={tw(`hidden md:block`)}>
              <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                {links.map((link: Link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={tw(
                      `text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium`
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              <Button primary link='/contacto' modifier='border-0 mr-2'>
                Contáctanos
              </Button>
            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;
