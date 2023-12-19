import { twMerge as tw } from 'tailwind-merge';
import { Button } from '@/components/atoms/Button';
import Image from 'next/image';

const CUSTOMERS = [
  {
    src: '/images/udg.jpg',
    alt: 'udg-logo',
    width: 120,
    height: 120,
    className: tw(`m-12 mb-8`),
  },
  {
    src: '/images/college-board.jpg',
    alt: 'college-board-logo',
    width: 120,
    height: 120,
    className: tw(`m-12 mb-8`),
  },
];

const HeroSection = () => (
  <header className={tw(`bg-white min-h-screen`)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <Image
        src='/images/uniprep-no-bg.jpg'
        alt='logo'
        width={300}
        height={300}
        className={tw(`mb-6 mx-auto rounded-lg`)}
      />
      <h1
        className={tw(
          `font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`
        )}
      >
        Tu asistente virtual personalizado para el College Board
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p
          className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}
        >
          Resuelva dudas 24/7 con nuestro chatbot inteligente 🤖. <br />
          Practica con exámenes ilimitados y obtén tu mejor calificación 📈.
        </p>
      </div>
      <div
        className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}
      >
        <Button link='/contacto' primary>
          Prueba gratis
        </Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p
          className={tw(
            `font-mono uppercase text-center font-medium text-sm text-gray-600`
          )}
        >
          {/* Nuestros clientes */}
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
