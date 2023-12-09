import { twMerge as tw } from 'tailwind-merge';
import Button from '@/components/atoms/Button';
import Image from 'next/image';

const CUSTOMERS = [
  {
    src: '/images/tcs.jpg',
    alt: 'tcs-logo',
    width: 120,
    height: 120,
    className: tw(`m-12 mb-8`),
  },
  {
    src: '/images/udg.jpg',
    alt: 'udg-logo',
    width: 120,
    height: 120,
    className: tw(`m-12 mb-8`),
  },
];

const HeroSection = () => (
  <header className={tw(`bg-white min-h-screen`)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <Image
        src="/images/digitron-square-blue.jpg"
        alt="logo"
        width={300}
        height={300}
        className={tw(`mb-6 mx-auto`)}
      />
      <h1
        className={tw(
          `font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`
        )}
      >
        Impresoras y toners a tu alcance
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p
          className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}
        >
          Te brindamos la mejor calidad en impresoras y toners para tu negocio
        </p>
      </div>
      <div
        className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}
      >
        <Button primary>Contáctanos</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p
          className={tw(
            `font-mono uppercase text-center font-medium text-sm text-gray-600`
          )}
        >
          Nuestros clientes
        </p>
        <div
          className={tw(`flex items-center justify-center mx-auto flex-wrap`)}
        >
          {CUSTOMERS.map((customer) => (
            <div key={customer.src} className={tw(`flex items-center`)}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image {...customer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </header>
);

export default HeroSection;
