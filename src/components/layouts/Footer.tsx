import { twMerge as tw } from 'tailwind-merge';
import Image from 'next/image';
import ContactUs from '../molecules/ContactUs';
import Link from 'next/link';

const productLinks = [
  `Features`,
  `Customers`,
  `Platform`,
  `Pricing`,
  `Enterprise`,
  `What's new?`,
];
const aboutLinks = [
  `About Us`,
  `Careers`,
  `Leadership`,
  `Blog`,
  `Events`,
  `Press`,
];
const resourceLinks = [
  `Get started`,
  `Guides`,
  `Tools`,
  `Case studies`,
  `Solutions`,
  `FAQs`,
  `Help Center`,
  `Training`,
  `Other resources`,
];

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
    <div
      className={tw(
        `max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`
      )}
    >
      <Link href='/'>
        <div className={tw(`mb-14 flex items-center w-full`)}>
          <Image
            src='/images/uniprep-no-bg.jpg'
            alt='logo'
            width={48}
            height={48}
            className={tw(`h-12 w-12 mr-4`)}
          />
          <p className={tw(`text-4xl text-indigo-500 font-bold`)}>UNIPREP</p>
        </div>
      </Link>
      <div className={tw(`w-full lg:w-1/2`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>
                Product
              </h4>
              <ul>
                {productLinks.map((link) => (
                  <li
                    className={tw(
                      `text-gray-800 text-sm font-medium leading-6`
                    )}
                    key={link}
                  >
                    <a href='/'>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>
                Resources
              </h4>
              <ul>
                {resourceLinks.map((link) => (
                  <li
                    className={tw(
                      `text-gray-800 text-sm font-medium leading-6`
                    )}
                    key={link}
                  >
                    <a href='/'>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>
                About Us
              </h4>
              <ul>
                {aboutLinks.map((link) => (
                  <li
                    className={tw(
                      `text-gray-800 text-sm font-medium leading-6`
                    )}
                    key={link}
                  >
                    <a href='/'>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <ContactUs />
    </div>
  </footer>
);

export default Footer;
