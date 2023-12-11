import Image from "next/image";
import { twMerge as tw } from "tailwind-merge";

import Button from "@/components/atoms/Button";

const features = [
  `Exámenes ilimitados`,
  `Practica por tema o por examen`,
  `Siempre preguntas nuevas`,
  `Asesoría personalizada`,
  `Evalúa tu progreso`,
  `Detecta tus debilidades`,
];

const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}>Tu mejor calificación te espera</h2>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500`)}>
            Lorem id ullamco pariatur eiusmod labore qui deserunt incididunt deserunt nostrud. Tempor duis in
            adipisicing exercitation ipsum nostrud esse. Reprehenderit cupidatat sint est deserunt id eiusmod amet
            aliqua officia.
          </p>
          <div className={tw(`mt-8`)}>
            <div className={tw(`flex items-center`)}>
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold uppercase text-indigo-600`,
                )}
              >
                Incluye
              </h3>
              <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
            </div>
            <ul className={tw(`mt-8 lg:grid lg:grid-cols-2`)}>
              {features.map((feature) => (
                <li className={tw(`flex items-center lg:col-span-1`)} key={feature}>
                  <div className={tw(`flex-shrink-0`)}>
                    <Image
                      src="/svgs/check.svg"
                      alt="check"
                      width={32}
                      height={32}
                      className={tw(`h-8 w-8 mr-3 mb-1`)}
                    />
                  </div>
                  <p className={tw(`text-gray-600`)}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={tw(
            `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
          )}
        >
          {/* <p className={tw(`text-lg font-medium text-gray-800`)}>...</p>
          <div className={tw(`my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800`)}>
            $99/mo
          </div> */}
          <Button primary modifier="mt-6">
            Contactános
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
