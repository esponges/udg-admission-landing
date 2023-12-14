'use client';

import { Select } from '@/components/molecules/Select';
import { useFormState } from 'react-dom';
import { twMerge as tw } from 'tailwind-merge';
import { submit } from '../actions/contact-us';
import Button from '@/components/atoms/Button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type State = { message: string };

export default function Contact() {
  const router = useRouter();
  const [formStatus, formAction] = useFormState<State, FormData>(submit, {
    message: '',
  });
  const [formValues, setFormValues] = useState<{
    wouldPay: string;
    howMuch: string;
  }>({
    wouldPay: 'yes',
    howMuch: '',
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
                <Select
                  options={[
                    { label: 'Sí', value: 'yes' },
                    { label: 'No', value: 'no' },
                  ]}
                  label='¿Pagarías al mes por un servicio así?'
                  name='wouldPay'
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      wouldPay: e.target.value,
                    });
                  }}
                />
                {formValues.wouldPay === 'yes' ? (
                  <Select
                    options={[
                      { label: 'Menos de $100', value: 'lessThan100' },
                      { label: 'Entre $100 y $200', value: 'between100and200' },
                      { label: 'Más de $200', value: 'moreThan200' },
                    ]}
                    label='¿Cuánto pagarías?'
                    name='howMuch'
                  />
                ) : (
                  <Select
                    options={[
                      { label: 'No me interesa', value: 'notInterested' },
                      { label: 'No tengo tiempo', value: 'noTime' },
                      { label: 'No tengo dinero', value: 'noMoney' },
                      { label: 'No creo que funcione', value: 'noBelieve' },
                      { label: 'No tengo internet', value: 'noInternet' },
                      { label: 'Otro', value: 'other' },
                    ]}
                    label='¿Por qué no?'
                    name='whyNot'
                  />
                )}
                <Button type='submit' pendingMessage='Enviando...' modifier='mt-10' primary>
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </section>
      </form>
    </main>
  );
}
