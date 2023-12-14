'use client';

import { Select } from '@/components/molecules/Select';
import { useFormState } from 'react-dom';
import { twMerge as tw } from 'tailwind-merge';
import { submit } from '../actions/contact-us';
import Button from '@/components/atoms/Button';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type State = { message: string };

export default function Contact() {
  const router = useRouter();
  const [formStatus, formAction] = useFormState<State, FormData>(submit, {
    message: '',
  });

  // redirect out if formStatus message not empty
  useEffect(() => {
    if (!!formStatus?.message) {
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  }, [formStatus?.message]);

  return (
    <main>
      <form action={formAction}>
        <section className={tw('bg-white', 'pb-6')}>
          <div className={tw('mx-auto', 'p-4', 'sm:p-6', 'lg:p-8')}>
            <div
              className={tw('container', 'mx-auto', 'px-6', 'p-6', 'bg-white')}
            >
              <div className={tw('mb-16', 'text-center')}>
                {/* add extra select: ¿Pagarías por algo así? Sí/No */}
                <Select
                  options={[
                    { label: 'Sí', value: 'yes' },
                    { label: 'No', value: 'no' },
                  ]}
                  label='¿Pagarías al mes por un servicio así?'
                  name='wouldPay'
                />
                {/* add extra select: How much? */}
                <Select
                  options={[
                    { label: 'Menos de $100', value: 'lessThan100' },
                    { label: 'Entre $100 y $200', value: 'between100and200' },
                    { label: 'Más de $200', value: 'moreThan200' },
                  ]}
                  label='¿Cuánto pagarías?'
                  name='howMuch'
                  defaultValue='between100and200'
                />
              </div>
              <Button type='submit' pendingMessage='Enviando...'>
                Contáctanos
              </Button>
            </div>
          </div>
        </section>
      </form>
    </main>
  );
}
